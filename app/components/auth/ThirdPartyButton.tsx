"use client";

interface ThirdPartyButtonProps {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}

const ThirdPartyButton: React.FC<ThirdPartyButtonProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default ThirdPartyButton;
