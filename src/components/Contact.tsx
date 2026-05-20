import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="contact section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-divider"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">04. contact</p>
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="contact__grid">
          {/* Left: blurb */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I'm currently open to new opportunities. Whether you have a
              project idea, a question, or just want to say hi — my inbox is
              always open!
            </p>
            <div className="contact__meta">
              <div className="contact__meta-item">
                <Mail size={16} className="contact__meta-icon" />
                <a href="mailto:migueltvaladao@gmail.com" className="contact__meta-link mono">
                  migueltvaladao@gmail.com
                </a>
              </div>
              <div className="contact__meta-item">
                <MapPin size={16} className="contact__meta-icon" />
                <span className="contact__meta-text">Belo Horizonte, Brazil</span>
              </div>
            </div>
            <a href="mailto:migueltvaladao@gmail.com" className="btn contact__btn">
              Say Hello <Send size={14} />
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <form
              className="contact__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label mono">Name</label>
                  <input id="name" type="text" className="contact__input" placeholder="Your name" />
                </div>
                <div className="contact__field">
                  <label htmlFor="email" className="contact__label mono">Email</label>
                  <input id="email" type="email" className="contact__input" placeholder="your@email.com" />
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="subject" className="contact__label mono">Subject</label>
                <input id="subject" type="text" className="contact__input" placeholder="What's this about?" />
              </div>
              <div className="contact__field">
                <label htmlFor="message" className="contact__label mono">Message</label>
                <textarea id="message" className="contact__textarea" rows={5} placeholder="Your message..." />
              </div>
              <button type="submit" className="btn contact__submit">
                Send Message <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
