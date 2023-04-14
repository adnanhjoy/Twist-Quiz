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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const questiones = useContext(QuizContext)
    const { id, options, question, correctAnswer } = questiones;

    const correctAns = (option) => {
        if (option === correctAnswer) {
            toast('Correct Answer')
        } else {
            toast('Wrong Answer')
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
                            <div className='question'>
                                <label className='d-flex align-items-center'>
                                    <input type="radio" name={id} className='me-2' onClick={() => correctAns(option)} />
                                    {option}
                                </label>

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
            <ToastContainer />
        </div>
    );
};

export default Questions;