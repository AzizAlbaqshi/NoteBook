import notebookStore from "../../stores/notebookStore";
import Button from "react-bootstrap/Button";

const DeleteButton = (props) => {
  const handleDelete = () => {
    notebookStore.deleteNotebook(props.task.id);
  };

  return (
    <div className="DeleteButton">
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
