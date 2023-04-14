import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import { Row } from 'react-bootstrap';

const Home = () => {
    const quizes = useLoaderData().data;
    return (
        <Row xs={1} md={4}>
            {
                quizes.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </Row>
    );
};

export default Home;