export default function ShuffleTasks({ handleDistributeTasks, handleClearInputs, participants, tasks, handleSetShowResult }) {
    const disableAll = (!participants.length && !tasks.length);
    const disableOne = (!participants.length || !tasks.length);
    return (
        <div className="flex gap-10 items-center justify-between mt-10">
            <button
                className={`py-2 px-6 font-semibold bg-green-700 text-white rounded-sm ${disableOne ? "cursor-not-allowed opacity-25 dark:opacity-50" : " hover:bg-green-600"}`}
                onClick={() => {
                    handleDistributeTasks();
                    handleSetShowResult()
                }}
                disabled={disableOne}
            >
                Shuffle
            </button>
            <button
                className={`py-2 px-6 font-semibold text-white rounded-sm bg-red-700 ${disableAll ? "cursor-not-allowed opacity-25 dark:opacity-50" : "hover:bg-red-600"}`}
                onClick={handleClearInputs}
                disabled={disableAll}
            >
                Clear
            </button>
        </div>
    );
}
