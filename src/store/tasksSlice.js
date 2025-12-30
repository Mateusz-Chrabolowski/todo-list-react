import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        done: false,
      });
    },
    toggleTask(state, action) {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.done = !task.done;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    finishAll(state) {
      state.tasks.forEach(t => (t.done = true));
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  finishAll,
} = tasksSlice.actions;

export default tasksSlice.reducer;
