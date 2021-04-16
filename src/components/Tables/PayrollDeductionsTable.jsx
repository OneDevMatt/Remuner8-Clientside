import React from 'react';

import Table from 'components/Tables/Table';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';
import LoaderRing from 'components/Loading/Loader';

const columns = [
  { path: 'name', label: 'Name' },
  { path: 'category', label: 'Category' },
  { path: 'amount', label: 'Default/Unit Amount' },
  {
    key: 'Action',
    label: 'Action',
    content: item => (
      <ActionToggle
        toggleEditModal={() => this.props.onEdit(item)}
        toggleDeleteModal={this.props.onDelete}
      />
    )
  }
];

const PayrollDeductionItems = ({ items }) => {
  if (!items) return <LoaderRing />;

  return (
    <Table
      className="align-items-center my-3 table-hover table-radius"
      columns={columns}
      headerData={items}
      bodyData={items}
    />
  );
};

export default PayrollDeductionItems;
