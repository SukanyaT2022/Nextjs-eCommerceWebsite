import {useState,useEffect} from "react";
// import uuid from 'uuid'
import { FaRegStar } from "react-icons/fa";


const todo = () => {
const [items,setItems] = useState([]);
const [input,setInput] = useState();

const generateUniqueId=()=>{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const listHandler =()=>{
    console.log(input)
 }

return (
    <div>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans  mt-24">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-[90%]">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                      
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" 
                        value={input} 
                        onChange={(e)=>setInput(e.target.value)
                          
                        } />

                        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={listHandler}>Add</button>
                        
                    </div>
                </div>
                <div>
            </div>
        </div>
    </div>




<div className="">
    {/* <div class="grid grid-cols-3 gap-2"> */}
    <div class="grid grid-cols-3 gap-2">
        <div className="bg-pink-200">
        <FaRegStar />
        </div>
        <div className="bg-green-200">
         <p >Text todo </p>
        </div>
        <div className="bg-blue-200">
           <button>Remove</button>
        </div>
       
    </div>
    </div>















    </div>
  )
}

export default todo