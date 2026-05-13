import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import RateCardPDF from "../pdf/RateCardPDF";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0fgf7o5",
        "template_aax3ec2",
        form.current,
        "KRy1TJP0-cqbAHLsW"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact <span className="text-blue-600">Me</span>
        </h2>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl border dark:bg-gray-900"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl border dark:bg-gray-900"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            rows="6"
            className="w-full p-3 rounded-xl border dark:bg-gray-900"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* CONTACT OPTIONS */}
        <div className="mt-12 text-center space-y-3">

          <p className="text-gray-500">Prefer direct contact?</p>

          {/* Phone */}
          <a
            href="tel:+254758461202"
            className="flex items-center justify-center gap-2 text-blue-600 font-medium transition-all duration-300 hover:text-blue-500 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
          >
            <Phone size={18} />
            +254 758 461 202
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254758461202"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-green-600 font-medium transition-all duration-300 hover:text-green-500 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]"
          >
            <MessageCircle size={18} />
            WhatsApp Me
          </a>

          {/* Email */}
          <a
            href="mailto:shallenmwende9@gmail.com"
            className="flex items-center justify-center gap-2 text-red-500 font-medium transition-all duration-300 hover:text-red-400 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]"
          >
            <Mail size={18} />
            Send Email
          </a>

          {/* RATE CARD PDF DOWNLOAD */}
          <div className="mt-8">
            <PDFDownloadLink
              document={<RateCardPDF />}
              fileName="Shallen-Mwende-RateCard.pdf"
            >
              {({ loading }) =>
                loading ? (
                  <button className="bg-gray-400 text-white px-6 py-2 rounded-xl">
                    Preparing Rate Card...
                  </button>
                ) : (
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
                    Download Rate Card 📄
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;