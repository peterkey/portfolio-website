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
      icon: <EnvelopeIcon className="h-6 w-6 text-[#22D3EE]" />,
      title: "Email",
      value: "prkey94@gmail.com",
      link: "mailto:prkey94@gmail.com",
      description: "Primary contact method"
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-[#22D3EE]" />,
      title: "Phone",
      value: "(+44) 7711233307",
      link: "tel:+447711233307",
      description: "Available during business hours"
    },
    {
      icon: <MapPinIcon className="h-6 w-6 text-[#22D3EE]" />,
      title: "Location",
      value: "Pont-y-clun, UK",
      link: "#",
      description: "Available for hybrid or in-person roles across South Wales"
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-[#22D3EE]" />,
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
        <section id='contact' className='py-20 sm:py-28 px-4 bg-trueAutumn-cardDark relative overflow-hidden'>
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className='relative z-10 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="eyebrow mb-3">Let&apos;s talk</span>
          <h2 className='text-3xl sm:text-4xl font-bold text-trueAutumn-textDark mb-4 font-heading'>Get In Touch</h2>
          <p className='text-trueAutumn-textSecondaryDark text-lg max-w-content mx-auto font-body'>
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
              <h3 className='text-2xl font-bold text-trueAutumn-textDark mb-4 font-heading'>Contact Information</h3>
              <p className='text-trueAutumn-textSecondaryDark mb-6 font-body'>
                Multiple ways to reach me for job opportunities, networking, or professional discussions.
              </p>
            </div>

            <div className='space-y-4'>
              {contactInfo.map((info, index) => (
                <div key={index} className='glow-card glass border flex items-start gap-4 p-4 rounded-xl'>
                  <div className='flex-shrink-0 mt-1'>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className='text-trueAutumn-textDark font-semibold font-heading'>{info.title}</h4>
                    <a
                      href={info.link}
                      className='text-[#22D3EE] hover:text-[#A78BFA] transition-colors font-body'
                    >
                      {info.value}
                    </a>
                    <p className='text-trueAutumn-textSecondaryDark text-sm mt-1 font-body'>{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className='pt-6'>
              <h4 className='text-trueAutumn-textDark font-semibold mb-4 font-heading'>Professional Profiles</h4>
              <div className='flex gap-4'>
                <Link
                  href='https://github.com/peterkey'
                  aria-label="Visit my GitHub profile"
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#06090F] rounded"
                >
                  <Image src={GithubIcon} alt='GitHub Icon' className='w-12 h-12' />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/pkey/'
                  aria-label="Visit my LinkedIn profile"
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#06090F] rounded"
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
            <div className='glass border rounded-2xl p-6'>
              <h4 className='text-trueAutumn-textDark font-semibold mb-4 font-heading'>Professional Highlights</h4>
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div className='flex items-center gap-2 text-trueAutumn-textSecondaryDark font-body'>
                  <CheckCircleIcon className='h-4 w-4 text-green-500' />
                  <span>MS-900 (In Progress)</span>
                </div>
                <div className='flex items-center gap-2 text-trueAutumn-textSecondaryDark font-body'>
                  <CheckCircleIcon className='h-4 w-4 text-green-500' />
                  <span>8+ Years Experience</span>
                </div>
                <div className='flex items-center gap-2 text-trueAutumn-textSecondaryDark font-body'>
                  <CheckCircleIcon className='h-4 w-4 text-green-500' />
                  <span>Right to Work UK</span>
                </div>
                <div className='flex items-center gap-2 text-trueAutumn-textSecondaryDark font-body'>
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
            className='glass border rounded-2xl p-8'
          >
            <h3 className='text-2xl font-bold text-trueAutumn-textDark mb-6 font-heading'>Send Me a Message</h3>
            
            <form className='space-y-6' onSubmit={handleSubmit} noValidate>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className='text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='bg-[#06090F] border border-[#1A2744] placeholder-[#6E88B5]/50 text-trueAutumn-textDark text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#22D3EE] focus:border-[#22D3EE]/50 transition-all duration-200 font-body'
                    placeholder='Your full name'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='bg-[#06090F] border border-[#1A2744] placeholder-[#6E88B5]/50 text-trueAutumn-textDark text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#22D3EE] focus:border-[#22D3EE]/50 transition-all duration-200 font-body'
                    placeholder='your.email@company.com'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='company' className='text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                  Company
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  className='bg-[#06090F] border border-[#1A2744] placeholder-[#6E88B5]/50 text-trueAutumn-textDark text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#22D3EE] focus:border-[#22D3EE]/50 transition-all duration-200 font-body'
                  placeholder='Your company name'
                />
              </div>

              <div>
                <label htmlFor='opportunityType' className='text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                  Opportunity Type
                </label>
                <select
                  id='opportunityType'
                  name='opportunityType'
                  className='bg-[#06090F] border border-[#1A2744] text-trueAutumn-textDark text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#22D3EE] focus:border-[#22D3EE]/50 transition-all duration-200 font-body'
                >
                  <option value="">Select opportunity type</option>
                  {opportunityTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor='subject' className='text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                  Subject *
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  required
                  className='bg-[#06090F] border border-[#1A2744] placeholder-[#6E88B5]/50 text-trueAutumn-textDark text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#22D3EE] focus:border-[#22D3EE]/50 transition-all duration-200 font-body'
                  placeholder='Brief description of the opportunity'
                />
              </div>

              <div>
                <label htmlFor='message' className='text-trueAutumn-textDark block mb-2 text-sm font-medium font-body'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={5}
                  className='bg-[#06090F] border border-[#1A2744] placeholder-[#6E88B5]/50 text-trueAutumn-textDark text-sm rounded-xl block w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#22D3EE] focus:border-[#22D3EE]/50 transition-all duration-200 resize-vertical font-body'
                  placeholder='Tell me about the position, requirements, or any questions you have about my background...'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-[#22D3EE] hover:bg-[#38BDF8] disabled:bg-[#22D3EE]/40 disabled:cursor-not-allowed text-[#06090F] font-bold py-3 px-6 rounded-full w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#06090F] font-body'
                style={{ boxShadow: isSubmitting ? "none" : "0 0 24px rgba(34, 211, 238, 0.3)" }}
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