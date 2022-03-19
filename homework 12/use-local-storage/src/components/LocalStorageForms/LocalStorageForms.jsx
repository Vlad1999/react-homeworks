import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Modal from "../Modal/Modal";
import "./LocalStorageForms.css";

function LocalStorageForms() {
  const [state, setState] = useState({
    getInputValue: "",
    removeInputValue: "",
    keyInputValue: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { get, set, remove, clear, key } = useLocalStorage();

  const handleSet = (e) => {
    e.preventDefault();
    set(`user ${Math.random().toString().slice(2)}`, {
      name: e.target.name.value,
      age: e.target.age.value,
      position: e.target.position.value,
    });
    setModalMessage("The item successfully set in Local Storage");
    setShowModal(true);
    e.target.reset();
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === "getBtn" && state.getInputValue) {
      const info = JSON.parse(get(state.getInputValue));
      setModalMessage((
        <div className="info">
          <p>Full Name: {info.name}</p>
          <p>Age: {info.age}</p>
          <p>Position: {info.position}</p>
        </div>
      ))                       
    }
    if (e.target.id === "keyBtn" && state.keyInputValue) {
      setModalMessage(key(state.keyInputValue));
    }
    if (e.target.id === "removeBtn" && state.removeInputValue) {
      setModalMessage("The item successfully removed from Local Storage");
      remove(state.removeInputValue);
    }
    setShowModal(true);
  };

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <div className="column">
        <form onSubmit={handleSet}>
          <h3>Set Item</h3>
          <input id="name" name="name" type="text" placeholder="Full Name" required />
          <input id="age" name="age" type="text" placeholder="Age" required />
          <input id="position" name="position" type="text" placeholder="Position" required />
          <button type="submit">Set</button>
        </form>
        <div>
          <h3>Get Key</h3>
          <input id="keyInputValue" type="text" placeholder="Key Index" value={state.keyInputValue} onChange={handleChange} />
          <button id="keyBtn" onClick={handleClick}>Get</button>
        </div>
      </div>
      <div className="column">
        <div>
          <h3>Get Item</h3>
          <input id="getInputValue" type="text" placeholder="Key Name" value={state.getInputValue} onChange={handleChange} />
          <button id="getBtn" onClick={handleClick}>Get</button>
        </div>
        <div>
          <h3>Remove Item</h3>
          <input id="removeInputValue" type="text" placeholder="Key Name" value={state.removeInputValue} onChange={handleChange} />
          <button id="removeBtn" onClick={handleClick}>Remove</button>
        </div>
        <div>
          <button
            className="btn"
            onClick={(e) => {
              setModalMessage("Local Storage Clean");
              setShowModal(true);
              clear();
            }}
          >Clear Storage</button>
        </div>
      </div>
      <Modal show={showModal} message={modalMessage}>
        <button
          onClick={() => {
            setShowModal(false);
            setModalMessage("");
            setState({
              getInputValue: "",
              removeInputValue: "",
              keyInputValue: "",
            });
          }}
        >OK</button>
      </Modal>
    </div>
  );
}

export default LocalStorageForms;
