import { useGlobalContext } from "../context/GlobalContext";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const {
    openSidebar,
    openModal,
  }: { openSidebar: () => void; openModal: () => void } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn open-modal">
        show modal
      </button>
    </main>
  );
};
export default Home;
