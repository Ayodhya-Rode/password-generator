import { useState } from "react"

export function BgChanger(){

    const[color, setColor] = useState('olive')
    return(
        <div style={{backgroundColor:color}}>
            <div className="p-2 h-screen w-screen text-center">
                <button onClick={()=>setColor('red')} className="bg-red-500 p-3 rounded m-2">red</button>
                <button onClick={()=>setColor('pink')} className="bg-pink-400 p-3 rounded m-2">pink</button>
                <button onClick={()=>setColor('green')} className="bg-green-500 p-3 rounded m-2">Green</button>
                <button onClick={()=>setColor('violet')} className="bg-violet-400 p-3 rounded m-2">violet</button>
                <button onClick={()=>setColor('yellow')} className="bg-yellow-400 p-3 rounded  m-2">yellow</button>
            </div>
        </div>
    )
}