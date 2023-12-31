import { Flex, TextField } from '@radix-ui/themes'
import React from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <Flex className='h-[50px] w-full border-solid border-b-[1px] border-[rgb(54,132,218)] px-[20px] py-[10px]'>
            <TextField.Root>
                <TextField.Slot>
                    <CiSearch height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Search the quizzes..." />
            </TextField.Root>
        </Flex>
    )
}

export default Navbar