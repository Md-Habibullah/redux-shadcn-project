import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: [ITask];
    filter: 'all' | 'high' | 'medium' | 'low'
}

const initialState: IInitialState = {
    tasks: [
        {
            id: 'asgfgghhj',
            title: 'Initialize frontend',
            description: 'Create home page and routing',
            deuDate: '2025-11',
            isCompleted: false,
            priority: 'High'
        }
    ],
    filter: 'all'
};

const tasksSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}
export default tasksSlice.reducer