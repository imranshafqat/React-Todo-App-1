import { Link } from "react-router-dom"

export default function Error403PageComponent() {
    return (
        <>
            <h1>Error 403 - You are Not authenticated</h1>
            <h2>Please <Link to="/login">Login</Link></h2>
        </>
    )
}