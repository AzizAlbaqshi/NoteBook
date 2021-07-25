import axios from "axios";
import { makeAutoObservable } from "mobx";
import notebookStore from "./notebookStore";
//import instance from "./instance";

class NoteStore {
  // posters = posters;
  notes = [];
  //loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchNotes:", error);
    }
  };

  noteDelete = async (noteId) => {
    try {
      //   noteStore.loading = true;
      await axios.delete(`http://localhost:8000/notes/${noteId}`);
      const updatedNotes = this.notes.filter((note) => note.id !== noteId);
      this.notes = updatedNotes;
      notebookStore.fetchNotebooks();
    } catch (error) {
      console.error(error);
    }
  };

  noteCreate = async (newNote, notebook) => {
    try {
      const formData = new FormData();
      for (const key in newNote) formData.append(key, newNote[key]);

      const response = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        formData
      );
      this.notes.push(response.data);
      notebook.notes.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };

  noteUpdate = async (updateNote) => {
    try {
      const formData = new FormData();
      for (const key in updateNote) formData.append(key, updateNote[key]);
      const rezponse = await axios.put(
        `http://localhost:8000/notes/${updateNote.id}`,
        formData
      );
      const note = this.notes.find((note) => note.id === rezponse.data.id);
      for (const key in note) note[key] = rezponse.data[key];
    } catch (error) {
      console.error(error);
    }
  };
  getNoteById = (noteId) => this.notes.find((note) => note.id === noteId);
}

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
