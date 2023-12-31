import React, { useState } from 'react'
import Input from '../../components/Input'
import { Button, Flex, RadioGroup, Text } from '@radix-ui/themes'
import { Link } from 'react-router-dom'
import userService from '../../services/users.services'
import { v4 as uuidv4 } from 'uuid';


const Signup = () => {

    const [info, setInfo] = useState({});
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});

    const handleSubmit = async () => {
        console.log("working", info)
        if (info.password === confirmPassword) {
            try {
                const res = await userService.registerUser({ ...info, user_type: "teacher", user_id: uuidv4() });
                console.log(res);
            } catch (e) {
                console.log(e);
            }
        }
        else {
            setError({ ...error, confirmPassword: "Passwords does not match" })
        }

    }

    return (
        <Flex direction="column" gap="4" align="center" justify="center" style={{
            width: "fit-content",
            padding: "20px"
        }}>
            <Input onChange={(event) => setInfo({ ...info, username: event.target.value })} type="text" width="300px" id="Username" label={"Username"} placeholder="Eg. anjalierx" />
            <Input onChange={(event) => setInfo({ ...info, password: event.target.value })} type="password" width="300px" id="Password" label={"Password"} placeholder="******" />
            <Input onChange={(e) => setConfirmPassword(e.target.value)} type="password" width="300px" id="confirm-password" label={"Confirm Password"} placeholder="******" />
            <RadioGroup.Root onChange={(e) => { console.log(e.target.value) }} variant='soft' defaultValue="1">
                <Flex gap="2" direction="row">
                    <Text as="label" size="2">
                        <Flex gap="2">
                            <RadioGroup.Item value="student" /> Student
                        </Flex>
                    </Text>
                    <Text as="label" size="2">
                        <Flex gap="2">
                            <RadioGroup.Item value="teacher" /> Teacher
                        </Flex>
                    </Text>
                </Flex>
            </RadioGroup.Root>
            <Button onClick={handleSubmit} style={{
                width: "100%"
            }} size="2" variant="soft">Sign Up</Button>

            <h1>Already have an account <Link to="/auth/login" className='inline-block font-semibold underline'>Login here</Link> </h1>
        </Flex>
    )
}

export default Signup