import { useState } from "react";
import notebookStore from "../../stores/notebookStore";
import "../../App.css";

const PriorityButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const changePriority = (value) => {
    notebookStore.updateNotebook({ ...props.task, priority: value });
  };

  return (
    <div className="PiorityButton">
      <div className="dropdown" onClick={toggleOpen}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Priority
        </button>
        <div
          className={`dropdown-menu${isOpen ? " show" : ""}`}
          aria-labelledby="dropdownMenuButton"
        >
          <button
            className="dropdown-item"
            onClick={() => changePriority("low")}
          >
            Low
          </button>
          <button
            className="dropdown-item"
            onClick={() => changePriority("medium")}
          >
            Medium
          </button>
          <button
            className="dropdown-item"
            onClick={() => changePriority("high")}
          >
            High
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriorityButton;
