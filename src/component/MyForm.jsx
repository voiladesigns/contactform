import React from "react";
import { useState } from "react";

export const MyForm = () => {

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        messages:''
    })

    const {username, email, messages} = formData;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData=>({
            ...prevData,
            [name]: value,
        })))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await fetch('https://www.google.com', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username,email,messages})
            });

            if(response.ok){
                alert('Congratulation!!! Form is sent');
                setFormData({username: '', email:'', messages:''})
            }
            else{
                alert('Issue in sending form.')
            }
        } catch(error){
            console.log('Error:',error);
            alert("Error in submitting your request")
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: 
                <input type="text" name='username' value={username} onChange={handleChange}/>
                </label>
                <label>Email:
                <input type="email" name='email' value={email} onChange={handleChange}/>
                </label>
                <label>Message:
                <textarea name="messages" value={messages} onChange={handleChange}/>
                </label>
                <button type='submit'>Send</button>
            </form>
        </div>
    )

}