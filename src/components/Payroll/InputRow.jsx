import React from 'react';
import { Row, Col, FormGroup } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import FormInput from 'components/Forms/Input';
import SelectBox from 'components/Forms/SelectBox';
import DatePicker from 'components/Forms/DatePicker';

const options = ['Pending', 'Approved', 'Rejected'];
const roleOptions = ['Employee', 'Manager'];

const InputRow = () => {
  return (
    <Row className="mb-3 justify-content-around">
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormInput label="Employee Name" type="text" />
      </Col>
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormGroup>
          <SelectBox
            focusLabel="Job Description"
            label="--Select--"
            options={roleOptions}
          />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={3} xl={3}>
        <FormGroup>
        <SelectBox
          focusLabel="Leave Type"
          label="Select Leave Type"
          options={options}
          adjustLabel
        />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={3} xl={3}>
        <FormGroup>
          <DatePicker label="From" />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={3} xl={3}>
        <FormGroup>
          <DatePicker label="To" />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormGroup>
          <CustomButton className="btn btn-block">Search</CustomButton>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default InputRow;
