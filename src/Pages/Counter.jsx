import { useState } from "react"

function Counter() {
    const add = () => {
        
        let newtext =  text + 1
        setText(newtext)
    }
    const minus = () => {
        let newtext =  text - 1
        setText(newtext)
    }
    const [text, setText] = useState(0);
    
  return (
    <div>
            <div className="container text-center text-4xl">
                <h1 >{text}</h1>
                <div >
                    <button onClick={add} className=" bg-yellow-400 p-2 rounded-3xl font-medium inline-block mr-4  border border-transparent">+</button>
                    <button onClick={minus} className=" bg-yellow-400 p-2 rounded-3xl font-medium inline-block mr-4  border border-transparent">-</button>
                </div>
            </div>
    </div>
  )
}

export default Counter
