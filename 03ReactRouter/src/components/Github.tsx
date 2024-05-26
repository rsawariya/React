import { useLoaderData } from "react-router";
const Github = () => {
    const data = useLoaderData();
    return (
        <div className="flex justify-around align-middle bg-slate-500 rounded-l-[50%]">
            <img className="rounded-[50%]" src={data?.avatar_url} alt="Avatar Image" />
            <div className="my-20">
                <h1 className="text-white text-xl">{data?.name}</h1>
            </div>
        </div>
    )
}

export default Github;