import { useCallback, useEffect, useRef, useState } from "react"

export function PasswordGenerator(){

    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')
    const [copied , setCopied] = useState(false)

    const passwordRef = useRef(null)    // ref hook

    const generatePassword = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz'
   
    if(numberAllowed) str += '0123456789'

    if(charAllowed) str += '!@#$%^&*()_+=?'

    for(let i = 1; i<=length; i++){
        let char = Math.floor(Math.random() * str.length)
        pass += str.charAt(char)
    }
    setPassword(pass)

    },[length,numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipBoard = useCallback(()=>{
        passwordRef.current?.select()
        // passwordRef.current?.setSelectionRange(0,20)
        window.navigator.clipboard.writeText(password)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)

    },[password])


   useEffect(()=>{
    generatePassword()
   },[length,numberAllowed, charAllowed,generatePassword])

    return(
        <div className="relative bg-gray-700 w-full max-w-md mx-auto shadow-md rounded-lg p-4 m-2.5 text-orange-500">
            <h1 className="text-white text-center my-3 text-2xl">Password Generator</h1>
            <div className=" flex shadow rounded-lg overflow-hidden mb-4">
                <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-white" placeholder="Password" readOnly ref={passwordRef}/>
                {copied && (
                   <div className="absolute z-50 top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md opacity-100 transition-opacity duration-700 ease-in-out">
                   Copied to clipboard!
                   </div>
                )}
                 
            <button onClick={copyPasswordToClipBoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input type="range" min={6} max={30} value={length} id="rangeInput" className="cursor-pointer"
                    onChange={(e)=>{setLength(Number(e.target.value))}}/>
                    <label htmlFor="rangeInput">Length : {length}</label>
                </div>
            </div>
            <div className="flex items-center gap-x-1">
                <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
                    setNumberAllowed((prev) =>!prev)
                }} />
                <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{
                    setCharAllowed((prev) =>!prev)
                }} />
                <label htmlFor="charInput">Characters</label>
            </div>
        </div>
    )
}