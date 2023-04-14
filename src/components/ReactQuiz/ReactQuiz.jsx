import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

export const QuizContext = createContext();

const ReactQuiz = () => {
    const allQuizes = useLoaderData().data;

    const { total, name, questions } = allQuizes;
    return (
        
            <div className='w-50 m-auto'>
                <h1>Please Start Your {name} Quiz</h1>
                {
                    questions.map(question => 
                        <QuizContext.Provider key={question.id} value={question}>
                            <Questions></Questions>
                        </QuizContext.Provider>
                        )
                }
            </div>
        
    );
};

export default ReactQuiz;