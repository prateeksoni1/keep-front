import Axios from "axios";

export const loginAction = user => {
  return {
    type: "LOGIN",
    payload: user
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT"
  };
};

export const notesAction = notes => {
  return {
    type: "NOTES",
    payload: notes
  };
};

export const addNoteAction = note => {
  return {
    type: "ADD_NOTE",
    payload: note
  };
};
