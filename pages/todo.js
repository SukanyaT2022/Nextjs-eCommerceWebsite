import {useState,useEffect} from "react";
// import uuid from 'uuid'

const todo = () => {
const [items,setItems] = useState([]);
const [input,setInput] = useState();

const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  }

const listHandler = ()=>{
    const uniqueId = generateUniqueId();
    // const uniqueId = uuid();
    
    const newItem = {
        id:uniqueId,
        val:input,
        star:false
    }
    setItems((oldValues)=> [...oldValues,newItem])
}

const updateFavoite = (id)=>{
    const filter = items.map((item)=> item.id == id? {...item, star:!item.star} : item);
    setItems(filter)
    console.log(filter)
}

useEffect(()=>{
    console.log(items)
},[items])

return (
    <div>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
                <h1 className="text-grey-darkest">Todo List</h1>
                <div className="flex mt-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={listHandler}>Add</button>
                </div>
            </div>
            <div>
                {items.length>0 && items.map((item,key)=>(
                    <div className="flex mb-4 items-center bg-gray-100" key={key}>
                        <p className="w-full text-grey-darkest">{item.val}</p>
                        <button>Remove</button>
                        {item.star?
                            <img src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000" className="w-20" onClick={() => updateFavoite(item.id)}/>:
                         <img src="https://img.icons8.com/?size=100&id=zjmyhXVAojeZ&format=png&color=000000" className="w-20" onClick={() => updateFavoite(item.id)}/>
                        }
                    </div>
                ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default todo