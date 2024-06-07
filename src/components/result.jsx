export default function Result({ result }) {
    return (
        <div className="w-full">
            <div className="text-lg sm:text-2xl font-bold mb-2">
                Final Result:
            </div>
            <table className="w-full">
                <thead>
                    <tr className="">
                        <th className="text-start bg-gray-400 dark:bg-gray-800 w-1/3 p-2 border-r border-r-gray-400 dark:border-r-gray-200">Participants</th>
                        <th className="text-start w-2/3 p-2 bg-gray-300 dark:bg-gray-700">Assigned Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map((individual, index) => (
                            <tr
                                key={index}
                                className={`my-0.5 ${index % 2 === 0 ? "bg-gray-200 dark:bg-gray-600" : "bg-gray-100 dark:bg-gray-700"}`}
                            >
                                <td className="font-semibold capitalize p-2 border-r border-r-gray-400 dark:border-r-gray-200" >{individual.student}</td>
                                <td className="p-2">
                                    {individual.topics.map((topic, i) => (
                                        <div key={i}>{i + 1}. {topic}</div>
                                    ))}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
