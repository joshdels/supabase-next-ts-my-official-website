# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (including devDependencies for build)
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Copy all source files
COPY . .

# Build Next.js
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy package.json and lockfile
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --production --ignore-scripts --prefer-offline

# Copy built Next.js output and public assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# COPY .env . 

EXPOSE 3000

CMD ["npm", "start"]
