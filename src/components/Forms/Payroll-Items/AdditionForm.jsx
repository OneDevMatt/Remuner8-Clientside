import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';
import SelectBox from '../SelectBox';

const categories = ['Monthly remuneration', 'Additional Remuneration'];

const employees = ['John Doe', 'Woro Master'];

const AdditionForm = ({ data, toggle }) => {
  console.log(data);
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          Name <span className="text-danger">*</span>
        </Label>
        <Input type="text" required />
      </FormGroup>

      <FormGroup>
        <Label>
          Category <span className="text-danger">*</span>
        </Label>
        <SelectBox label="Select a category" options={categories} required />
      </FormGroup>

      <FormGroup>
        <Label>
          Amount <span className="text-danger">*</span>
        </Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend">&#8358;</InputGroupAddon>
          <Input placeholder="Amount" min={0} type="number" step="50" />
          <InputGroupAddon addonType="append">.00</InputGroupAddon>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <Label className="d-block">
          Assignee <span className="text-danger">*</span>
        </Label>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" defaultChecked /> No assignee
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" /> All employees
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" /> All employees
          </Label>
        </FormGroup>
        <SelectBox
          className="mt-1"
          label="-"
          options={employees}
          disabled
          required
        />
      </FormGroup>

      <div className="submit-section text-center mt-4">
        <Button color="primary" className="submit-btn px-5">
          SAVE
        </Button>
      </div>
    </Form>
  );
};

export default AdditionForm;
