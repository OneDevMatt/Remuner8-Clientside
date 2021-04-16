import React from 'react'
import { TabPane, Card } from 'reactstrap';
import CustomButton from 'components/Custom-Buttons/Button';
import PayrollOvertimeItems from 'components/Tables/PayrollOvertimeItemsTable';

const OvertimeTab = ({ toggleAddModal, ...props }) => {
  return (
    <TabPane {...props}>
      <div className="text-right my-4 clearfix">
        <CustomButton
          className="btn add-btn mr-0 float-right"
          data-toggle="modal"
          data-target="#add_addition"
          onClick={toggleAddModal}
          style={{ padding: '0.625rem 0.25rem' }}
        >
          <i className="fa fa-plus"></i> Add Overtime
        </CustomButton>
      </div>
      <Card className="payroll-table">
        <div className="table-responsive overflow-hidden">
          <PayrollOvertimeItems />
        </div>
      </Card>
    </TabPane>
  );
};

export default OvertimeTab
