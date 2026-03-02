import React from "react";
import { DocumentTextIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: ProjectCardProps) => {
  return (
    <article className="group glow-card border border-[#1A3A5C] rounded-2xl overflow-hidden">
      <div
        className='h-52 md:h-72 rounded-t-2xl relative'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        role="img"
        aria-label={`Screenshot of ${title} project`}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#060D18]/80 backdrop-blur-sm hidden group-hover:flex transition-all duration-300 gap-4'>
          <Link
            href={gitUrl}
            className='h-12 w-12 border border-[#00D9FF]/50 hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 relative rounded-full group/link transition-all duration-200'
            target='_blank'
            rel="noopener noreferrer"
            aria-label={`View ${title} case study details`}
          >
            <DocumentTextIcon className='h-6 w-6 text-trueAutumn-textSecondaryDark absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#00D9FF] transition-colors' />
          </Link>
          {previewUrl && previewUrl !== "#" && (
            <Link
              href={previewUrl}
              className='h-12 w-12 border border-[#00D9FF]/50 hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 relative rounded-full group/link transition-all duration-200'
              target='_blank'
              rel="noopener noreferrer"
              aria-label={`View ${title} project overview`}
            >
              <EyeIcon className='h-6 w-6 text-trueAutumn-textSecondaryDark absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#00D9FF] transition-colors' />
            </Link>
          )}
        </div>
      </div>
      <div className='text-trueAutumn-textDark rounded-b-2xl glass border border-t-0 p-6'>
        <h3 className='text-lg font-semibold mb-2 font-heading'>{title}</h3>
        <p className='text-trueAutumn-textSecondaryDark font-body text-sm'>{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
