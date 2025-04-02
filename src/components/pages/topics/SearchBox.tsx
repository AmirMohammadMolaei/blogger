const SearchBox = () => {
  return (
    <div className="w-[680px] max-md:w-full h-16 rounded-full bg-[#F9F9F9] flex justify-center items-center gap-x-4 px-6">
      <div className="w-6 h-6"></div> {/* icon */}
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search all topics"
        className="w-full outline-none bg-transparent border-none"
      />
    </div>
  );
};

export default SearchBox;
