import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { id, logo, name } = quiz;
    console.log(quiz)
    return (
        <Col>
            <Card>
                <Card.Img className='quiz-img' variant="top" src={logo} />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <Button className='d-flex align-items-center justify-content-between'>
                            <p className='m-0 me-1'>Start Quiz</p>
                            <ArrowRightIcon className='arrow-icon'></ArrowRightIcon>
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Quiz;