import ReactDOM from "react-dom";

import Card from "../Card/Card";
import styles from "./Modal.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
  return <Card className={styles.overlay}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-overlay")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default Modal;
