import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import LoaderRing from 'components/Loading/Loader';
import PageHeader from 'components/Headers/PageHeader';
import CustomButton from 'components/Custom-Buttons/Button';
import DepartmentsTable from 'components/Tables/DepartmentsTable';
import CustomModal from 'components/Modals/CustomModal';
import DepartmentForm from 'components/Forms/Department/DepartmentForm';
import DeleteModal from 'components/Modals/DeleteModal';

class Departments extends Component {
  state = {
    loading: true,
    formData: [],
    departments: [],
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

  mockUrl = 'https://604529e6c0194f00170bca44.mockapi.io/api/departments';
  url = 'https://localhost:44333/api/departments';

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
                <i className="fa fa-plus"></i> Add Department
              </CustomButton>
            }
          />
          <Row>
            <Col md={12}>
              {loading ? (
                <LoaderRing />
              ) : (
                <DepartmentsTable
                  data={departments}
                  onEdit={this.handleEdit}
                  onDelete={this.toggleDeleteModal}
                />
              )}
            </Col>
          </Row>
          <CustomModal
            label="Add Department"
            isOpen={addModalOpen}
            toggle={this.toggleAddModal}
          >
            <DepartmentForm toggle={this.toggleAddModal} />
          </CustomModal>
          <CustomModal
            label="Edit Department"
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

export default Departments;
