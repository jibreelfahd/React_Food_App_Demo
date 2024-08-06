import ReactDOM from "react-dom";

import Card from "../Card/Card";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHide}/>;
};

const ModalOverlay = (props) => {
  return <Card className={styles.overlay}>{props.children}</Card>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHide={props.onHideCart}/>,
        document.getElementById("backdrop-overlay")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onHide={props.onHideCart}>{props.children}</ModalOverlay>,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default Modal;
