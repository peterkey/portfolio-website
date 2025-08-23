"use client";
import { motion } from "framer-motion";
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  CalendarIcon 
} from "@heroicons/react/24/outline";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  type: "work" | "education";
  description: string;
  achievements: string[];
  icon: React.ReactNode;
}

const ExperienceTimeline = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: "Customer Delivery Driver",
      company: "Tesco Stores PLC",
      period: "2016 - Present",
      type: "work",
      description: "Providing first-line IT support for colleagues while delivering excellent customer service. Diagnosing and resolving technical issues to ensure business continuity.",
      achievements: [
        "First-line IT support for 20+ colleagues",
        "Resolved Microsoft 365 login and access issues within minutes",
        "Administered and reset handheld delivery devices",
        "Delivered 1:1 training on new internal systems",
        "Assisted 120+ customers weekly with technical support"
      ],
      icon: <BriefcaseIcon className="h-6 w-6 text-[#5fdafa]" />
    },
    {
      id: 2,
      title: "Web Development Training",
      company: "Udemy Bootcamp",
      period: "2022 - 2024",
      type: "education",
      description: "Hands-on course covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and version control. Developed practical skills in technical troubleshooting and scripting.",
      achievements: [
        "Mastered HTML, CSS, JavaScript, and React",
        "Learned Node.js, Express, and MongoDB",
        "Gained version control skills with Git",
        "Developed technical troubleshooting abilities",
        "Built practical web applications"
      ],
      icon: <AcademicCapIcon className="h-6 w-6 text-[#5fdafa]" />
    },
    {
      id: 3,
      title: "B.Sc. Sound Technology",
      company: "University of South Wales",
      period: "2012 - 2015",
      type: "education",
      description: "Developed strong collaboration, technical documentation, and project coordination skills. Led technical projects using industry-standard hardware/software.",
      achievements: [
        "Led technical projects and team collaborations",
        "Developed documentation and project coordination skills",
        "Used industry-standard hardware and software",
        "Gained problem-solving and analytical thinking",
        "Completed degree with strong academic performance"
      ],
      icon: <AcademicCapIcon className="h-6 w-6 text-[#5fdafa]" />
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark mb-6 font-heading">Experience & Education</h2>
          <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-lg max-w-3xl mx-auto font-body leading-relaxed">
            My professional journey from customer service to IT support, combined with ongoing education and technical training.
          </p>
        </motion.div>

        <div className="relative">
                     {/* Timeline Line */}
           <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-trueAutumn-borderLight dark:bg-trueAutumn-borderDark"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                                 {/* Timeline Dot */}
                 <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-trueAutumn-accentLight dark:bg-trueAutumn-accentDark rounded-full border-4 border-trueAutumn-light dark:border-trueAutumn-dark z-10"></div>

                {/* Content Card */}
                                 <div className={`bg-trueAutumn-light dark:bg-trueAutumn-dark rounded-xl p-8 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark hover:border-trueAutumn-accentLight dark:hover:border-trueAutumn-accentDark transition-colors shadow-lg ${
                  index % 2 === 0 ? 'md:ml-auto md:w-5/12' : 'md:mr-auto md:w-5/12'
                } w-full ml-16 md:ml-0`}>
                    <div className="flex items-center gap-3 mb-4">
                      {item.icon}
                                         <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                       item.type === 'work' ? 'bg-trueAutumn-accentLight/20 dark:bg-trueAutumn-accentDark/20 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark' : 'bg-green-500/20 text-green-400'
                     }`}>
                      {item.type === 'work' ? 'Work Experience' : 'Education'}
                        </span>
                      </div>

                                     <h3 className="text-xl font-semibold text-trueAutumn-textLight dark:text-trueAutumn-textDark mb-2 font-heading">{item.title}</h3>
                   <p className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark text-lg mb-1 font-body">{item.company}</p>
                  
                                     <div className="flex items-center gap-2 mb-4 text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-sm font-body">
                     <CalendarIcon className="h-4 w-4" />
                     <span>{item.period}</span>
                    </div>

                   <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-sm mb-6 font-body leading-relaxed">{item.description}</p>

                    <div className="space-y-2">
                                         <h4 className="text-trueAutumn-textLight dark:text-trueAutumn-textDark font-semibold text-sm font-heading">Key Achievements:</h4>
                     <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                         <li key={achievementIndex} className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-sm font-body leading-relaxed flex items-start gap-2">
                           <span className="text-trueAutumn-accentLight dark:text-trueAutumn-accentDark mt-1">•</span>
                          <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
                     <div className="bg-trueAutumn-light dark:bg-trueAutumn-dark rounded-xl p-8 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark max-w-2xl mx-auto shadow-lg">
             <h3 className="text-trueAutumn-textLight dark:text-trueAutumn-textDark font-semibold mb-4 text-xl font-heading">Career Transition</h3>
             <p className="text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body leading-relaxed">
              My journey from customer service to IT support demonstrates my adaptability and commitment to continuous learning. 
              Each role has built upon the previous, creating a strong foundation for technical support excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline; 