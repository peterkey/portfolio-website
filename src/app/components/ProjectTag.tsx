interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-full border font-mono font-semibold text-xs tracking-wide transition-all duration-200 font-body ${
        isSelected
          ? "text-[#060D18] border-[#00D9FF] bg-[#00D9FF]"
          : "text-trueAutumn-textSecondaryDark border-[#1A3A5C] hover:border-[#00D9FF]/50 hover:text-trueAutumn-textDark"
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
