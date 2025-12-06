export default function Contact() {
  return (
    <div className="border border-gray-300 rounded-xl p-6 bg-gray-100 max-w-md mx-auto">
      <form className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold mb-2">Get in Touch</h1>
        <p className="text-gray-700 mb-4">
          Want to level up your enterprise to a full-fledged operation? I'm here to help!
        </p>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            className="p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your Message"
            className="p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gray-400 rounded-md p-3 hover:bg-gray-500 text-white font-medium transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
