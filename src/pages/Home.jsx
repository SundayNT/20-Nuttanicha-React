import Form from "../components/Form"

export default function Home() {
    

    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-14">Generation Thailand</h1>
            <div className="flex justify-evenly mb-10">
                <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-4 text-white font-semibold rounded-lg text-lg">User Home Sector</button>
                <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-4 text-white font-semibold rounded-lg text-lg">Admin Home Sector</button>
            </div>

            <Form />
        </div>
    )
}
