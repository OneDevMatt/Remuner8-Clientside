import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const ActionToggle = ({ direction, toggleEditModal, toggleDeleteModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
      <DropdownToggle
        className="mr-0 no-btn"
        style={{ boxShadow: 'unset' }}
      >
        <i className="fa fa-ellipsis-v"></i>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={toggleEditModal}>
          <i className="fa fa-user-edit"></i>Edit
        </DropdownItem>
        <DropdownItem onClick={toggleDeleteModal}>
          <i className="fa fa-trash-alt"></i> Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ActionToggle;
