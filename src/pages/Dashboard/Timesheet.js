import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import LoaderRing from 'components/Loading/Loader';
import PageHeader from 'components/Headers/PageHeader';
import CustomButton from 'components/Custom-Buttons/Button';
import CustomModal from 'components/Modals/CustomModal';
import DepartmentForm from 'components/Forms/Department/DepartmentForm';
import DeleteModal from 'components/Modals/DeleteModal';
import TimesheetTable from 'components/Tables/TimesheetTable';
import TimesheetForm from 'components/Forms/Timesheet/TimesheetForm';

class Timesheet extends Component {
  state = {
    loading: true,
    formData: [],
    timesheet: [],
    addModalOpen: false,
    editModalOpen: false,
    deleteModalOpen: false
  };

  _isMounted = false;
  toggleAddModal = () =>
    this.setState({ addModalOpen: !this.state.addModalOpen });

  toggleEditModal = () => {
    this.setState({ editModalOpen: !this.state.editModalOpen });
  };

  toggleDeleteModal = () =>
    this.setState({ deleteModalOpen: !this.state.deleteModalOpen });

  handleEdit = object =>
    this.setState({
      formData: [object],
      editModalOpen: !this.state.editModalOpen
    });

  mockUrl = 'https://6072ea32e4e0160017ddf097.mockapi.io/api/timesheet';
  url = 'https://localhost:44333/api/timesheet';

  fetchDepartments = async () => {
    try {
      const response = await fetch(this.mockUrl);

      if (response.ok) {
        const data = await response.json();
        this.setState({ loading: false, departments: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this._isMounted = true;
    this.fetchDepartments();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      loading,
      departments,
      addModalOpen,
      editModalOpen,
      deleteModalOpen
    } = this.state;

    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader
            button={
              <CustomButton
                className="btn add-btn mr-0 float-right"
                onClick={this.toggleAddModal}
                style={{ padding: '0.625rem 0.25rem' }}
              >
                <i className="fa fa-plus"></i> Add Today Work
              </CustomButton>
            }
          />
          <Row>
            <Col md={12}>
              {loading ? (
                <LoaderRing />
              ) : (
                <TimesheetTable
                  data={departments}
                  onEdit={this.handleEdit}
                  onDelete={this.toggleDeleteModal}
                />
              )}
            </Col>
          </Row>
          <CustomModal
            label="Add Timesheet"
            isOpen={addModalOpen}
            toggle={this.toggleAddModal}
          >
            <TimesheetForm toggle={this.toggleAddModal} />
          </CustomModal>
          <CustomModal
            label="Edit Timesheet"
            isOpen={editModalOpen}
            toggle={this.toggleEditModal}
          >
            <DepartmentForm
              data={this.state.formData}
              toggle={this.toggleEditModal}
            />
          </CustomModal>
          <DeleteModal
            isOpen={deleteModalOpen}
            toggle={this.toggleDeleteModal}
            label="Delete Department"
          >
            Are you sure you want to delete this department?
          </DeleteModal>
        </div>
      </div>
    );
  }
}

export default Timesheet;

