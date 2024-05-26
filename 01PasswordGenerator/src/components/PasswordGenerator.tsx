import { useEffect, useState, useRef } from "react";
import { usePasswordGenerator } from "../hooks";

const PasswordGenerator = () => {
    const [length, setLength] = useState(0);
    const [isNumberAllowed, setIsNumberAllowed] = useState(false);
    const [isSymbolAllowed, setIsSymbolAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const passwordRef = useRef<HTMLInputElement>(null);

    const passwordGenerator = usePasswordGenerator({isNumberAllowed, isSymbolAllowed, length});
    const handleCopy = () => {
        passwordRef?.current?.select();
        window.navigator.clipboard.writeText(password);
    }

    useEffect(() => {
        setPassword(passwordGenerator());
    }, [length, isNumberAllowed, isSymbolAllowed])

    return (
        <div className="h-screen w-full bg-black flex justify-center align-top">
            <div className="w-full h-40 rounded bg-slate-600 mx-20 mt-10 flex flex-col justify-center align-top">
                <h1 className="text-white mt-2 text-center mb-2">Password Generator</h1>
                <div className=" flex h-10 w-auto mx-10 bg-white rounded">
                    <input className="h-full w-10/12 rounded" type="text" placeholder="Password" value={password} ref={passwordRef} readOnly />
                    <button className="bg-blue-500 h-full text-white w-auto px-10 rounded-r" onClick={handleCopy} >Copy</button>
                </div>
                <div className="flex justify-center gap-5 mt-5">
                    <div className="flex align-middle">
                        <input id="length" className="mr-2" type="range" min={5} max={20} onChange={(e) => setLength(Number(e.target.value))} value={length} />
                        <label htmlFor="length" className="text-white">Length:{length}</label>
                    </div>
                    <div>
                        <input id="isNumberAllowed" className="" type="checkbox" onClick={() => setIsNumberAllowed(prev => !prev)} />
                        <label htmlFor="isNumberAllowed" className="text-white">Number</label>
                    </div>
                    <div>
                        <input id="isSymbolAllowed" className="" type="checkbox" onClick={() => setIsSymbolAllowed(prev => !prev)} />
                        <label htmlFor="isSymbolAllowed" className="text-white">Symbol</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator;