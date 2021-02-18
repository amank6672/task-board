import "./SearchBar.css";
const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="search-bar">
      <i className="fa fa-search icon"></i>
      <input
        className="input-field"
        type="text"
        placeholder="Filter Issues"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
