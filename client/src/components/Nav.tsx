import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="flex justify-end items-center pr-10">
            <Link to="/" className="lg:text-lg font-semibold px-2">
                <p>Home</p>
            </Link>
            <Link to="/about" className="lg:text-lg font-semibold px-2">
                <p>Abou</p>
            </Link>
            <Link to="/developer" className="lg:text-lg font-semibold px-2">
                <p>Developer</p>
            </Link>
        </div>
    )
}
