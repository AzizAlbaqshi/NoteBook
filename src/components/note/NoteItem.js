import { PostersWrapper, PosterImage, Text } from "../../styles";
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const NoteItem = (props) => {
  return (
    <PostersWrapper>
      <Link to={`/notes/${props.note.slug}`}>
        <PosterImage src={props.note.image} />
      </Link>
      <Text>{props.note.title}</Text>
      <Text>{props.note.subtitle}</Text>
      <>
        <UpdateButton note={props.note} />
        <DeleteButton noteId={props.note.id} />
      </>
      )
    </PostersWrapper>
  );
};

export default observer(NoteItem);
