import SearchIcon from "@src/components/icons/SearchIcon";

interface SearchInputProps {
  value: string
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput = ({value, onChangeHandler}: SearchInputProps) => {
  return (
    <form className="flex justify-end my-4 mx-6 sm:mx-10">
      <div className="relative w-full md:max-w-96">
        <div className="text-primary absolute left-2 bottom-2 font-medium text-sm p-2">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="search"
          className="block outline-offset-0 pl-12 outline-secondary w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg"
          placeholder="Search"
          required
          value={value}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};

export default SearchInput;
