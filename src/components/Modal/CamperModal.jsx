import Modal from "react-modal";

const customStyles = {
  overlay: {
    // це для оверлею
    backgroundColor: "rgba(17, 18, 19, 0.40)",
  },
  content: {
    width: "982px",
    height: "720px",
    padding: "40px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};

Modal.setAppElement("#root");

// eslint-disable-next-line react/prop-types
export const CamperModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      closeTimeoutMS={300}
    >
      {children}
    </Modal>
  );
};
