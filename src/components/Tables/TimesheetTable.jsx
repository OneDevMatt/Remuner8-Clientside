import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { paginate } from 'utils/paginate';
import { getRandomTime, randomDate, secondsToHours } from 'utils/functions';

import Table from 'components/Tables/Table';
import TableInfo from 'components/Tables/TableInfo';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';

const time = getRandomTime();
const now = new Date();
const yesterday = new Date(2021, 3, 12);
const randomDay = randomDate(this.yesterday, this.now);

class TimesheetTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      currentPage: 1,
      sortColumn: { path: 'id', order: 'asc' },
      start: 1,
      end: 10
    };
  }

  columns = [
    { path: 'id', label: '#' },
    { path: 'employee', label: 'Employee' },
    { label: 'Time In', key: 'timeIn', content: () => time.userTime },
    { label: 'Time Out', key: 'timeOut', content: () => time.userTime },
    { label: 'Hours Worked', key: 'hours', content: () => <Col>Hi</Col> },
    {
      key: 'Action',
      label: 'Action',
      content: timesheet => (
        <ActionToggle
          toggleEditModal={() => this.props.onEdit(timesheet)}
          toggleDeleteModal={this.props.onDelete}
        />
      )
    }
  ];

  handlePageChange = page => this.setState({ currentPage: page });

  handlePrevious = page => this.setState({ currentPage: page - 1 });

  handleNext = page => this.setState({ currentPage: page + 1 });

  handlePageSizeChange = value => this.setState({ pageSize: Number(value) });

  handleSort = sortColumn => this.setState({ sortColumn });

  getPagedData = () => {
    const { data } = this.props;
    if (!data) return { totalCount: 0, data: null };
    const { pageSize, currentPage } = this.state;
    const timesheet = data && paginate(data, currentPage, pageSize);

    return { totalCount: data.length, data: timesheet };
  };

  render() {
    const { data } = this.props;
    const { start, end, pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: timesheet } = this.getPagedData();

    return (
      <div className="table-wrapper">
        <Table
          className="align-items-center my-3 table-hover"
          columns={this.columns}
          headerData={data}
          bodyData={timesheet}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
        <Row className="align-items-baseline justify-content-lg-between mt-2">
          <TableInfo start={start} end={end} total={totalCount} />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            onPageSizeChange={this.handlePageSizeChange}
            onNext={this.handleNext}
            onPrevious={this.handlePrevious}
          />
        </Row>
      </div>
    );
  }
}

export default TimesheetTable;
