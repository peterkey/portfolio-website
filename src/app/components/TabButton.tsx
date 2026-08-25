interface TabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
}

const TabButton = ({ selectTab, active, children }: TabButtonProps) => {
  return (
    <button
      className={`px-1 py-1 w-full sm:w-auto rounded-md font-medium transition-colors ${
        active
          ? "text-text border-b-2 border-[#22D3EE]"
          : "text-[#6E88B5] hover:text-text"
      }`}
      onClick={selectTab}
      role="tab"
      aria-selected={active}
      aria-label={`${children} tab`}
    >
      {children}
    </button>
  );
};

export default TabButton; 