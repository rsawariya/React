import { useSelector } from "react-redux";

const Comp2 = () => {
    const { counter }: any = useSelector(state => state);
    return (
        <div className="w-40 h-40 bg-white rounded flex justify-center">
            <h1 className="text-5xl m-auto">C2:{counter}</h1>
        </div>)

}
export default Comp2;