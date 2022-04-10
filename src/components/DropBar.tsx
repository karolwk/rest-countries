import './DropBar.css';

interface DropBarProps {
  options: {
    value: string;
    name: string;
  }[];
  placeholder?: string;
  onChange(T: string): any;
}
const DropBar: React.FC<DropBarProps> = ({
  options,
  placeholder,
  onChange,
}) => {
  return (
    <div className="select-wrapper">
      <select
        aria-label="filter-by-region"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option hidden>{placeholder}</option>

        {options.map((ele) => {
          return (
            <option key={ele.name + '-sel'} value={ele.value}>
              {ele.name}
            </option>
          );
        })}
      </select>
      <div className="after-select"></div>
    </div>
  );
};

export default DropBar;
