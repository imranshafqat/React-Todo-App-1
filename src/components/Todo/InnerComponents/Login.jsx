import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../security/AuthContext'

export default function LoginComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showSuccessMsg, setShowSuccessMsg] = useState(false)
    const [showErrorMsg, setShowErrorMsg] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handlerUsernameChange(event) {
        //console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlerPasswordChange(event) {
        //console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (authContext.login(username, password)) {
            /* setShowSuccessMsg(true)
            setShowErrorMsg(false) */
            // specify parameter in javascript using backtick special string
            navigate(`/welcome/${username}`)
        } else {
            /* setShowSuccessMsg(false) */
            setShowErrorMsg(true)
        }
    }

    return (
        <div className='Login'>

            {/* {showSuccessMsg && <div className='successMessage'>Authenticated Sucessfully</div>} */}
            {showErrorMsg && <div className='alert alert-danger'>Authentication Failed. Please check credentials.</div>}

            <div className='LoginForm'>
                <div>
                    <label>User Name</label>
                    <input type='text' name="username" value={username} onChange={handlerUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name="password" value={password} onChange={handlerPasswordChange} />
                </div>
                <div>
                    <button type='submit' name="submit" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}