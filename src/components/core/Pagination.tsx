import ArrowSmRightIcon from "@src/components/icons/ArrowSmRightIcon";
import ArrowSmLeftIcon from "@src/components/icons/ArrowSmLeftIcon";

const buttonClassNames = [
  'py-2',
  'px-4',
  'flex',
  'text-sm',
  'capitalize',
  'hover:text-secondary',
  'text-primary',
].join(' ')

export const Pagination = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 ">
          Showing <span className="font-semibold text-secondary">1</span> to <span className="font-semibold text-secondary">10</span> of <span className="font-semibold text-secondary">100</span> Entries
      </span>
      <div className="flex mt-2 xs:mt-0   border border-gray-200 divide-x rounded-md">
        <button className={buttonClassNames}>
            <ArrowSmLeftIcon />
            Prev
        </button>
        <button className={buttonClassNames}>
            Next
            <ArrowSmRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
