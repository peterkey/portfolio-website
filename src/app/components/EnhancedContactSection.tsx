"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/outline";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  opportunityType: string;
}

const EnhancedContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      opportunityType: formData.get("opportunityType") as string,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setEmailSubmitted(true);
        e.currentTarget.reset();
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      title: "Email",
      value: "prkey94@gmail.com",
      link: "mailto:prkey94@gmail.com",
      description: "Primary contact method"
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      title: "Phone",
      value: "(+44) 7711233307",
      link: "tel:+447711233307",
      description: "Available during business hours"
    },
    {
      icon: <MapPinIcon className="h-6 w-6 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      title: "Location",
      value: "Pont-y-clun, UK",
      link: "#",
      description: "Available for hybrid or in-person roles across South Wales"
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-trueAutumn-accentLight dark:text-trueAutumn-accentDark" />,
      title: "Availability",
      value: "Immediate Start Available",
      link: "#",
      description: "Flexible with notice period"
    }
  ];

  const opportunityTypes = [
    "Full-time Position",
    "Contract Role",
    "Part-time Opportunity",
    "Internship",
    "Networking",
    "Other"
  ];

  return (
        <section id='contact' className='py-16 sm:py-24 px-4 bg-trueAutumn-light dark:bg-trueAutumn-dark'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className='text-4xl font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark mb-4 font-heading'>Get In Touch</h2>
          <p className='text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-lg max-w-content mx-auto font-body'>
            I&apos;m actively seeking new opportunities in IT support and help desk roles. 
            If you have a position that matches my skills and experience, I&apos;d love to hear from you.
          </p>
        </motion.div>
        
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <div>
              <h3 className='text-2xl font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark mb-4 font-heading'>Contact Information</h3>
              <p className='text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark mb-6 font-body'>
                Multiple ways to reach me for job opportunities, networking, or professional discussions.
              </p>
            </div>

            <div className='space-y-4'>
              {contactInfo.map((info, index) => (
                <div key={index} className='flex items-start gap-4 p-4 bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark rounded-lg border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark hover:border-trueAutumn-accentLight dark:hover:border-trueAutumn-accentDark transition-colors'>
                  <div className='flex-shrink-0 mt-1'>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className='text-trueAutumn-textLight dark:text-trueAutumn-textDark font-semibold font-heading'>{info.title}</h4>
                    <a 
                      href={info.link} 
                      className='text-trueAutumn-accentLight dark:text-trueAutumn-accentDark hover:text-trueAutumn-linkLight dark:hover:text-trueAutumn-linkDark transition-colors font-body'
                    >
                      {info.value}
                    </a>
                    <p className='text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark text-sm mt-1 font-body'>{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className='pt-6'>
              <h4 className='text-trueAutumn-textLight dark:text-trueAutumn-textDark font-semibold mb-4 font-heading'>Professional Profiles</h4>
              <div className='flex gap-4'>
                <Link 
                  href='https://github.com/peterkey'
                  aria-label="Visit my GitHub profile"
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:ring-offset-2 focus:ring-offset-trueAutumn-light dark:focus:ring-offset-trueAutumn-dark rounded"
                >
                  <Image src={GithubIcon} alt='GitHub Icon' className='w-12 h-12' />
                </Link>
                <Link 
                  href='https://www.linkedin.com/in/pkey/'
                  aria-label="Visit my LinkedIn profile"
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:ring-offset-2 focus:ring-offset-trueAutumn-light dark:focus:ring-offset-trueAutumn-dark rounded"
                >
                  <Image 
                    src={LinkedinIcon} 
                    alt='LinkedIn Icon' 
                    className='w-12 h-12'
                    style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(87%) saturate(1734%) hue-rotate(191deg) brightness(93%) contrast(91%)' }}
                  />
                </Link>
              </div>
            </div>

            {/* Professional Highlights */}
            <div className='bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark rounded-lg2 p-8 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark'>
              <h4 className='text-trueAutumn-textLight dark:text-trueAutumn-textDark font-semibold mb-4 font-heading'>Professional Highlights</h4>
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div className='flex items-center gap-2 text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body'>
                  <CheckCircleIcon className='h-4 w-4 text-green-500' />
                  <span>MS-900 (In Progress)</span>
                </div>
                <div className='flex items-center gap-2 text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body'>
                  <CheckCircleIcon className='h-4 w-4 text-green-500' />
                  <span>8+ Years Experience</span>
                </div>
                <div className='flex items-center gap-2 text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body'>
                  <CheckCircleIcon className='h-4 w-4 text-green-500' />
                  <span>Right to Work UK</span>
                </div>
                <div className='flex items-center gap-2 text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body'>
                  <CheckCircleIcon className='h-4 w-4 text-green-500' />
                  <span>Full Driving Licence</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark rounded-lg2 p-8 border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark'
          >
            <h3 className='text-2xl font-bold text-trueAutumn-textLight dark:text-trueAutumn-textDark mb-6 font-heading'>Send Me a Message</h3>
            
            <form className='space-y-6' onSubmit={handleSubmit} noValidate>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className='text-trueAutumn-textLight dark:text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='bg-trueAutumn-light dark:bg-trueAutumn-dark border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark placeholder-trueAutumn-textSecondaryLight/50 dark:placeholder-trueAutumn-textSecondaryDark/50 text-trueAutumn-textLight dark:text-trueAutumn-textDark text-sm rounded-md block w-full p-3 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:border-transparent font-body'
                    placeholder='Your full name'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='text-trueAutumn-textLight dark:text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='bg-trueAutumn-light dark:bg-trueAutumn-dark border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark placeholder-trueAutumn-textSecondaryLight/50 dark:placeholder-trueAutumn-textSecondaryDark/50 text-trueAutumn-textLight dark:text-trueAutumn-textDark text-sm rounded-md block w-full p-3 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:border-transparent font-body'
                    placeholder='your.email@company.com'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='company' className='text-trueAutumn-textLight dark:text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                  Company
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  className='bg-trueAutumn-light dark:bg-trueAutumn-dark border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark placeholder-trueAutumn-textSecondaryLight/50 dark:placeholder-trueAutumn-textSecondaryDark/50 text-trueAutumn-textLight dark:text-trueAutumn-textDark text-sm rounded-md block w-full p-3 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:border-transparent font-body'
                  placeholder='Your company name'
                />
              </div>

              <div>
                <label htmlFor='opportunityType' className='text-trueAutumn-textLight dark:text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                  Opportunity Type
                </label>
                <select
                  id='opportunityType'
                  name='opportunityType'
                  className='bg-trueAutumn-light dark:bg-trueAutumn-dark border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark text-trueAutumn-textLight dark:text-trueAutumn-textDark text-sm rounded-md block w-full p-3 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:border-transparent font-body'
                >
                  <option value="">Select opportunity type</option>
                  {opportunityTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor='subject' className='text-trueAutumn-textLight dark:text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                  Subject *
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  required
                  className='bg-trueAutumn-light dark:bg-trueAutumn-dark border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark placeholder-trueAutumn-textSecondaryLight/50 dark:placeholder-trueAutumn-textSecondaryDark/50 text-trueAutumn-textLight dark:text-trueAutumn-textDark text-sm rounded-md block w-full p-3 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:border-transparent font-body'
                  placeholder='Brief description of the opportunity'
                />
              </div>

              <div>
                <label htmlFor='message' className='text-trueAutumn-textLight dark:text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={5}
                  className='bg-trueAutumn-light dark:bg-trueAutumn-dark border border-trueAutumn-borderLight dark:border-trueAutumn-borderDark placeholder-trueAutumn-textSecondaryLight/50 dark:placeholder-trueAutumn-textSecondaryDark/50 text-trueAutumn-textLight dark:text-trueAutumn-textDark text-sm rounded-md block w-full p-3 focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:border-transparent resize-vertical font-body'
                  placeholder='Tell me about the position, requirements, or any questions you have about my background...'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-trueAutumn-buttonLight dark:bg-trueAutumn-buttonDark hover:bg-trueAutumn-buttonLightHover dark:hover:bg-trueAutumn-buttonDarkHover disabled:bg-trueAutumn-buttonLight/50 dark:disabled:bg-trueAutumn-buttonDark/50 disabled:cursor-not-allowed text-trueAutumn-light dark:text-trueAutumn-dark font-medium py-3 px-6 rounded-md w-full transition-colors focus:outline-none focus:ring-2 focus:ring-trueAutumn-accentLight dark:focus:ring-trueAutumn-accentDark focus:ring-offset-2 focus:ring-offset-trueAutumn-cardLight dark:focus:ring-offset-trueAutumn-cardDark font-body'
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {emailSubmitted && (
                <div className='flex items-center gap-2 text-green-500 text-sm p-3 bg-green-500/10 rounded-md font-body'>
                  <CheckCircleIcon className='h-5 w-5' />
                  <span>Message sent successfully! I&apos;ll respond within 24 hours.</span>
                </div>
              )}
              
              {error && (
                <div className='flex items-center gap-2 text-red-500 text-sm p-3 bg-red-500/10 rounded-md font-body'>
                  <ExclamationCircleIcon className='h-5 w-5' />
                  <span>{error}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactSection; 