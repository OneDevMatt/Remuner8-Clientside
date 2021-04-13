import React, { Component } from 'react';
import { Row } from 'reactstrap';

import { paginate } from 'utils/paginate';

import Table from 'components/Tables/Table';
import TableInfo from 'components/Tables/TableInfo';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';
import SelectTableLength from './SelectTableLength';

export default class JobDescriptionTable extends Component {
  state = {
    pageSize: 10,
    currentPage: 1,
    sortColumn: { path: 'id', order: 'asc' },
    start: 1,
    end: 10
  };

  columns = [
    { path: 'id', label: '#' },
    { path: 'departments', label: 'Department' },
    { path: 'jobs', label: 'Job Description' },
    {
      key: 'Action',
      label: 'Action',
      content: job => (
        <ActionToggle
          toggleEditModal={() => this.props.onEdit(job)}
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
    const pagedData = data && paginate(data, currentPage, pageSize);

    return { totalCount: data.length, jobs: pagedData };
  };

  render() {
    const { data } = this.props;
    const { start, end, pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, jobs } = this.getPagedData();

    return (
      <div className="table-wrapper">
        <Table
          className="align-items-center my-3 table-hover"
          columns={this.columns}
          headerData={data}
          bodyData={jobs}
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
          <SelectTableLength togglePageSize={this.handlePageSizeChange} />
        </Row>
      </div>
    );
  }
}
