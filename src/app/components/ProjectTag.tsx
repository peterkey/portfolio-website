interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-full border-2 font-semibold text-sm transition-colors font-body ${
        isSelected
          ? "text-trueAutumn-light dark:text-trueAutumn-dark border-trueAutumn-accentLight dark:border-trueAutumn-accentDark bg-trueAutumn-accentLight dark:bg-trueAutumn-accentDark"
          : "text-trueAutumn-textSecondaryLight dark:text-trueAutumn-textSecondaryDark border-trueAutumn-textSecondaryLight dark:border-trueAutumn-textSecondaryDark hover:border-trueAutumn-textLight dark:hover:border-trueAutumn-textDark hover:text-trueAutumn-textLight dark:hover:text-trueAutumn-textDark"
      }`}
      onClick={() => onClick(name)}
      aria-pressed={isSelected}
      aria-label={`Filter projects by ${name}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag; 