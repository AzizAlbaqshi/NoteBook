import { DetailWrapper } from "../../styles";
import DeleteButton from "../buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import noteStore from "../../stores/noteStore";

const NoteDetail = () => {
  const noteSlug = useParams().noteSlug;
  const note = noteStore.notes.find((note) => note.slug === noteSlug);

  if (!note) return <Redirect to="/notes" />;
  return (
    <DetailWrapper>
      <img src={note.image} alt={note.title} />
      <p>{note.title}</p>
      <p>{note.description}</p>
      <p>{note.subtitle}</p>

      <DeleteButton noteId={note.id} />
      <button>Back</button>
    </DetailWrapper>
  );
};

export default observer(NoteDetail);
