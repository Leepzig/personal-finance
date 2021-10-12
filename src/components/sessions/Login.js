import React from 'react'
import { useForm } from '../../hooks/useForm'

const Login = () => {
    const [form, handleFormChange] = useForm({
        email:"",
        password:"",
    })

    return (
        <div>
            <form>
                <input type="text" name="email" value={form.email} onChange={handleFormChange} placeholder="Email..."/><br/>
                <input type="text" name="password" value={form.password} onChange={handleFormChange} placeholder="Password..."/>
            </form>
        </div>
    )
}

export default Login
