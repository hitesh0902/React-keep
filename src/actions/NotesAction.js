// URL
const url = "http://localhost:5000/notes";

// For loading spinner
const notesLoading = (dispatch) =>
  dispatch({ type: "NOTES_LOADING", loading: true });
const notesDoneLoading = (dispatch) =>
  dispatch({ type: "NOTES_LOADING", loading: false });

// Action with async await
export const FetchDataAction = () => {
  return async (dispatch) => {
    notesLoading(dispatch);
    setTimeout(async () => {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "FETCH_NOTES", notes: data });
      notesDoneLoading(dispatch);
    }, 1000);
  };
};

export const addNoteAction = (note) => {
  return async (dispatch) => {
    notesLoading(dispatch);
    setTimeout(async () => {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(note),
      });
      dispatch({ type: "ADD_NOTE", note });
      notesDoneLoading(dispatch);
    }, 500);
  };
};

export const updateNoteAction = (updatedNote) => {
  return async (dispatch) => {
    notesLoading(dispatch);
    setTimeout(async () => {
      await fetch(url + updatedNote.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNote),
      });
      dispatch({ type: "UPDATE_NOTE", updatedNote });
      notesDoneLoading(dispatch);
    }, 500);
  };
};

export const deleteNoteAction = (id) => {
  return async (dispatch) => {
    notesLoading(dispatch);
    setTimeout(async () => {
      await fetch(url + id, {
        method: "DELETE",
      });
      dispatch({ type: "DELETE_NOTE", id });
      notesDoneLoading(dispatch);
    }, 500);
  };
};
