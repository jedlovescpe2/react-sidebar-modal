import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { AppProvider } from "./context/GlobalContext";
import "./index.css";
const App = () => {
  return (
    <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
    </AppProvider>
  );
};
export default App;
