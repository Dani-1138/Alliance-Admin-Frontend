import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
// import { updateExamStatusRequest } from '../redux/actions/statusAction';
import { useNavigate } from 'react-router-dom';

const CountdownTimer = ({ handleSubmit }) => {
  const [time, setTime] = useState(60); // 3 minutes in seconds
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timer);
        setShowModal(true);
        // dispatch(updateExamStatusRequest(1, false));
        handleSubmit();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };

  useEffect(() => {}, [showModal]);

  return (
    <div className="text-center mt-5 ">
      <h2>{formatTime(time)}</h2>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          navigate('/stu-dashboard');
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Time's Up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>The time has finished.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowModal(false);
              navigate('/stu-dashboard');
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CountdownTimer;
