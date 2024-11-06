import { useState } from "react"


export default function Admin({addInputForm}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handlePosition = (e) => {
        setPosition(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (firstName.trim() && lastName.trim() && position.trim()) {
            const newInput = {
                id: Date.now(),
                name: firstName,
                lastname: lastName,
                position: position
            }
            addInputForm(newInput);

            // Reset input fields ให้เป็นช่องว่าง หลักจากกด submit แล้ว
            setFirstName("");
            setLastName("");
            setPosition("");
        } else {
            alert("Please fill in all input fields.") // ถ้าใส่ข้อมูลใน input fields ไม่ครบให้ pop-up แจ้งเตือนขึ้นมา
        }
        
    }

    return (
        <div>
            <h1 className="text-center mb-8 font-bold text-xl">Create User Here</h1>
            <form onSubmit={handleSubmit} className="text-center mb-14 flex justify-center gap-10">
                <input 
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstName}
                    className="placeholder:text-center"
                />
                <input 
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastName}
                    className="placeholder:text-center"
                />
                <input 
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={handlePosition}
                    className="placeholder:text-center"
                />

                <button type="submit" 
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white p-2 rounded-lg w-20 font-semibold">Save</button>
            </form>
        </div>
    )
}
