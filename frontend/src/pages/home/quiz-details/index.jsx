import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Flex } from '@radix-ui/themes';
import QuizInput from '../../../components/QuizInput';
import { FaPlus } from "react-icons/fa6";
import Question from '../../../components/Question';
import quizService from '../../../services/quizzes.services';
import questionService from '../../../services/questions.services';
import { v4 as uuidv4 } from 'uuid';

const QuizDetails = () => {

    const [questions, setQuestions] = useState([]);
    const [quizId, setQuizId] = useState();

    const { id } = useParams();

    useEffect(() => {
        const user_id = JSON.parse(localStorage.getItem("user")).user_id;
        console.log(user_id);
        let payload = {
            quiz_id: uuidv4(),
            generated_id: id,
            admin_id: user_id,
            quiz_title: "Untitled Quiz",
            quiz_description: "",
        }
        const postData = async () => {
            try {
                const quiz = await quizService.getQuizById(id);
                console.log(quiz);
                let res;
                if (quiz.length === 0) {
                    res = await quizService.createQuiz(payload);
                    setQuizId(res.quiz_id)
                }
                else {
                    const allQuestions = await questionService.getQuestionsByQuizId(quiz[0].quiz_id);
                    console.log(allQuestions, "all");
                    setQuestions(allQuestions)
                    setQuizId(quiz[0].quiz_id);
                }
                console.log(res);
            } catch (e) {
                console.log(e);
            }
        }
        postData();
    }, []);

    const handleAddQuestion = async () => {
        let len = questions.length;
        const temp = {
            question_id: uuidv4(),
            quiz_id: quizId,
            question_text: `Question ${len + 1}`,
            is_single_correct: true,
            options: [],
            correct_answers: []
        }
        setQuestions([...questions, temp]);

        try {
            const res = await questionService.createQuestion(temp);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const handleTitleChange = async (value, id) => {
        let tempArr = questions.map((item) => {
            if (item.question_id === id) {
                return {
                    ...item,
                    question_text: value,
                };
            }
            return item;
        });
        console.log(tempArr)
        setQuestions(tempArr);
        try {
            console.log("asdas")
            const res = await questionService.updateQuestionText(id, { updatedQuestionText: value });
            console.log(res, "asdsad");
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Flex direction="column" align="center" justify="center" gap="4">
            <QuizInput width="800px" height="100px" value="Untitled Quiz" fontSize="30px" />
            <QuizInput width="800px" height="60px" placeholder="Quiz Description" />
            {
                questions.map((item) => {
                    return (
                        <Question allOptions={item.options} question_id={item.question_id} quizId={quizId} key={item.question_id} onTitleChange={(e) => handleTitleChange(e.target.value, item.question_id)} title={item.question_text} />
                    )
                })
            }
            <Button onClick={handleAddQuestion} variant='outline' className='w-full'>
                <FaPlus />
            </Button>
        </Flex>
    )
}

export default QuizDetails