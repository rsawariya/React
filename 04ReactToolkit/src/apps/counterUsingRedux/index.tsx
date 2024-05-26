import { Provider } from "react-redux"
import { store } from "./store/store";
import App from "./app";

const CounterUsingRedux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default CounterUsingRedux;