import { Comp1, Comp2, Comp3 } from "./components";
import DecrementBtn from "./components/decrement";
import IncrementBtn from "./components/increment";

const App = () => {
    return (<>
        <div className="flex justify-evenly">
            <Comp1 />
            <Comp2 />
            <Comp3 />
        </div>
        <div className="flex justify-around mt-10">
            <IncrementBtn />
            <DecrementBtn />
        </div>
    </>)
}
export default App;