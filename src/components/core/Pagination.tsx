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

interface PaginationProps {
  totalResults: number
  page: number
  onClickHandler: (value: number) => void
}

export const Pagination = ({ totalResults, page, onClickHandler }: PaginationProps) => {
  const itemsPerPage = 20

  const firstDisplayIndex = (page - 1) * itemsPerPage + 1
  const lastDisplayIndex = page * itemsPerPage
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 ">
          Showing <span className="font-semibold text-secondary">{firstDisplayIndex}</span> to <span className="font-semibold text-secondary">{lastDisplayIndex}</span> of <span className="font-semibold text-secondary">{totalResults}</span> Entries
      </span>
      <div className="flex mt-2 xs:mt-0   border border-gray-200 divide-x rounded-md">
        <button className={buttonClassNames} onClick={() => onClickHandler(page -1)}>
            <ArrowSmLeftIcon />
            Prev
        </button>
        <button className={buttonClassNames} onClick={() => onClickHandler(page +1)}>
            Next
            <ArrowSmRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
