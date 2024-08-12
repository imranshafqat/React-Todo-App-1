import './Todo.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Error403PageComponent from './InnerComponents/Error403'
import Error404PageComponent from './InnerComponents/Error404'
import FooterComponent from './InnerComponents/Footer'
import HeaderComponent from './InnerComponents/Header'
import LoginComponent from './InnerComponents/Login'
import LogoutComponent from './InnerComponents/Logout'
import TodoListComponent from './InnerComponents/TodoList'
import WelcomeComponent from './InnerComponents/Welcome'
import AuthProvider, { useAuth } from './security/AuthContext'

export default function Todo() {

    function AuthenticatedRoute({ children }) {
        const authContext = useAuth()

        if (authContext.isAuthenticated) {
            return children
        }

        return <Navigate to="/" />
        //return <Navigate to="/forbidden" />
    }

    return (
        <div className='TodoApp'>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <TodoListComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/forbidden' element={<Error403PageComponent />} />
                        <Route path='*' element={<Error404PageComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
