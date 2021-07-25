import { useParams } from "react-router";
import notebookStore from "../../stores/notebookStore";
import noteStore from "../../stores/noteStore";
import { DetailWrapper } from "../../styles";
import NoteList from "../note/NoteList";

//import NoteList from "../note/NoteList";
//import noteStore from "../../stores/noteStore";

const NotebookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.slug === notebookSlug
  );
  const notes = notebook.notes.map((note) => noteStore.getNoteById(note.id));
  return (
    <>
      <DetailWrapper>
        <h4>{notebook.title}</h4>

        <img src={notebook.image} alt={notebook.title} />
      </DetailWrapper>

      <NoteList notes={notes} notebook={notebook} />
    </>
  );
};

export default NotebookDetail;
