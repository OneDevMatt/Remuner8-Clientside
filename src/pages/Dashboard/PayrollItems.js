import React, { Component } from 'react';
import { Row, Col, TabContent } from 'reactstrap';

import PageHeader from 'components/Headers/PageHeader';
import MenuTab from 'components/Tabs/MenuTab';
import AdditionsTab from 'components/Tabs/AdditionsTab';
import OvertimeTab from 'components/Tabs/OvertimeTab';
import DeductionsTab from 'components/Tabs/DeductionsTab';
import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';

class PayrollItems extends Component {
  state = {
    loading: true,
    payrollItems: null,
    activeTab: '1'
  };

  toggleTab = tab => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
  };

  mockUrl = 'https://6077e2b9e7f4f50017183301.mockapi.io/api/payrollitems';
  url = 'https://localhost:44333/api/payrollItems';

  fetchPayrollItems = async () => {
    try {
      const response = await fetch(this.mockUrl);

      if (response.ok) {
        const data = await response.json();
        const { 0: items } = data;
        this.setState({ loading: false, payrollItems: items });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchPayrollItems();
  }

  render() {
    const {
      payrollItems,
      activeTab,
      addModalOpen,
      editModalOpen,
      deleteModalOpen
    } = this.state;

    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader breadcrumb="Payroll Items" />
          <div className="page-menu">
            <Row>
              <Col sm={12}>
                <MenuTab activeTab={activeTab} toggle={this.toggleTab} />
              </Col>
            </Row>
          </div>

          <TabContent activeTab={activeTab}>
            <AdditionsTab
              tabId="1"
              id="tab_additions"
              items={payrollItems && payrollItems.additions}
            />
            <OvertimeTab
              tabId="2"
              id="tab_overtime"
              items={payrollItems && payrollItems.overtime}
            />
            <DeductionsTab
              tabId="3"
              id="tab_deductions"
              items={payrollItems && payrollItems.deductions}
            />
          </TabContent>

          <CustomModal
            label="Add Addition"
            isOpen={addModalOpen}
            toggle={this.toggleAddModal}
          >
            {/* <OvertimeForm toggle={this.toggleAddModal} /> */}
          </CustomModal>
          <CustomModal
            label="Edit Addition"
            isOpen={editModalOpen}
            toggle={this.toggleEditModal}
          >
            {/* <OvertimeForm data={this.state.formData} /> */}
          </CustomModal>
          <DeleteModal
            isOpen={deleteModalOpen}
            toggle={this.toggleDeleteModal}
            label="Delete Addition"
          >
            Are you sure you want to delete this item?
          </DeleteModal>
        </div>
      </div>
    );
  }
}

export default PayrollItems;
