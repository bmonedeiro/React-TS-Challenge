import { DataObject } from '@src/types/movie'
import getImageURL from "@src/utils/getImageURL"

interface TableProps {
  data: Array<DataObject>
}

const Table = ({ data }: TableProps) => {

  const overview =  data?.filter((prop) => prop.name === 'Overview')[0]?.value || ''
  const title =  data?.filter((prop) => prop.name === 'Title')[0]?.value || ''

  const getContent = (item: DataObject): JSX.Element | String => {
    if(item.type === 'link') return (<a href={item.value} target="_blank" className="text-primary underline">{item.value}</a>)
    if (item.type === 'img') return <img src={getImageURL(item.value)} alt={item.name} />
    return item.value
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-secondary">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{overview}</p>
      </div>
      <div className="border-t border-gray-200 grid grid-cols-1 divide-y">
        {data.map((item) => (
          <div
            key={item.name}
            className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <h5 className="text-sm font-medium text-gray-500">{item.name}</h5>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {getContent(item)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Table
