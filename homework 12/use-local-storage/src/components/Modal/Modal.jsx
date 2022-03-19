import "./Modal.css";

function Modal(props) {
  return (props.message ? <div className={`modal ${props.show ? "active" : ""}`}>
        <div className="content activeContent">
          {props.message}
          {props.children}
        </div>
      </div> : "");
}

export default Modal;
