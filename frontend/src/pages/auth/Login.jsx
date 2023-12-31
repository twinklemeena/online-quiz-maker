import React, { useState } from 'react'
import Input from '../../components/Input'
import { Button, Flex } from '@radix-ui/themes'
import { Link, useNavigate } from 'react-router-dom'
import userService from '../../services/users.services'
import Loading from '../../components/Loading'


const Login = () => {

    const [info, setInfo] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await userService.loginUser(info);
            console.log(res);
            localStorage.setItem("user", JSON.stringify({username: res.username, type: res.user_type, user_id: res.user_id}));
            if (res.success) {
                navigate('/home')
            }
        } catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <Flex
            direction="column"
            gap="4"
            align="center"
            justify="center"
            style={{
                padding: "20px",
                width: "fit-content"
            }}>
            {loading && <Loading />}
            <Input onChange={(e) => { setInfo({ ...info, username: e.target.value }) }} type="text" width="300px" id="Username" label={"Username"} placeholder="Eg. anjalierx" />
            <Input onChange={(e) => { setInfo({ ...info, password: e.target.value }) }} type="password" width="300px" id="Password" label={"Password"} placeholder="******" />
            <Button disabled={loading ? true : false} onClick={handleSubmit} style={{
                width: "100%"
            }} size="2" variant="soft">Login</Button>

            <h1>Don't have an account <Link to="/auth/sign-up" className='inline-block font-semibold underline'>Signup</Link> </h1>
        </Flex>
    )
}

export default Login