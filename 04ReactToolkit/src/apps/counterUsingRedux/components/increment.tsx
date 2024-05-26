import { useDispatch } from "react-redux";
import { increment } from "../store/slices/counterSlice";
const IncrementBtn = () => {
    const dispatch: any = useDispatch();
    return (
        <button onClick={() => dispatch(increment())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Increment
        </button>
    )
}
export default IncrementBtn
