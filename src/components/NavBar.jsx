import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <>
    <div className="mr-8 my-3 text-[18px] font-bold">
        <ul className="flex justify-end gap-7">
            <li className="hover:text-blue-500 active:text-blue-700">
                <Link to="/">Home </Link>
            </li>
            <li className="hover:text-blue-500 active:text-blue-700">
                <Link to="/owner">Owner</Link>
            </li>
        </ul>
    </div>
    <hr style={{border:'none', borderTop: "2px solid black", margin: "20px 0"}} />
    </>
  )
}
