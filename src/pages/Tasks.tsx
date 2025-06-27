import { selectTasks } from "@/redux/features/tasks/tasksSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);

    console.log('tasks:', tasks)

    return (
        <div>
            tasks
        </div>
    );
};

export default Tasks;