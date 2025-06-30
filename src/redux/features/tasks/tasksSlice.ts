import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface IInitialState {
    tasks: ITask[];
    filter: 'all' | 'high' | 'medium' | 'low'
};

const initialState: IInitialState = {
    tasks: [
        {
            id: 'string',
            title: 'string',
            description: 'string',
            deuDate: 'string',
            isCompleted: false,
            priority: 'High'
        }
    ],
    filter: 'all'
};

type draftTask = Pick<ITask, "title" | "description" | "deuDate" | "priority">

const createTask = (taskData: draftTask): ITask => {
    return { ...taskData, isCompleted: false, id: nanoid() }
}

const tasksSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTasks: (state, action: PayloadAction<ITask>) => {
            // const id = uuidv4();
            // const tasks = {
            //     ...action.payload,
            //     id,
            //     isCompleted: false
            // }
            const tasks = createTask(action.payload)
            state.tasks.push(tasks)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action)
            state.tasks.forEach(task =>
                task.id === action.payload
                    ? task.isCompleted = !task.isCompleted
                    : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export const { addTasks, toggleCompleteState, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;