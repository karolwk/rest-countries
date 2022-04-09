import './SearchBar.css';

interface SearchBarProps {
  placeholder?: string;
  icon?: JSX.Element;
  onInput(T: string): any;
  disabled?: boolean;
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  icon,
  onInput,
  disabled = false,
  value,
}) => {
  return (
    <div className="search-bar">
      {icon}
      <input
        type="search"
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onInput(e.target.value)}
        value={value}
      ></input>
    </div>
  );
};

export default SearchBar;
