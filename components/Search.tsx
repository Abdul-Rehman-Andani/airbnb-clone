import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <>
      <div className="flex items-center border rounded-[50px] py-2 px-6 shadow-md gap-6 hover:shadow-lg transition">
        <div className="border-r-[1px] pr-6">Anywhere</div>
        <div className="border-r-[1px] pr-6 ">Any week</div>
        <div className="flex items-center gap-3">
          <span>Add guests</span>
          <span className="bg-primary text-white p-1 rounded-[20px]">
            <IoMdSearch />
          </span>
        </div>
      </div>
    </>
  );
};

export default Search;
