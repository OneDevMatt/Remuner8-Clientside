import React from 'react';
import { Col } from 'reactstrap';

const LeaveStats = () => (
  <>
    <Col sm="12" md="6" lg="3">
      <div className="stats-info">
        <h6>Today Presents</h6>
        <h4>12 / 60</h4>
      </div>
    </Col>
    <Col sm="12" md="6" lg="3">
      <div className="stats-info">
        <h6>Planned Leaves</h6>
        <h4>
          8 <span>Today</span>
        </h4>
      </div>
    </Col>
    <Col sm="12" md="6" lg="3">
      <div className="stats-info">
        <h6>Unplanned Leaves</h6>
        <h4>
          0 <span>Today</span>
        </h4>
      </div>
    </Col>
    <Col sm="12" md="6" lg="3">
      <div className="stats-info">
        <h6>Pending Requests</h6>
        <h4>12</h4>
      </div>
    </Col>
  </>
);

export default LeaveStats;
