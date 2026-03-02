"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
  loading: () => <span className="text-5xl font-bold font-mono">0</span>,
});

const achievements = [
  { value: 20,  postfix: "+", label: "Colleagues Supported",   desc: "First-line IT support in the workplace" },
  { value: 120, postfix: "+", label: "Customers Served Weekly", desc: "Consistent high-volume service delivery" },
  { value: 8,   postfix: "+", label: "Years of Experience",     desc: "In customer service and technical roles" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-trueAutumn-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-32 bg-[#00D9FF] blur-[120px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow mb-3">By the numbers</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-trueAutumn-textDark">
            Impact at a Glance
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A3A5C] rounded-2xl overflow-hidden">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="glow-card bg-trueAutumn-dark flex flex-col items-center justify-center py-12 px-8 text-center group"
            >
              {/* Animated number */}
              <div className="flex items-end gap-0.5 mb-3">
                <span className="text-5xl sm:text-6xl font-bold font-mono text-[#00D9FF]">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={item.value}
                    locale="en-US"
                    className="inline"
                  />
                </span>
                <span className="text-3xl font-bold font-mono pb-1 text-[#00D9FF]">
                  {item.postfix}
                </span>
              </div>

              <p className="text-trueAutumn-textDark font-heading font-semibold text-base mb-2">
                {item.label}
              </p>
              <p className="text-trueAutumn-textSecondaryDark font-body text-sm leading-relaxed max-w-[20ch]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
