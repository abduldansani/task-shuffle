import Lists from "./lists";
import Input from "./input";

export default function AddParticipants({ participants, handleAddParticipant, handleDeleteParticipant }) {
    return (
        <div className="w-full">
            <Input 
                component="participants"
                handleAdd={handleAddParticipant}
            />
            <Lists
                items={participants}
                name="participant"
                handleDelete={handleDeleteParticipant}
            />
        </div>
    );
}