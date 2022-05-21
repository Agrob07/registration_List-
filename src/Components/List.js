import React from 'react'
import { useState, useEffect } from 'react'

const List = () => {
    const [value, setValue] = useState("")
    const [data, setData] =useState([])

    useEffect(()=>{
        fetch(" https://jsonplaceholder.typicode.com/users")
        .then(e=>e.json())
        .then(e=>setData(e))
    }
    )

    useEffect(()=>{
        console.log(value,data)
        for(let i  of data){
         if(value===i.name){
             console.log(true);
         }
        }
    },[value])


  return (
  <div className='wrap'> 
    <form className='registrathionForm'> 
        <input type="text" className='input_2'  onChange={(e)=>{setValue(e.target.value)}} />
        <input type="text" className='input_2' onChange={(e)=>{setValue(e.target.value)}} />
      <h2>{value}</h2>
    </form>
    </div>
  )
}

export default List