import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
const About = () => {
    const { params } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/");
    }, [])
        
    return (<div className="w-full h-screen bg-slate-600 text-center">
        <h1 className="text-9xl text-white">About </h1>
        <div className="text-3xl text-white">Params : {params}</div>
        </div>)
}

export default About;