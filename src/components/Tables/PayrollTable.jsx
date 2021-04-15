import React, { Component } from 'react';
import { Row, Button } from 'reactstrap';
import {
  handlePageChange,
  handlePrevious,
  handleNext,
  handlePageSizeChange,
  handleSort,
  getPagedData
} from 'utils/tableMethods';
import {
  formatDates,
  calculateNet,
  totalEarnings,
  totalDeductions
} from 'utils/functions';

import Avatar from 'components/Avatars/EmployeeAvatar';
import Table from 'components/Tables/Table';
import TableInfo from 'components/Tables/TableInfo';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';
import SelectTableLength from './SelectTableLength';

class PayrollTable extends Component {
  state = {
    pageSize: 10,
    currentPage: 1,
    sortColumn: { path: '', order: 'asc' },
    start: 1,
    end: 10
  };

  columns = [
    {
      path: 'name',
      label: 'Name',
      content: payroll => <Avatar employee={payroll} />
    },
    { path: 'employeeId', label: 'Employee ID' },
    { path: 'joinDate', label: 'Join Date' },
    { path: 'job', label: 'Job Description' },
    {
      path: 'salary',
      label: 'Salary',
      content: payroll => (
        <>
          &#8358;
          {calculateNet(totalEarnings(payroll), totalDeductions(payroll))}
        </>
      )
    },
    {
      key: 'Payslip',
      label: 'Payslip',
      content: payroll => (
        <Button
          color="primary"
          style={{ padding: '0.25rem 0.5rem' }}
          onClick={() => this.props.history.push('/admin/payslip')}
        >
          Generate Slip
        </Button>
      )
    },
    {
      key: 'Action',
      label: 'Action',
      content: payroll => (
        <ActionToggle
          toggleEditModal={() => this.props.onEdit(payroll)}
          toggleDeleteModal={this.props.onDelete}
        />
      )
    }
  ];

  render() {
    const { data } = this.props;
    const { start, end, pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: payroll } = getPagedData(
      data,
      pageSize,
      currentPage
    );
    const formattedPayroll = formatDates(payroll, 'dateJoined');

    return (
      <div className="table-wrapper">
        <Table
          className="align-items-center mt-3 table-flush"
          columns={this.columns}
          headerData={data}
          bodyData={formattedPayroll}
          sortColumn={sortColumn}
          onSort={handleSort}
        />
        <Row className="align-items-baseline justify-content-lg-between mt-2">
          <TableInfo start={start} end={end} total={totalCount} />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            onPageSizeChange={handlePageSizeChange}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
          <SelectTableLength togglePageSize={handlePageSizeChange} />
        </Row>
      </div>
    );
  }
}

export default PayrollTable;
