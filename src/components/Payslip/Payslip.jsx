import React, { Component } from 'react';
import { Row } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import PayslipNav from './Nav';
import PayslipBody from './Body';
import Employee from './Employee';
import Earnings from './Earnings';
import Deductions from './Deductions';
import NetSalary from './NetSalary';

import './payslip.css';

class Payslip extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PayslipNav content={this.componentRef} />
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-white">
                <i className="fa fa-print fa-lg"></i> Print
              </button>
            )}
            content={() => this.componentRef}
          />
          <PayslipBody ref={el => (this.componentRef = el)}>
            <Employee />
            <Row>
              <Earnings />
              <Deductions />
              <NetSalary />
            </Row>
          </PayslipBody>
        </div>
      </div>
    );
  }
}

export default Payslip;
