import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/counterSlice";
const DecrementBtn = () => {
    const dispatch: any = useDispatch();
    return (
        <button onClick={() => dispatch(decrement())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Decrement
        </button>
    )
}
export default DecrementBtn
