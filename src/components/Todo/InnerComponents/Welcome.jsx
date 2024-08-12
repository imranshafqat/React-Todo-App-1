import { Link, useParams } from 'react-router-dom'

export default function WelcomeComponent() {
    const { username } = useParams()

    return (
        <div>
            <h1>Welcome to my Todo App</h1>
            <h2>Welcome {username}</h2>
            <h3><Link to="/todos">Manage Todos</Link></h3>
        </div>
    )
}