import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import notebookStore from "../../stores/notebookStore";
import { observer } from "mobx-react";
import "../../App.css";

const NotebookModal = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const [notebook, setNotebook] = useState({
    name: "",
    description: "",
    status: false,
    priority: "low",
  });

  const handleChange = (e) => {
    setNotebook({ ...notebook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notebookStore.addNotebook(notebook);
    toggleShow();
  };

  return (
    <div className="Modal">
      <Button
        variant="outline-dark"
        onClick={toggleShow}
        style={{ fontWeight: "bold" }}
      >
        Add New notebook
      </Button>

      <Modal show={show} onHide={toggleShow}>
        <Modal.Header>
          <Modal.Title>Add a new notebook</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              placeholder="Name of your notebook"
              onChange={handleChange}
              name="name"
            />
            <input
              placeholder="Priority of your notebook"
              onChange={handleChange}
              name="priority"
              defaultValue="low"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={toggleShow}>
              Close
            </Button>

            <Button type="submit" variant="primary">
              Add notebook
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default observer(NotebookModal);
