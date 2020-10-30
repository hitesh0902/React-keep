export const addNoteAction = (note) => {
  return {
    type: "ADD_NOTE",
    note,
  };
};

export const updateNoteAction = (updatedNote) => {
  return {
    type: "UPDATE_NOTE",
    updatedNote,
  };
};

export const deleteNoteAction = (id) => {
  return {
    type: "DELETE_NOTE",
    id,
  };
};
