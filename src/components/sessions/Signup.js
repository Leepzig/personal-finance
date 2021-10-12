import React from 'react'
import { useForm } from '../../hooks/useForm'

const Signup = () => {
    const [form, handleFormChange] = useForm({
        name:"",
        email:"",
        password:"",
        password_confirmation:""
    })

    return (
        <div>
            <form>
                <input type="text" name="name" value={form.name} onChange={handleFormChange} placeholder="Name..."/><br/>
                <input type="text" name="email" value={form.email} onChange={handleFormChange} placeholder="Email..."/><br/>
                <input type="text" name="password" value={form.password} onChange={handleFormChange} placeholder="password..."/><br/>
                <input type="text" name="password_confirmation" value={form.password_confirmation} onChange={handleFormChange} placeholder="password..."/>
            </form>
        </div>
    )
}

export default Signup
