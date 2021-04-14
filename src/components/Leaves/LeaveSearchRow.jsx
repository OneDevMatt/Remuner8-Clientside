import React from 'react';
import { Row, Col, FormGroup } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import FormInput from 'components/Forms/Input';
import SelectBox from 'components/Forms/SelectBox';
import DatePicker from 'components/Forms/DatePicker';

const options = ['Pending', 'Approved', 'Rejected'];
const roleOptions = ['Casual Leave', 'Medical Leave', 'Loss of Pay'];

const LeaveSearchRow = () => {
  return (
    <Row className="mb-3 justify-content-around">
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormGroup>
          <FormInput label="Employee Name" type="text" />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={4} xl={2}>
        <FormGroup>
          <SelectBox
            focusLabel="Leave Type"
            label="--Select--"
            options={roleOptions}
          />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={4} xl={2}>
        <FormGroup>
          <SelectBox
            focusLabel="Leave Status"
            label="--Select--"
            options={options}
          />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormGroup>
          <DatePicker label="From" />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormGroup>
          <DatePicker label="To" />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={2}>
        <FormGroup>
          <CustomButton className="btn btn-block">Search</CustomButton>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default LeaveSearchRow;
