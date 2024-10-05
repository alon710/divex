interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      {title}
    </h2>
  );
};

export default Header;
