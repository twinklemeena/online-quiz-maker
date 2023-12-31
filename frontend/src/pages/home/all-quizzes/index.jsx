import React, { useEffect, useState } from 'react'
import quizService from '../../../services/quizzes.services'
import Loading from '../../../components/Loading';
import Navbar from '../../../components/Navbar';
import { Flex } from '@radix-ui/themes';
import BlankQuiz from '../../../components/BlankQuiz';
import { useNavigate } from 'react-router-dom';
import QuizCard from '../../../components/QuizCard';

function generateId(length = 6) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789#$%^&&*';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

const AllQuizzes = () => {

  const [allQuizzes, setAllQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      try {
        const res = await quizService.getAllQuizzesByAdminID(user.user_id);
        console.log(res)
        setAllQuizzes(res);
      }
      catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchQuizzes();
  }, [])

  const handleAddQuiz = () => {
    navigate(`/home/${generateId()}`)
  }

  const handleQuizNavigate = (id) => {
    navigate(`/home/${id}`)
  }

  return (
    <Flex direction="column" align="center" justify="center" className='w-screen'>
      {loading && <Loading />}
      <Navbar />
      <div className="mt-[50px] grid grid-cols-5 gap-[40px]">
        <BlankQuiz onClick={handleAddQuiz} />
        {
          allQuizzes.map((item) => {
            return <QuizCard onClick={() => handleQuizNavigate(item.generated_id)} label={item.quiz_title} key={item.quiz_id}/>
          })
        }
      </div>
    </Flex>
  )
}

export default AllQuizzes