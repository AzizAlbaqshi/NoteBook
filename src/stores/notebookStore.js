import { makeAutoObservable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];

  constructor() {
    makeAutoObservable(this);
  }

  //Fetch
  fetchNotebooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = response.data;
    } catch (error) {
      console.error("fetchNotebooks:", error);
    }
  };

  // Create Notebook
  notebookCreate = async (newNotebook) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/notebooks",
        newNotebook
      );
      this.notebooks.push(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Delete
  notebookDelete = async (notebookId) => {
    try {
      await axios.delete(`http://localhost:8000/notebooks/${notebookId}`);
      this.notebooks = this.notebooks.filter(
        (notebook) => notebook.id !== notebookId
      );
    } catch (error) {
      console.error(error);
    }
  };
}

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();
export default notebookStore;
