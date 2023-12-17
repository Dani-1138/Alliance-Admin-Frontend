/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setDeletedId } from '../pages/AdminNewsPage/slice';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
  /* width: 10%; */
  height: 80%;
  /* padding-top: 5rem; */
  margin: 20px;
`;

const Row = styled.div`
  display: flex;
  /* gap: 1.5rem; */
  /* width: 80%; */
  background-color: #f3fdfd;
  padding: 1rem;
`;

const Col = styled.div`
  /* width: 80%; */
  flex: 1;
  margin-bottom: 1.5rem;
  margin-left: 0.5rem;
`;

const RippleWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  background-image: ${props => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
  border-radius: 0.2rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.15);
  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    display: block;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .mask {
    background-color: rgba(251, 251, 251, 0.15);
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: #dc3545;
  color: #fff;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  margin-bottom: 1rem;
`;

const Title = styled.h4`
  strong {
    font-weight: bold;
  }
`;

const Paragraph = styled.p`
  color: #6c757d;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  float: right;
  &:hover {
    background-color: #0056b3;
  }
`;

export default function NewsDisplay({ data, handleOpen }) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  const handleOpenDelete = id => {
    // handleOpen();
    dispatch(setDeletedId(id));
    handleOpen();
  };

  const timestamp = data.time.seconds * 1000;
  const date = new Date(timestamp);

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formattedDateString = date.toLocaleString('en-US', options);
  return (
    <Container className="row shadow">
      <Row>
        <Col>
          <RippleWrapper imageUrl={data.imageUrl}>
            {/* <img
              src="https://www.amu.edu.et/images/slider/cache/1c1e5f5e616ff7d169407c3e76ac6d24/_K8A0832.jpg"
              alt="News Image"
            /> */}
            <a href="#!">
              <div className="mask"></div>
            </a>
          </RippleWrapper>
        </Col>
        <Col>
          <Badge>{formattedDateString}</Badge>
          <Title>
            <strong>
              {data.title.substring(0, 100)}
              ...
            </strong>
          </Title>
          <Paragraph>
            {expanded ? data.details : data.details.substring(0, 300)}
            {data.details.length >= 300 && '...'}
            {data.details.length > 300 && (
              <span className="btn btn-link" onClick={handleExpand}>
                {expanded ? 'less' : 'More'}
              </span>
            )}
          </Paragraph>
          <Link
            to={{
              pathname: '/admin/update-news',
              search: `?id=${encodeURIComponent(data.id)}`,
            }}
          >
            <Button>Edit</Button>
          </Link>

          <button
            type="button"
            className="btn btn-danger"
            style={{ float: 'right' }}
            onClick={() => handleOpenDelete(data?.id)}
          >
            Delete
          </button>
        </Col>
      </Row>
    </Container>
  );
}
