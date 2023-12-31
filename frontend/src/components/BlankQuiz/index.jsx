import React from 'react';
import { Box, Flex } from '@radix-ui/themes';
import { FaPlus } from "react-icons/fa";

const BlankQuiz = ({ onClick }) => {
    return (
        <Flex
            onClick={onClick}
            align="center"
            justify="center"
            className='cursor-pointer border-solid border-[rgb(54,132,218)] border-[1px] w-[150px] h-[150px] rounded-md'
            style={{
                boxShadow: '0 0 10px rgba(54,132,218,0.2)',
            }}
        >
            <FaPlus className='text-[50px] text-[rgb(54,132,218)]' style={{
                textShadow: '0 0 10px rgba(54,132,218,1)',
            }} />
        </Flex>
    );
};

export default BlankQuiz;
