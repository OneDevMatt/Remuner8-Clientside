import React from 'react';
import { Col } from 'reactstrap';

const TableInfo = ({ start, end, total }) => (
  <Col sm={12} md={5} className="mb-sm-3">
    <div
      className="dataTables_info text-center text-lg-left px-lg-4"
      id="DataTables_Table_info"
      role="status"
      aria-live="polite"
      style={{ color: '#1f1f1f' }}
    >
      Showing {start} to {end > total ? total : end} of {total} entries
    </div>
  </Col>
);

export default TableInfo;
