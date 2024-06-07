export default function ResultOptions({ handleDistributeTasks, handleSetShowResult }) {
    return (
        <div className="flex gap-10 items-center justify-between mt-10">
            <button
                className={`py-2 px-6 font-semibold bg-green-700 text-white rounded-sm hover:bg-green-600`}
                onClick={handleDistributeTasks}
            >
                Shuffle
            </button>
            <button
                className={`py-2 px-6 font-semibold text-white rounded-sm bg-red-700 hover:bg-red-600`}
                onClick={handleSetShowResult}
            >
                Back
            </button>
        </div>
    );
}
