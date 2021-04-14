import React, { useRef } from 'react';
import { Row } from 'reactstrap';
import PayslipNav from 'components/Payslip/Nav';
import PayslipBody from 'components/Payslip/Body';
import Employee from 'components/Payslip/Employee';
import Earnings from 'components/Payslip/Earnings';
import Deductions from 'components/Payslip/Deductions';
import NetSalary from 'components/Payslip/NetSalary';

import 'assets/css/payslip.css';

const Payslip = () => {
  const componentRef = useRef();
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <PayslipNav content={() => componentRef.current} />
        <PayslipBody ref={componentRef}>
          <Employee />
          <Row className="justify-content-between">
            <Earnings />
            <Deductions />
            <NetSalary />
          </Row>
        </PayslipBody>
      </div>
    </div>
  );
};

export default Payslip;
