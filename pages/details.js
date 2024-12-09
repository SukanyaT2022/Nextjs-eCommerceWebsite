import {products} from '../components/data.js'
import { useSearchParams } from 'next/navigation'
import {useEffect, useState} from 'react'

export default function details(){
const searchParams = useSearchParams()
const id = searchParams.get('id')
const [data,setData] = useState([]);
const [filter,setFilter] = useState([]);

useEffect(()=>{
    setData(products)
},[])

useEffect(() => {
    if (data.length > 0 && id) {
      const filterData = data.filter((item) => item.id == id);
      setFilter(filterData); // Set the filtered data
      console.log(filterData); // Log the filtered data
    }
  }, [data]);

  return (
    <div>
      <div>
        {filter && filter.map((item) => (
            <img src="https://toohotel.com/wp-content/uploads/2022/09/TOO_Hotel_Suite_Bathroom_Panoramique.jpg"/>
        ))}
      </div>
    </div>
  )
}