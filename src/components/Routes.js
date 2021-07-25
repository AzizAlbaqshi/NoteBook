import NoteList from "../components/note/NoteList";
import { Switch, Route } from "react-router";
import NotebookList from "../components/notebook/NotebookList";
import noteStore from "../stores/noteStore";
import NotebookDetail from "../components/notebook/NotebookDetail";
import NoteDetail from "../components/note/NoteDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/notes/:noteSlug">
        <NoteDetail />
      </Route>
      <Route path="/notes">
        <NoteList notes={noteStore.notes} />
      </Route>
      <Route path="/notesbooks/:storeSlug">
        <NotebookDetail />
      </Route>
      <Route exact path="/notebooks/">
        <NotebookList />
      </Route>
      <Route exact path="/">
        <NotebookList />
      </Route>
    </Switch>
  );
};

export default Routes;
