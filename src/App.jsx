import { Provider } from "react-redux";
import MyRouter from "./Router/Router";
import { store } from "./redux/store/store";

const App = () => {
	return (
		<Provider store={store}>
			<MyRouter />
		</Provider>
	);
}

export default App;