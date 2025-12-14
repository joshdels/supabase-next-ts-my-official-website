# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install all dependencies (including dev)
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Copy source
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only package.json & lockfile
COPY package*.json ./

# Install only production dependencies
RUN npm ci --production --ignore-scripts --prefer-offline

# Copy built files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

EXPOSE 3000
CMD ["npm", "start"]
