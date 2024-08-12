import { Link } from 'react-router-dom'
import { useAuth } from '../security/AuthContext'

export default function HeaderComponent() {

    const authContext = useAuth()

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <p className="navbar-brand ms-2 fs-2 fw-bold text-black">in28minutes</p>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {authContext.isAuthenticated && <li className="nav-item fs-5">
                                    <Link className="nav-link" to={`/welcome/${authContext?.username || 'NO-USER-LOGGED-IN'}`}>Home</Link>
                                </li>}
                                {authContext.isAuthenticated && <li className="nav-item fs-5">
                                    <Link className="nav-link" to="/todos">Todos</Link>
                                </li>}
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            {!authContext.isAuthenticated && <li className="nav-item fs-5">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>}
                            {authContext.isAuthenticated && <li className="nav-item fs-5">
                                <Link className="nav-link">Welcome {authContext.username}</Link>
                            </li>}
                            {authContext.isAuthenticated && <li className="nav-item fs-5">
                                <Link className="nav-link" to="/logout" onClick={() => authContext.setAuthenticated(false)}>Logout</Link>
                            </li>}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}