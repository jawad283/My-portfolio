import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ContactSection = () => {
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const myPhoneNumber = "93729784504";
  const defaultMessage = encodeURIComponent(
    "Hi! I'm interested in working with you.",
  );

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${myPhoneNumber}?text=${defaultMessage}`,
      "_blank",
    );
    setShowConfirm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("https://formspree.io/f/xnjrelzd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: err.message });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                Contact{" "}
                <span className="text-indigo-500 dark:text-indigo-400">Me</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                "Every great project starts with a simple conversation. Whether
                you have a fully-formed idea or just a spark of inspiration,
                let's talk about how we can bring your vision to life in the
                digital world."
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Ph: +93 72 978 4504
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Jawad.Gh1@outlook.com
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-3xl blur-2xl" />

            <div
              className="relative rounded-3xl border border-gray-200/60 dark:border-white/10 
                          bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl 
                          shadow-2xl shadow-black/5 p-8 sm:p-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 uppercase tracking-wider">
                Get In Touch
              </h3>

              {status.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus({ ...status, submitted: false })}
                    className="text-indigo-500 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-8">
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white transition-colors"
                        required
                      />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white transition-colors"
                        required
                      />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white transition-colors"
                      />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="1"
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-white transition-colors resize-none"
                        required
                      />
                    </div>
                  </div>

                  {status.error && (
                    <p className="text-red-500 text-sm font-medium">
                      {status.error}
                    </p>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full sm:w-auto px-10 py-4 rounded-xl
                               bg-gray-900 text-white dark:bg-white dark:text-gray-900
                               text-sm font-bold uppercase tracking-widest
                               hover:shadow-lg hover:shadow-indigo-500/20 
                               disabled:opacity-50 disabled:cursor-not-allowed
                               active:scale-[0.98] transition-all duration-300"
                    >
                      {status.submitting ? "Sending..." : "Send Message"}
                    </button>

                    <div className="relative w-full sm:w-auto">
                      <AnimatePresence mode="wait">
                        {!showConfirm ? (
                          <motion.button
                            key="wa-btn"
                            type="button"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={() => setShowConfirm(true)}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl
                                     border border-green-500/50 text-green-600 dark:text-green-400
                                     text-sm font-bold uppercase tracking-widest
                                     hover:bg-green-500 hover:text-white dark:hover:bg-green-500/10
                                     transition-all duration-300 group"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="group-hover:scale-110 transition-transform"
                            >
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
                            </svg>
                            WhatsApp Me
                          </motion.button>
                        ) : (
                          <motion.div
                            key="confirm-box"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex items-center gap-2 p-1 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                          >
                            <span className="px-3 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">
                              Chat on WhatsApp?
                            </span>
                            <button
                              type="button"
                              onClick={handleWhatsApp}
                              className="px-4 py-2 bg-green-500 text-white text-[10px] font-bold rounded-lg uppercase"
                            >
                              Yes
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowConfirm(false)}
                              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded-lg uppercase"
                            >
                              No
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
