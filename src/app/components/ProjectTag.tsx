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
          ? "text-[#06090F] border-[#22D3EE] bg-[#22D3EE]"
          : "text-trueAutumn-textSecondaryDark border-[#1A2744] hover:border-[#22D3EE]/50 hover:text-trueAutumn-textDark"
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