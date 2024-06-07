import { useState } from "react";
import AddTasks from "./components/addTasks";
import AddParticipants from "./components/addParticipants";
import ShuffleTasks from "./components/shuffleTasks";
import { handleDistribute } from "./handleDistribute";
import Result from "./components/result";
import ResultOptions from "./components/resultOptions";

function App() {
    const [participants, setParticipants] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(false);


    function handleAddParticipant(name) {
        if (name === "") return;
        setParticipants([...participants, name]);
    }

    function handleAddTask(task) {
        if (task === "") return;
        setTasks([...tasks, task]);
    }

    function handleDeleteParticipant(item) {
        const newParticipants = participants.filter(participant => participant.toLowerCase() !== item.toLowerCase());
        setParticipants(newParticipants);
    }

    function handleDeleteTask(item) {
        const newTasks = tasks.filter(task => task.toLowerCase() !== item.toLowerCase());
        setTasks(newTasks);
    }

    function handleClearInputs() {
        setParticipants([]);
        setTasks([]);
        setResult([]);
    }

    function handleDistributeTasks() {
        setResult(handleDistribute(tasks, participants));
    }

    function handleSetShowResult() {
        setShowResult(!showResult);
    }

    return (
        <div className="max-w-[900px] mx-auto">
            <div className="container mx-auto px-2 flex flex-col min-h-screen items-center justify-center py-6 md:py-10 dark:text-white">
                <div className="uppercase text-4xl sm:text-6xl md:text-7xl font-bold mb-2 font-serif ">task shuffle</div>
                <p className="text-center sm:text-lg md:text-xl  mb-10 md:mb-16 font-sans">Fair and easy task sharing for team collaborators</p>
                <div className="h-full flex-1 w-full">
                    {showResult ? (
                        <div>
                            <Result
                                result={result}
                            />
                            <ResultOptions
                                handleSetShowResult={handleSetShowResult}
                                handleDistributeTasks={handleDistributeTasks}
                            />
                        </div>
                    ) : (
                        <div>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-4 md: mb-4">
                                <AddParticipants
                                    participants={participants}
                                    handleAddParticipant={handleAddParticipant}
                                    handleDeleteParticipant={handleDeleteParticipant}
                                />
                                <AddTasks
                                    tasks={tasks}
                                    handleAddTask={handleAddTask}
                                    handleDeleteTask={handleDeleteTask}
                                />
                            </div>
                            <ShuffleTasks
                                handleDistributeTasks={handleDistributeTasks}
                                handleClearInputs={handleClearInputs}
                                tasks={tasks}
                                participants={participants}
                                handleSetShowResult={handleSetShowResult}
                            />
                        </div>
                    )
                    }

                </div>
                <p className="text-center font-semibold mt-4">&copy; Abduldansani, 2024</p>
            </div>
        </div>
    );
}

export default App
