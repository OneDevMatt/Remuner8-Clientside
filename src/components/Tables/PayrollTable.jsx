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
import { formatDates } from 'utils/functions';

import Avatar from 'components/Avatars/EmployeeAvatar';
import CustomButton from 'components/Custom-Buttons/Button';
import Table from 'components/Tables/Table';
import TableInfo from 'components/Tables/TableInfo';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';
import SelectTableLength from './SelectTableLength';

const totalEarnings = () => null;
const totalDeductions = () => null;
const calculateNet = () => null;

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
    { path: 'job', label: 'Role' },
    {
      path: 'salary',
      label: 'Salary',
      content: payroll => calculateNet(payroll)
    },
    {
      key: 'Payslip',
      label: 'Payslip',
      content: payroll => (
        <Button
          color="primary"
          onClick={() => this.props.history.push('/admin/payslip')}
        >
          Generate Slip
        </Button>
      )
    },
    {
      key: 'Action',
      label: 'Action',
      content: overtime => (
        <ActionToggle
          toggleEditModal={() => this.props.onEdit(overtime)}
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
