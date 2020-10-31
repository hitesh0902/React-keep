const initalState = {
  notes: [],
  isLoading: false,
};
const notesReducer = (state = initalState, action) => {
  if (action.type === "NOTES_LOADING") {
    return { ...state, isLoading: action.loading };
  }
  if (action.type === "FETCH_NOTES") {
    return { ...state, notes: action.notes };
  }
  if (action.type === "ADD_NOTE") {
    console.log(action);
    if (action.note) {
      return { ...state, notes: [...state.notes, action.note] };
    }
    return state;
  }
  if (action.type === "UPDATE_NOTE") {
    const notes = [...state.notes];
    const index = state.notes.findIndex(
      (note) => note.id === action.updatedNote.id
    );
    // Updating the selected note with new values
    notes[index] = {
      ...notes[index],
      title: action.updatedNote.title,
      body: action.updatedNote.body,
    };
    console.log(action);
    return { ...state, notes };
  }
  if (action.type === "DELETE_NOTE") {
    const notes = state.notes.filter((note) => note.id !== action.id);
    console.log(notes, action);
    return { ...state, notes };
  }
  return state;
};

export default notesReducer;
