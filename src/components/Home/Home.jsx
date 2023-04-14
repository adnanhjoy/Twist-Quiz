import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    const quizes = useLoaderData().data;
    return (
        <Container>
            <Row xs={1} md={4}>
                {
                    quizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </Row>
        </Container>
    );
};

export default Home;