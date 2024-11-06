import Admin from "./Admin"

export default function Form({tableData, addInput, handleDelete, handleClearTableData, showTableOnly}) {
    return (
    <div>
        <div>
            {!showTableOnly && (<div><Admin addInputForm={addInput}/></div>)}
        </div>

        <table className="w-[80%] mx-auto mb-8">
            <thead>
                    <tr className="bg-gray-400">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        {!showTableOnly && (<th>Action</th>)}
                    </tr>
            </thead>
            <tbody>
                {tableData.map((input) => (
                    <tr key={input.id} className="bg-white">
                        <td>{input.name}</td>
                        <td>{input.lastname}</td>
                        <td>{input.position}</td>
                        {!showTableOnly && 
                        (<button className="p-4"><td className="bg-red-500 hover:bg-red-600 active:bg-red-800 text-white font-semibold p-2 rounded-lg" 
                        onClick={() => handleDelete(input.id)}>Delete</td></button>)}
                    </tr>
                ))}
            </tbody>
        </table>

        <div className="flex justify-center">
            {!showTableOnly && (<button className="bg-red-500 hover:bg-red-600 active:bg-red-800 text-white font-semibold p-2 rounded-lg w-40" onClick={handleClearTableData}>Delete All</button>)}             
        </div>
    </div>
    )
}
