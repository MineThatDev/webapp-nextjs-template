'use client'; 
import { Input, Button } from "@/components/ui";
import { useState } from "react";


export default function Login() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    return (
        <>

            <div>Login Page</div>

            <div>First Name: {firstName}</div>
            <div>Last Name: {lastName}</div>

            <div>
                <Input 
                    name="Firstname"
                    required={true}
                    onInputChange={setFirstName}
                ></Input>

                <Input 
                    name="Lastname"
                    required={true}
                    onInputChange={setLastName}
                ></Input>
            </div>

            <div><Button></Button></div>
        </>
    )
}