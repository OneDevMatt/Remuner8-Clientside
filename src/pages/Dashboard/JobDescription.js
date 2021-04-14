import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import LoaderRing from 'components/Loading/Loader';
import PageHeader from 'components/Headers/PageHeader';
import CustomButton from 'components/Custom-Buttons/Button';
import JobDescriptionTable from 'components/Tables/JobDescriptionTable';
import CustomModal from 'components/Modals/CustomModal';
import JobsForm from 'components/Forms/Jobs/JobsForm';
import DeleteModal from 'components/Modals/DeleteModal';

export default class JobDescription extends Component {
  state = {
    loading: true,
    formData: [],
    jobs: [],
    addModalOpen: false,
    editModalOpen: false,
    deleteModalOpen: false
  };

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

  mockUrl = 'https://604529e6c0194f00170bca44.mockapi.io/api/jobs';
  url = 'https://localhost:44333/api/jobdescriptions';

  fetchJobs = async () => {
    try {
      const res = await fetch(this.mockUrl);

      if (res.ok) {
        const data = await res.json();
        this.setState({ loading: false, jobs: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchJobs();
  }

  render() {
    const {
      loading,
      jobs,
      addModalOpen,
      editModalOpen,
      deleteModalOpen
    } = this.state;

    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader
           breadcrumb="Job Descriptions"
            button={
              <CustomButton
                className="btn add-btn mr-0 float-right"
                onClick={this.toggleAddModal}
                style={{ padding: '0.625rem 0.7rem' }}
              >
                <i className="fa fa-plus"></i> Add Job Description
              </CustomButton>
            }
          />
          <Row>
            <Col md={12}>
              {loading ? (
                <LoaderRing />
              ) : (
                <JobDescriptionTable
                  data={jobs}
                  onEdit={this.handleEdit}
                  onDelete={this.toggleDeleteModal}
                />
              )}
            </Col>
          </Row>

          <CustomModal
            label="Add Job Description"
            isOpen={addModalOpen}
            toggle={this.toggleAddModal}
          >
            <JobsForm toggle={this.toggleAddModal} />
          </CustomModal>

          <CustomModal
            label="Edit Job Description"
            isOpen={editModalOpen}
            toggle={this.toggleEditModal}
          >
            <JobsForm
              data={this.state.formData}
              toggle={this.toggleEditModal}
            />
          </CustomModal>
          
          <DeleteModal
            isOpen={deleteModalOpen}
            toggle={this.toggleDeleteModal}
            label="Delete Job Description"
          >
            Are you sure you want to delete this job description?
          </DeleteModal>
        </div>
      </div>
    );
  }
}
