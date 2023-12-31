import React from 'react'
import { Flex, TextField } from '@radix-ui/themes'
import * as Label from '@radix-ui/react-label';

const Input = (props) => {

    const { label, placeholder, id, type, width, onChange } = props;

    return (

        <Flex style={{
            width: "100%"
        }} direction="row" justify="between" align="center" gap="2">
            <Label.Root htmlFor={id}>
                {label}
            </Label.Root>
            <TextField.Root style={{
                width: width
            }}>
                <TextField.Input variant='soft' onChange={onChange} type={type} style={{
                    width: "80%"
                }} id={id} placeholder={placeholder} />
            </TextField.Root>
        </Flex>
    )
}

export default Input