import React from 'react';
import { Row, Col } from 'reactstrap';

import Card from './Card';
import DummyImage from 'assets/img/theme/team-1-800x800.jpg';
import LoaderRing from 'components/Loading/Loader';

const Grid = ({ employees, toggleEditModal, toggleDeleteModal }) => (
  <Row>
    {!employees ? (
      <LoaderRing />
    ) : (
      employees.map((employee, index) => (
        <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
          <Card
            imgSrc={DummyImage}
            employee={employee}
            key={employee.id}
            toggleEditModal={toggleEditModal}
            toggleDeleteModal={toggleDeleteModal}
          />
        </Col>
      ))
    )}
  </Row>
);

export default Grid;
