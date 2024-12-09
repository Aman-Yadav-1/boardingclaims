
const ContactPage: React.FC = () => {
  return (
    <div>
      <main className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Got questions or need assistance? Reach out to our support team, and we’ll be happy to
            help.
          </p>
          <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg mb-4"
              placeholder="Your Name"
            />
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg mb-4"
              placeholder="Your Email"
            />
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full p-3 border rounded-lg mb-4"
              placeholder="Your Message"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
