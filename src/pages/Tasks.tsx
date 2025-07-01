import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);

    const dispatch = useAppDispatch()

    console.log('tasks:', tasks)

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-end items-center gap-5">
                <div className="mr-auto">
                    <h1>Tasks</h1>
                </div>
                <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("all"))}
                            value="all"
                        >All</TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("high"))}
                            value="high"
                        >High</TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("medium"))}
                            value="medium"
                        >Medium</TabsTrigger>
                        <TabsTrigger
                            onClick={() => dispatch(updateFilter("low"))}
                            value="low"
                        >Low</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>
            <div className="space-y-5 mt-5">
                {
                    tasks.map((task, index) => <TaskCard key={index} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default Tasks;