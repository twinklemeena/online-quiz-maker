import React from 'react'
import { TextField } from '@radix-ui/themes'

const QuizInput = (props) => {
    const { height = "30px", width = "200px", fontSize = "15px", value = '', placeholder = "" } = props;
    return (
        <TextField.Root className='flex flex-col items-center justify-center' style={{
            width: width,
            height: height
        }}>
            <TextField.Input style={{
                fontSize: fontSize
            }} variant='soft' value={value} placeholder={placeholder} />
        </TextField.Root>
    )
}

export default QuizInput