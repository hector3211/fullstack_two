import { Link } from "react-router-dom"
export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-4xl">
            <h1>Error Page 🆘</h1>
            <h2>you are lost! 🗺</h2>
            <h3>Don't come back or else! 👺</h3>
            <p>❌💥❌</p>
            <Link className="underline text-red-500 pt-10" to="/">
                <p>Go Home!</p>
            </Link>
        </div>
    )
}
