export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-gray-700 mb-6 text-center max-w-xl">
        Feel free to reach out for collaborations or questions!
      </p>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-semibold">Message</label>
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          rows="5"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}