import { makeAutoObservable } from "mobx";
import axios from "axios";

class NotebookStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  notebookFetch = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = response.data;
    } catch (error) {
      console.error("notebookFetch:", error);
    }
  };

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

  notebookUpdate = async (notebookUpdate) => {
    try {
      await axios.put(
        `http://localhost:8000/notebooks/${notebookUpdate.id}`,
        notebookUpdate
      );
      const notebook = this.notebooks.find(
        (notebook) => notebook.id === notebookUpdate.id
      );
      notebook.status = notebookUpdate.status;
      notebook.priority = notebookUpdate.priority;
    } catch (error) {
      console.error(error);
    }
  };

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
notebookStore.notebookFetch();
export default notebookStore;
