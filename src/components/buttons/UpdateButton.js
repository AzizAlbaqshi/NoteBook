import notebookStore from "../../stores/notebookStore";
import Button from "react-bootstrap/Button";

const UpdateButton = (props) => {
  const toggleStatus = () => {
    notebookStore.updateNotebook({
      ...props.notebook,
      status: !props.notebook.status,
    });
  };

  return (
    <div className="UpdateBtn">
      <Button
        variant={props.notebook.status ? "warning" : "success"}
        onClick={toggleStatus}
      >
        {props.notebook.status ? "Undo" : "Done"}
      </Button>
    </div>
  );
};

export default UpdateButton;
