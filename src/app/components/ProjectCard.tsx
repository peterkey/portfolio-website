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
    <article className="group">
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        role="img"
        aria-label={`Screenshot of ${title} project`}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-trueAutumn-dark dark:bg-trueAutumn-light bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link
            href={gitUrl}
            className='h-14 w-14 mr-2 border-2 relative rounded-full border-trueAutumn-textSecondaryLight dark:border-trueAutumn-textSecondaryDark hover:border-trueAutumn-textLight dark:hover:border-trueAutumn-textDark group/link transition-colors'
            target='_blank'
            rel="noopener noreferrer"
            aria-label={`View ${title} case study details`}
          >
            <DocumentTextIcon className='h-10 w-10 text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-trueAutumn-textLight dark:group-hover/link:text-trueAutumn-textDark transition-colors' />
          </Link>
          {previewUrl && previewUrl !== "#" && (
            <Link
              href={previewUrl}
              className='h-14 w-14 border-2 relative rounded-full border-trueAutumn-textSecondaryLight dark:border-trueAutumn-textSecondaryDark hover:border-trueAutumn-textLight dark:hover:border-trueAutumn-textDark group/link transition-colors'
              target='_blank'
              rel="noopener noreferrer"
              aria-label={`View ${title} project overview`}
            >
              <EyeIcon className='h-10 w-10 text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-trueAutumn-textLight dark:group-hover/link:text-trueAutumn-textDark transition-colors' />
            </Link>
          )}
        </div>
      </div>
      <div className='text-trueAutumn-textLight dark:text-trueAutumn-textDark rounded-b-xl bg-trueAutumn-cardLight dark:bg-trueAutumn-cardDark p-8'>
        <h3 className='text-xl font-semibold mb-4 font-heading'>{title}</h3>
        <p className='text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark font-body'>{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard; 