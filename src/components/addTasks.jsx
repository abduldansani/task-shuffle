import Lists from "./lists";
import Input from "./input";

export default function AddTasks({ tasks, handleAddTask, handleDeleteTask }) {
    return (
        <div className="w-full">
            <Input 
                component="tasks"
                handleAdd={handleAddTask}
            />
            <Lists
                items={tasks}
                name="task"
                handleDelete={handleDeleteTask}
            />
        </div>
    )
}
