import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import { Container } from 'react-bootstrap';

export const QuizContext = createContext();

const ReactQuiz = () => {
    const allQuizes = useLoaderData().data;

    const { total, name, questions } = allQuizes;
    return (

        <Container>
            <div>
                <h1 className='my-5 text-center'>Please Start Your {name} Quiz</h1>
                {
                    questions.map(question =>
                        <QuizContext.Provider key={question.id} value={question}>
                            <Questions></Questions>
                        </QuizContext.Provider>
                    )
                }
            </div>
        </Container>

    );
};

export default ReactQuiz;