import React, { useContext, useState } from 'react';
import { QuizContext } from '../ReactQuiz/ReactQuiz';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Questions.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import Modal from 'react-bootstrap/Modal';

const Questions = () => {
    const [answer, setAnswer] = useState([]);
    const [falseans, setFalseans] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const questiones = useContext(QuizContext)
    const { options, question, correctAnswer } = questiones;
    const correctAns = (option) => {
        if (option === correctAnswer) {
            toast('Correct Answer')
            setAnswer([...answer, correctAnswer])
        } else {
            toast('Wrong Answer')
            setFalseans([...falseans, option])
        }
    }

    return (
        <div className='question-option'>
            <div className='text-end fw-normal'>
                <EyeIcon onClick={handleShow} className='arrow-icon see-correct'></EyeIcon>
            </div>
            <p><b>{question.slice(3, -4)}</b></p>
            <Row xs={1} md={2}>
                {
                    options.map(option =>
                        <Col>
                            <div onClick={() => correctAns(option)} className='question d-flex align-items-center'>
                                <input type="radio" name="" className='me-2' />
                                <label>{option}</label>
                                <ToastContainer />
                            </div>
                        </Col>
                    )
                }
            </Row>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Correct Answer</Modal.Title>
                </Modal.Header>
                <Modal.Body>{correctAnswer}</Modal.Body>
                
            </Modal>
        </div>
    );
};

export default Questions;