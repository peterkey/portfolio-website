"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import AnimatedNumbers to avoid SSR issues
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
  loading: () => <span className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark text-4xl font-bold">0</span>
});

const AchievementsSection = () => {
  const achievements = [
    {
      metric: "Colleagues Supported",
      value: 20,
      postfix: "+",
    },
    {
      metric: "Customers Served Weekly",
      value: 120,
      postfix: "+",
    },
    {
      metric: "Years Customer Service",
      value: 8,
      postfix: "+",
    },
  ];

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-trueAutumn-light dark:bg-trueAutumn-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-trueAutumn-accentLight dark:border-trueAutumn-accentDark border rounded-lg py-12 px-8 flex flex-col md:flex-row items-center justify-between bg-trueAutumn-cardLight/50 dark:bg-trueAutumn-cardDark/50 backdrop-blur-sm">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-trueAutumn-textLight dark:text-trueAutumn-textDark text-4xl font-bold flex flex-row font-heading">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value}
                  locale="en-US"
                  className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark text-4xl font-bold"
                />
                {achievement.postfix}
              </h2>
              <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-base font-body mt-2">{achievement.metric}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection; 