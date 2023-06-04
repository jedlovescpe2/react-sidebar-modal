import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/GlobalContext";

const Modal = () => {
  const { isModalOpen, closeModal }: { isModalOpen: boolean; closeModal: () => void } =
    useGlobalContext();
  return (
      <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay" }>
        <div className="modal-container" >
          <h3>modal content</h3>
          <p>Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies.</p>
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
  );
};
export default Modal;
