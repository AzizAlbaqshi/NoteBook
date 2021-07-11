import { observer } from "mobx-react";
import notebookStore from "../stores/notebookStore";
import Note from "./Note";
import ListGroup from "react-bootstrap/ListGroup";
import NotebookModal from "./Modal/NotebookModal";

const pNum = (notebook) => {
  if (notebook.priority === "low") {
    return 1;
  } else if (notebook.priority === "medium") {
    return 2;
  } else if (notebook.priority === "high") {
    return 3;
  } else {
    console.error("unknown priority", notebook.priority);
    return 4;
  }
};

const prioritySort = (a, b) => {
  if (pNum(a) < pNum(b)) {
    return -1;
  }
  if (pNum(a) > pNum(b)) {
    return 1;
  }
  return 0;
};

const NotebookList = () => {
  const notebookList = notebookStore.notebooks
    .filter((notebook) => notebook.status === false)
    .sort(prioritySort)
    .map((notebook) => <Note notebook={notebook} key={notebook.id} />);

  const doneNotebookList = notebookStore.notebooks
    .filter((notebook) => notebook.status === true)
    .map((notebook) => <Note notebook={notebook} key={notebook.id} />);

  return (
    <div>
      <NotebookModal />

      <div className="list">
        <ListGroup as="ul" className="NotebookList">
          {notebookList}
        </ListGroup>

        <ListGroup as="ul" className="DoneNotebookList">
          {doneNotebookList}
        </ListGroup>
      </div>
    </div>
  );
};

export default observer(NotebookList);
