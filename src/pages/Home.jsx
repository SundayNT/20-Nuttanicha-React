import { useState } from "react";
import Form from "../components/Form"

export default function Home() {
    const [tableData, setTableData] = useState([]);
    const [showAdmin, setShowAdmin] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [headTitle, setHeadTitle] = useState("React - Assessment")

    
    // Function ใช้ในการเพิ่มค่า input เข้าใน array ตั้งให้ไปเชื่อมกับ prop ของ <Form />
    const addInput = (newInput) => {
        setTableData((prevInput) => [...prevInput, newInput]);
    };

    // Function ใช้ในการลบข้อมูลออกจาก tableData ที่เก็บค่าเป็น Array 
    const handleDelete = (id) => {
        setTableData(tableData.filter((arrInput) => arrInput.id !== id));
    };

    // Function ใช้ในการลบข้อมูลทั้งหมดออกจาก tableData ที่เก็บค่าใน Array
    const handleClearTableData = () => {
        setTableData([]);
    };

    // Function แสดงไปหน้า Admin
    function handleShowAdmin () {
        setShowAdmin(!showAdmin);
        setShowUser(false);
        setHeadTitle("Home - Admin Sector")
    }

    // Function แสดงไปหน้า User
    function handleShowUser () {
        setShowUser(!showUser);
        setShowAdmin(false);
        setHeadTitle("Home - User Sector")
    }


    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-14">Generation Thailand {headTitle}</h1>
            <div className="flex justify-evenly mb-10">
                <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-4 text-white font-semibold rounded-lg text-lg"
                onClick={handleShowUser}>User Home Sector</button>
                <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-4 text-white font-semibold rounded-lg text-lg"
                onClick={handleShowAdmin}>Admin Home Sector</button>
            </div>
            

            {/* Ternary operator กำหนดว่า ถ้า showAdmin เป็น true ให้แสดง เงื่อนไขอันแรก */}
            {/* Ternary operator กำหนดว่า ถ้า showUser เป็น true ให้แสดง เงื่อนไขอันแรก */}
            {/* Component Form ได้มีการกำหนดค่า prop ไว้เพื่อเอาไปใช้ใน file Form ที่เราสร้างไว้*/}
            {showAdmin ? <Form tableData={tableData} addInput={addInput} handleDelete={handleDelete} handleClearTableData={handleClearTableData} showTableOnly={false}/> : null}
            {showUser ? <Form tableData={tableData} addInput={addInput} handleDelete={handleDelete} handleClearTableData={handleClearTableData} showTableOnly={true}/> : null}
            
        </div>
    )
}
