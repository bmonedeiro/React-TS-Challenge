interface GroupButtonProps {
  options: Array<string>
  active: string
  onClickHandler: (value: any) => void
}

export function GroupButton({ options, active, onClickHandler }: GroupButtonProps) {
  return (
    <div className="inline-flex rounded-md border border-gray-200 divide-x" role="group">
      {options.map(option => {
        const isActive = option === active
        const buttonClassNames = [
          'py-2',
          'px-4',
          'text-sm',
          'capitalize',
          'first-of-type:rounded-l-lg',
          'last-of-type:rounded-r-lg',
          'hover:text-secondary',
          isActive ? 'text-primary bg-gray-100' : 'text-gray-700 bg-white',
        ].join(' ')
        return (
          <button key={option} type="button" className={buttonClassNames} onClick={() => onClickHandler(option)}>
            {option}
          </button>
        )
      })}
    </div>
  )
}

export default GroupButton
