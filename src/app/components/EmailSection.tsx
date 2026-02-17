"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
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
        setError(result.error || "Failed to send email. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='grid md:grid-cols-2 py-16 sm:py-24 gap-8 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#22D3EE] to-transparent rounded-full h-3/4 w-full z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 opacity-50'></div>
      <div className='z-10'>
        <h2 className='text-xl font-bold text-white my-2'>Let&apos;s Connect!</h2>
        <p className='text-[#6E88B5] mb-4 max-w-md'>
          I&apos;m actively seeking IT support opportunities where I can apply my technical skills and customer service expertise. 
          Whether you have a position available or just want to discuss IT support solutions, I&apos;d love to hear from you!
        </p>
        <div className='socials flex flex-row gap-2' role="group" aria-label="Social media links">
          <Link 
            href='https://github.com/peterkey'
            aria-label="Visit my GitHub profile"
            className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#06090F] rounded"
          >
            <Image src={GithubIcon} alt='GitHub Icon' className='w-14 h-14' />
          </Link>
          <Link 
            href='https://www.linkedin.com/in/pkey/'
            aria-label="Visit my LinkedIn profile"
            className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#06090F] rounded"
          >
            <Image src={LinkedinIcon} alt='LinkedIn Icon' className='w-14 h-14' />
          </Link>
        </div>
      </div>
      <div className='z-10'>
        <form className='flex flex-col' onSubmit={handleSubmit} noValidate>
          <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
              Your Email *
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='bg-[#0B1120] border border-[#1A2744] placeholder-[#6E88B588] text-gray-100 text-sm rounded-md block w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent'
              placeholder='your.email@company.com'
              aria-describedby="email-error"
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
              Subject *
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              className='bg-[#0B1120] border border-[#1A2744] placeholder-[#6E88B588] text-gray-100 text-sm rounded-md block w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent'
              placeholder='IT Support Opportunity or Project Discussion'
              aria-describedby="subject-error"
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
              Message *
            </label>
            <textarea
              id='message'
              name='message'
              required
              rows={5}
              className='bg-[#0B1120] border border-[#1A2744] placeholder-[#6E88B588] text-gray-100 text-sm rounded-md block w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent resize-vertical'
              placeholder='Tell me about your IT support needs or the opportunity you have in mind!'
              aria-describedby="message-error"
            />
          </div>
          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-[#22D3EE] hover:bg-[#38BDF8] disabled:bg-[#22D3EE]/50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-md w-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#06090F]'
            aria-describedby="submit-status"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          
          {emailSubmitted && (
            <p id="submit-status" className='text-green-500 text-sm mt-2' role="status">
              Message sent successfully! I&apos;ll get back to you shortly.
            </p>
          )}
          
          {error && (
            <p id="submit-status" className='text-red-500 text-sm mt-2' role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection; 