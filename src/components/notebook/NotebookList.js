import { useState } from "react";
import notebookStore from "../../stores/notebookStore";
import NotebookItem from "./NotebookItem";
import SearchBar from "../SearchBar";
import { observer } from "mobx-react";
//import NotebookModal from "../Modals/NotebookModal";

const NotebookList = () => {
  const [query, setQuery] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);

  const notebooks = notebookStore.notebooks
    .filter((notebook) =>
      notebook.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((notebook) => <NotebookItem notebook={notebook} />);
  return (
    <div>
      <h1> Notes :</h1>
      <SearchBar setQuery={setQuery} />

      {notebooks}
    </div>
  );
};

export default observer(NotebookList);
