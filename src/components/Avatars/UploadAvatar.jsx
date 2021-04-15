import React from 'react';
import { Container, Input } from 'reactstrap';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const UploadAvatar = ({ avatar, onUpload }) => {
  return (
    <>
      <Container
        className="container justify-content-center align-items-center d-flex"
        style={{ height: '70px', width: '100px' }}
      >
        <Image
          width="100%"
          height="auto"
          className="mb-2 rounded"
          src={avatar}
        />
      </Container>
      <Input type="file" id="actual-btn" onChange={onUpload} hidden />
      <Label htmlFor="actual-btn">Choose File</Label>
    </>
  );
};

export default UploadAvatar;

const Label = styled.label`
  background-color: #5e72e4;
  color: white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    transform: translateY(-1px);
  }
`;
