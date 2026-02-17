"use client";
import { motion } from "framer-motion";
import { UserGroupIcon, DocumentTextIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const TestimonialsSection = () => {
  return (
    <section id="references" className="py-20 sm:py-28 px-4 bg-trueAutumn-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="eyebrow mb-3">Vouched for</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-trueAutumn-textDark mb-4 font-heading">Professional References</h2>
          <p className="text-trueAutumn-textSecondaryDark text-lg max-w-content mx-auto font-body">
            References available upon request from current and previous employers, colleagues, and professional contacts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            className="glow-card glass border rounded-2xl p-8 text-center"
            >
            <div className="flex justify-center mb-4">
                            <UserGroupIcon className="h-12 w-12 text-[#22D3EE]" />
              </div>
            <h3 className="text-trueAutumn-textDark font-semibold mb-3 font-heading">Current Employer</h3>
            <p className="text-trueAutumn-textSecondaryDark text-sm mb-4 font-body">
              Tesco Stores PLC - Customer Delivery Driver
            </p>
            <p className="text-trueAutumn-textSecondaryDark text-sm font-body">
              Can provide reference for IT support work, customer service skills, and technical troubleshooting abilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glow-card glass border rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <DocumentTextIcon className="h-12 w-12 text-[#22D3EE]" />
            </div>
            <h3 className="text-trueAutumn-textDark font-semibold mb-3 font-heading">Professional Development</h3>
            <p className="text-trueAutumn-textSecondaryDark text-sm mb-4 font-body">
              Course Instructors & Mentors
            </p>
            <p className="text-trueAutumn-textSecondaryDark text-sm font-body">
              References available from Udemy Web Development Bootcamp and ongoing certification studies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glow-card glass border rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <CheckCircleIcon className="h-12 w-12 text-[#22D3EE]" />
                  </div>
            <h3 className="text-trueAutumn-textDark font-semibold mb-3 font-heading">Character Reference</h3>
            <p className="text-trueAutumn-textSecondaryDark text-sm mb-4 font-body">
              Personal & Professional Contacts
            </p>
            <p className="text-trueAutumn-textSecondaryDark text-sm font-body">
              Additional references available from colleagues and professional network contacts.
            </p>
            </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass border rounded-2xl p-8 max-w-content mx-auto">
            <h3 className="text-trueAutumn-textDark font-semibold mb-2 font-heading">Ready for Your Team</h3>
            <p className="text-trueAutumn-textSecondaryDark text-sm mb-4 font-body">
              I&apos;m seeking opportunities to apply my technical skills and problem-solving abilities in a collaborative IT environment.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="text-center">
                <div className="text-[#22D3EE] font-bold text-xl font-heading">8+</div>
                <div className="text-trueAutumn-textSecondaryDark font-body">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-[#22D3EE] font-bold text-xl font-heading">20+</div>
                <div className="text-trueAutumn-textSecondaryDark font-body">Colleagues Supported</div>
              </div>
              <div className="text-center">
                <div className="text-[#22D3EE] font-bold text-xl font-heading">Available</div>
                <div className="text-trueAutumn-textSecondaryDark font-body">Immediate Start</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 