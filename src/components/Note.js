import DeleteButton from "./buttons/DeleteButton";
import PriorityButton from "./buttons/PriorityButton";
import UpdateButton from "./buttons/UpdateButton";
import { observer } from "mobx-react";
import ListGroup from "react-bootstrap/ListGroup";
import "../App.css";

const Note = (props) => {
  const notebook = props.notebook;

  return (
    <ListGroup.Item as="li" className="Note">
      <h4>{notebook.name + " " + notebook.priority}</h4>
      <UpdateButton notebook={notebook} />
      <DeleteButton notebook={notebook} />
      {notebook.status ? null : <PriorityButton notebook={notebook} />}
    </ListGroup.Item>
  );
};

export default observer(Note);
