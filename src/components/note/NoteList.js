import { useState } from "react";
import { ListWrapper } from "../../styles";
import NoteItem from "./NoteItem";
import SearchBar from "../SearchBar";
import { observer } from "mobx-react";
import NoteModal from "../Modals/NoteModal";
//import authStore from "../../stores/authStore";

const NoteList = ({ notes, notebook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const noteList = notes
    .filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))
    .map((note) => <NoteItem note={note} key={note.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <NoteModal isOpen={isOpen} closeModal={closeModal} notebook={notebook} />

      <ListWrapper>{noteList}</ListWrapper>
    </div>
  );
};

export default observer(NoteList);
