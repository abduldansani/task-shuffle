import { IoTrashOutline } from "react-icons/io5";

export default function Lists({ items, name, handleDelete }) {
    if (items.length === 0) {
        return <p className="text-red-600 italic">No {name} added yet!</p>;
    }
    return (
        <div className="">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="py-0.5 text-lg flex items-center"
                >
                    <div className="py-2.5 px-5 bg-gray-500 dark:bg-slate-800 text-white font-semibold">
                        {i + 1}
                    </div>
                    <div className="bg-gray-200 dark:bg-slate-700 flex-1 capitalize flex justify-between items-center">
                        <p className="p-2">{item}</p>
                        <div className="h-full p-2 text-red-500 hover:text-white bg-gray-200 dark:bg-slate-700 cursor-pointer hover:bg-red-500">
                            <IoTrashOutline
                                className="h-full w-8"
                                onClick={() => {
                                    handleDelete(item)
                                    console.log(item)
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}
