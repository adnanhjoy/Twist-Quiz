import React, { useContext } from 'react';
import { QuizContext } from '../ReactQuiz/ReactQuiz';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Questions.css';

const Questions = () => {
    const questiones = useContext(QuizContext)
    const { options, question, correctAnswer } = questiones;
    console.log(questiones)
    return (
        <div className='question-option'>
            <p><b>{question.slice(3, -4)}</b></p>
            <Row xs={1} md={2}>
                {
                    options.map(option =>
                        <Col>
                            <div className='question d-flex align-items-center'>
                                <input type="radio" name="" className='me-2' />
                                <label>{option}</label>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Questions;