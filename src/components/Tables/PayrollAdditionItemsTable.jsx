import React from 'react';
import { Table } from 'reactstrap';

import ActionToggle from 'components/Custom-Buttons/ActionToggle';
import LoaderRing from 'components/Loading/Loader';

const PayrollAdditionItems = ({ items, onEdit, onDelete }) => {
  
  if (!items) return <LoaderRing />;
  
  return (
    <Table className="align-items-center text-dark" striped hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.amount}</td>
            <td>
              <ActionToggle
                toggleEditModal={() => onEdit(item)}
                toggleDeleteModal={onDelete}
                />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PayrollAdditionItems;

// const columns = [
//   { path: 'name', label: 'Name' },
//   { path: 'category', label: 'Category' },
//   { path: 'amount', label: 'Default/Unit Amount' },
//   {
//     key: 'Action',
//     label: 'Action',
//     content: item => (
//       <ActionToggle
//         toggleEditModal={() => onEdit(item)}
//         toggleDeleteModal={onDelete}
//       />
//     )
//   }
// ];