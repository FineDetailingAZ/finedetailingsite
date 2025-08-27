export default function Home() {
  const packages = [
    {
      title: "🚗 Exterior Shine & Protect",
      details: [
        "Hand wash & dry",
        "Wheels & tires cleaned + tire shine",
      ],
      price: "$70–100",
    },
    {
      title: "🛋️ Interior Basic Clean",
      details: [
        "Vacuum seats, mats, trunk",
        "Wipe down dash, doors, console",
        "Interior windows cleaned",
      ],
      price: "$70–100",
    },
    {
      title: "✨ Deep Interior Detail",
      details: [
        "Everything in Basic",
        "Steam clean vents, cracks, & crevices",
        "Carpet & upholstery shampoo OR leather clean & condition",
        "Odor neutralizer",
      ],
      price: "$150–200",
    },
    {
      title: "🚘 Full Inside & Outside Deluxe",
      details: [
        "Basic Interior Clean",
        "Shine & Protect Exterior",
      ],
      price: "$140–200",
    },
    {
      title: "🏆 Ultimate Detail",
      details: [
        "Deep Interior Detail",
        "Shine & Protect Exterior",
        "Headlight restoration",
      ],
      price: "$250–400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 text-center shadow-md">
        <div className="flex flex-col items-center">
          <img
            src="/logo.png"
            alt="Fine Detailing Logo"
            className="h-20 mb-4"
          />
          <h1 className="text-4xl font-bold">Fine Detailing</h1>
          <p className="text-lg mt-2">Mobile Detailing by Boston Ward</p>
        </div>
      </header>

      {/* Packages */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">Our Packages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-blue-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-900">{pkg.title}</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {pkg.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-lg font-semibold text-blue-700">{pkg.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call Now Button */}
      <div className="flex justify-center my-8">
        <a
          href="tel:8033702541"
          className="bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-md hover:bg-blue-800 transition"
        >
          📞 Call Now
        </a>
      </div>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 p-8 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-900">Contact Us</h2>
        <p className="mb-2">📧 Email: <a className="text-blue-600" href="mailto:FineDetailingBC@gmail.com">FineDetailingBC@gmail.com</a></p>
        <p className="mb-2">📞 Phone: <a className="text-blue-600" href="tel:8033702541">803-370-2541</a></p>
        <p className="mb-2">📘 Facebook: <a className="text-blue-600" href="https://www.facebook.com/profile.php?id=61576214060697" target="_blank">Fine Detailing</a></p>
        <p className="mb-2">📸 Instagram: <a className="text-blue-600" href="https://www.instagram.com/fine_detailingaz/" target="_blank">@fine_detailingaz</a></p>
      </section>

      {/* Booking Form */}
      <section className="p-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-900">Book an Appointment</h2>
        <form className="max-w-xl mx-auto bg-gray-50 p-6 rounded-2xl shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <select className="w-full p-3 border border-gray-300 rounded-lg" required>
            <option value="">Select Package</option>
            {packages.map((pkg, index) => (
              <option key={index} value={pkg.title}>{pkg.title} - {pkg.price}</option>
            ))}
          </select>
          <textarea
            placeholder="Preferred Date & Notes"
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-2xl font-bold hover:bg-blue-800 transition"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4 mt-8">
        <p>© {new Date().getFullYear()} Fine Detailing. All rights reserved.</p>
      </footer>
    </div>
  );
}
