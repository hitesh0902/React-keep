const initalState = {
  notes: [
    {
      id: 4,
      title: "Edit the existing note.",
      body: "React Keep allows you to it edit the note whenever you want.",
      bgColor: "lightgoldenrodyellow",
    },
    {
      id: 3,
      title: "Done with a note?",
      body: "Select the note then delete it by clicking on the trash icon.",
      bgColor: "peachpuff",
    },

    {
      id: 2,
      title: "Everything in one place",
      body: "Any way you access Keep, all your notes stay in sync.",
      bgColor: "aliceblue",
    },
    {
      id: 1,
      title: "Welcome to React Keep",
      body: "React Keep lets you quickly capture what is on your mind.",
      bgColor: "lavenderblush",
    },
  ],
};
const notesReducer = (state = initalState, action) => {
  if (action.type === "FETCH_NOTE") {
    console.log(action);
    return state;
  }
  if (action.type === "ADD_NOTE") {
    console.log(action.type);
    return { ...state, notes: [...state.notes, action.note] };
  }
  if (action.type === "UPDATE_NOTE") {
    // const newState = [...state];
    // const index = state.findIndex((note) => note.id === action.updatedNote.id);
    // newState[index] = {
    //   ...newState[index],
    //   title: action.updatedNote.title,
    //   body: action.updatedNote.body,
    // };
    // return newState;
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
    console.log(notes);
    return { ...state, notes };
  }
  return state;
};

export default notesReducer;
