import React, { useState } from 'react';
import { Table } from 'reactstrap';

import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';
import EmployeeForm from 'components/Forms/Employees/EmployeeForm';
import LoaderRing from 'components/Loading/Loader';

import TableHeader from './EmployeeTableHeader';
import TableBody from './EmployeeTableBody';

const EmployeeTable = props => {
  const [editModalOpen, setEditModalState] = useState(false);
  const [deleteModalOpen, setDeleteModalState] = useState(false);
  const toggleEditModal = () => setEditModalState(!editModalOpen);
  const toggleDeleteModal = () => setDeleteModalState(!deleteModalOpen);
  // const columns = [
  //   { path: 'name', label: 'Name', content: <Avatar /> },
  //   { path: 'id', label: 'ID' },
  //   { path: 'email', label: 'Email' },
  //   { path: 'mobile', label: 'Phone Number' },
  //   { path: 'joinDate', label: 'Join Date' },
  //   { path: 'department', label: 'Department' },
  //   { key: 'Action', label: 'Action', content: <ActionToggle /> }
  // ];

  const getTableHeaders = () => {
    const tableHeaders = props.employees.slice(1);
    return Object.keys(...tableHeaders);
  };

  return (
    <>
      {props.loading ? (
        <LoaderRing />
      ) : (
        <Table
          className="align-items-center table-flush"
          responsive
          striped
          bordered
          style={{ background: '#fff' }}
        >
          <TableHeader headers={getTableHeaders} />
          <TableBody
            body={props.employees}
            toggleEditModal={toggleEditModal}
            toggleDeleteModal={toggleDeleteModal}
          />
        </Table>
      )}

      <CustomModal
        isOpen={editModalOpen}
        toggle={toggleEditModal}
        label="Edit Employee"
      >
        <EmployeeForm readOnly />
      </CustomModal>

      <DeleteModal
        isOpen={deleteModalOpen}
        toggle={toggleDeleteModal}
        label="Delete Employee"
      >
        Are you sure you want to delete this employee?
      </DeleteModal>
    </>
  );
};

export default EmployeeTable;
