import { Box, Text } from '@radix-ui/themes'
import React from 'react'

const QuizCard = ({ label , onClick}) => {
    return (
        <Box onClick={onClick} className='cursor-pointer border-solid border-[rgb(54,132,218)] border-[1px] w-[150px] h-[150px] rounded-md flex items-center justify-center'
            style={{
                boxShadow: '0 0 10px rgba(54,132,218,0.2)',
            }}>
            <Text>
                {label}
            </Text>
        </Box>
    )
}

export default QuizCard