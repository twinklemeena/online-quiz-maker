import { Flex, TextField, Box, Text, RadioGroup, Select, Checkbox, Button } from '@radix-ui/themes'
import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import * as HoverCard from '@radix-ui/react-hover-card';
import questionService from '../../services/questions.services'
import './styles.css'
import { v4 as uuidv4 } from 'uuid';

const Question = ({ title, onTitleChange, quizId, question_id, allOptions }) => {

    const [options, setOptions] = useState(allOptions || []);
    console.log(allOptions, "allOptions");
    const [type, setType] = useState("single_correct")
    const handleOptionsAdd = async () => {
        let len = options.length;
        const temp = {
            id: len + 1,
            value: "Enter Your Option",
            isCorrect: false,
        }
        setOptions([...options, temp]);
        try {
            const res = await questionService.addOptionByQuestionId(question_id, { option: temp });
            console.log(res);
        } catch (e) {
            console.log(e);
        }

    }

    const handleDeleteOption = (id) => {
        setOptions((options) => {
            return options.filter((item) => item.id !== id)
        })
    }

    const handleOptionSelect = (e) => {
        const tempArr = options.map((item) => ({
            ...item,
            isCorrect: item.value === e,
        }));
        setOptions([...tempArr]);
        console.log(tempArr)
    }

    const handleMultipleOptionSelect = (id) => {
        const tempArr = options;
        const index = tempArr.findIndex((items) => items.id === id);
        tempArr[index].isCorrect = !tempArr[index].isCorrect;
        setOptions([...tempArr]);
        console.log(tempArr)
    }

    const handleOptionChange = async (value, id) => {
        let tempArr = options;
        let index = options.findIndex((item) => item.id === id);
        tempArr[index].value = value;
        setOptions([...tempArr]);
        try {
            const res = await questionService.updateOptionByQuestionIdAndOptionID(question_id, id, { updatedOption: tempArr[index] });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const handleTypeChange = (value) => {
        setType(value);
        let tempArr = options.map((item) => ({
            ...item,
            isCorrect: false,
        }));

        setOptions(tempArr);
    };

    const getSelectedValue = () => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].isCorrect === true) {
                return options[i].value;
            }
        }
        return null;
    }



    return (
        <Flex className='w-full relative' direction="column">
            <Flex direction="row" gap="2">
                <TextField.Root className='w-full'>
                    <TextField.Input onChange={onTitleChange} value={title} placeholder="Search the docs…" />
                </TextField.Root>
                <Select.Root onValueChange={(value) => handleTypeChange(value)} defaultValue="single_correct" size="2">
                    <Select.Trigger />
                    <Select.Content >
                        <Select.Group>
                            <Select.Label>Type</Select.Label>
                            <Select.Item value="single_correct">Single Correct</Select.Item>
                            <Select.Item value="multiple_correct">Multiple Correct</Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </Flex>

            <RadioGroup.Root value={getSelectedValue()} className='mt-[10px]' onValueChange={(e) => handleOptionSelect(e)}>
                <Flex gap="2" direction="column">
                    {
                        type === "single_correct" &&
                        options.map((item) => {
                            return (
                                <HoverCard.Root key={item.id} closeDelay={500}>
                                    <HoverCard.Trigger asChild>
                                        <Flex key={item.id} className='relative w-full' gap="2" align="center">
                                            <RadioGroup.Item value={item?.value} />
                                            <TextField.Root className='w-full'>
                                                <TextField.Input onChange={(e) => handleOptionChange(e.target.value, item?.id)} value={item?.value} placeholder='Option 1' />
                                            </TextField.Root>

                                        </Flex>
                                    </HoverCard.Trigger>
                                    <HoverCard.Portal>
                                        <HoverCard.Content className="HoverCardContent">
                                            <Button style={{
                                                padding: "3px 10px",
                                                borderRadius: 5,
                                                cursor: 'pointer'
                                            }} size="4" color='crimson' variant='outline' onClick={() => handleDeleteOption(item?.id)} className='cursor-pointer rounded-md h-[35px] flex items-center justify-center border-solid border-[1px] border-[#ed8686]'>
                                                <Text className='text-[#ed8686]'> Delete </Text>
                                            </Button>
                                            <HoverCard.Arrow className="HoverCardArrow" />
                                        </HoverCard.Content>
                                    </HoverCard.Portal>
                                </HoverCard.Root>
                            )
                        })

                    }
                    {
                        type === "multiple_correct" && options.map((item) => {
                            return (
                                <HoverCard.Root key={item.id} closeDelay={500}>
                                    <HoverCard.Trigger asChild>
                                        <Flex key={item?.id} className='relative w-full' gap="2" align="center">
                                            <Checkbox checked={item?.isCorrect} onCheckedChange={() => handleMultipleOptionSelect(item?.id)} />
                                            <TextField.Root className='w-full'>
                                                <TextField.Input onChange={(e) => handleOptionChange(e.target.value, item?.id)} value={item?.value} placeholder='Option 1' />
                                            </TextField.Root>
                                        </Flex>
                                    </HoverCard.Trigger>
                                    <HoverCard.Portal>
                                        <HoverCard.Content className="HoverCardContent">
                                            <Button style={{
                                                padding: "3px 10px",
                                                borderRadius: 5,
                                                cursor: 'pointer'
                                            }} size="4" color='crimson' variant='outline' onClick={() => handleDeleteOption(item?.id)} className='cursor-pointer rounded-md h-[35px] flex items-center justify-center border-solid border-[1px] border-[#ed8686]'>
                                                <Text className='text-[#ed8686]'> Delete </Text>
                                            </Button>
                                            <HoverCard.Arrow className="HoverCardArrow" />
                                        </HoverCard.Content>
                                    </HoverCard.Portal>
                                </HoverCard.Root>
                            )
                        })
                    }
                </Flex>
            </RadioGroup.Root>
            <Button variant='outline' onClick={handleOptionsAdd} className='rounded-md right-[-45px] absolute w-[35px] h-[35px] border-solid border-[1px] flex items-center justify-center'>
                <FaPlus />
            </Button>
        </Flex>
    )
}

export default Question

