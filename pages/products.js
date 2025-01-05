import {data} from '../components/data'
import Link from 'next/link'
import { dataProducts } from '../components/AirbnbScrapData';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Products(){
const [data,setData] = useState([])
  // option 1 call api
//   const dataHandler = async()=>{
//     const response = await fetch('http://localhost:3000/api/airbnb_data');
//     const data = await response.json();
//     return data;
// }

//   useEffect(async()=>{
//     const data = await dataHandler();
//     console.log(data);
//   },[])

//option 2 
// //npm install axios --force
//and npm run dev again
//import axios from 'axios'; put on top

useEffect(()=>{
  const fetchData = async()=>{
      const response = await axios.get('http://localhost:3000/api/airbnb_data');
      setData(response.data.hotels);
  }
  fetchData();
},[])

useEffect(()=>{
  let types = [];
  data.map((item)=>{
      if(!types.includes(item.type)){
        types.push(item.type);
      }
  }) 
  console.log(types);
},[data])


  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">

      {data && data.map((product) => (
        <Link href={`details?id=${product.id}`}>
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-64"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-500">{product.location}</p>
              <p className="text-gray-500">${product.pricePerNight}</p>
              <p className="text-indigo-600 font-semibold mt-2">{product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

