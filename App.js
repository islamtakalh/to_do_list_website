import { useRef, useState } from 'react';
import './App.css';

function App() {
  const[x, setx] = useState([])
  const inputRef = useRef()
  const add= () =>{
    const value = inputRef.current.value
    const newData ={completed:false,value}
    setx([...x, newData])
    inputRef.current.value=""

  }
  const itemDone =(index)=>{
    const newx=[...x]
    x[index].completed=!x[index].completed
    setx(newx)
  }
  const toDelet = (index)=>{
    const newx =[...x]
    newx.splice(index,1)
    setx(newx)
  }
  return (
    <div className="App">
     <div className='div3'>
     <img className='img2' src={'/caton (2).jfif'} alt='hello kity'/>
     <h2>To Do List</h2>
     </div>
      <ul>
        {
          x.map(({value,completed},index)=>{
            return <div className="diff10">
              <li className={completed ? "diffstyle":'' } onClick={()=>{itemDone(index)}}>{value}</li>
              <span className='exit'  onClick={()=>{toDelet(index)}}> x </span>
            </div> 
          })

        }
      </ul>
      <div className='div2'>
      <input ref={inputRef} placeholder='   Enter New Task My little girl'></input>
      <button onClick={add}>Add</button>
      </div>
      <img className='img1' src={'/caton (1).jfif'} alt='hello kity'/>
     
    </div>
  );
}

export default App;
