import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Header from 'components/Payroll/Header';

import AddSalaryModal from 'components/Payroll/AddSalaryModal';
import InputRow from 'components/Payroll/InputRow';
import LoaderRing from 'components/Loading/Loader';
import PageHeader from 'components/Headers/PageHeader';
import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';
import 'assets/css/page.styles.css';

class Payroll extends Component {
  state = {
    loading: true,
    formData: [],
    employees: [],
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
  mockUrl = 'https://6072ea32e4e0160017ddf097.mockapi.io/api/employeepayroll';
  url = 'https://localhost:44333/api/timesheet';

  fetchEmployees = async () => {
    try {
      const response = await fetch(this.mockUrl);

      if (response.ok) {
        const data = await response.json();
        this.setState({ loading: false, employees: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  render() {
    const {
      loading,
      employees,
      addModalOpen,
      editModalOpen,
      deleteModalOpen
    } = this.state;

    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Header toggleModal={this.toggleAddModal} />
          <InputRow />
        </div>
        <CustomModal
          label="Add Salary"
          isOpen={addModalOpen}
          toggle={this.toggleAddModal}
        >
          {/* <TimesheetForm toggle={this.toggleAddModal} /> */}
        </CustomModal>
        <CustomModal
          label="Edit Timesheet"
          isOpen={editModalOpen}
          toggle={this.toggleEditModal}
        >
          {/* <DepartmentForm
            data={this.state.formData}
            toggle={this.toggleEditModal}
          /> */}
        </CustomModal>
        <DeleteModal
          isOpen={deleteModalOpen}
          toggle={this.toggleDeleteModal}
          label="Delete Salary"
        >
          Are you sure you want to delete this record?
        </DeleteModal>
      </div>
    );
  }
}
 
export default Payroll;

// const Payroll = () => {
//   const [modalOpen, setModalState] = useState(false);
//   const toggleModal = () => setModalState(!modalOpen);

//   return (
//     <div className="page-wrapper">
//       <div className="content container-fluid">
//         <Header toggleModal={toggleModal} />
//         <InputRow />
//       </div>
//       <AddSalaryModal isOpen={modalOpen} toggleModal={toggleModal} />
//       <CustomModal
//         label="Add Timesheet"
//         isOpen={addModalOpen}
//         toggle={this.toggleAddModal}
//       >
//         <TimesheetForm toggle={this.toggleAddModal} />
//       </CustomModal>
//       <CustomModal
//         label="Edit Timesheet"
//         isOpen={editModalOpen}
//         toggle={this.toggleEditModal}
//       >
//         <DepartmentForm
//           data={this.state.formData}
//           toggle={this.toggleEditModal}
//         />
//       </CustomModal>
//       <DeleteModal
//         isOpen={deleteModalOpen}
//         toggle={this.toggleDeleteModal}
//         label="Delete Department"
//       >
//         Are you sure you want to delete this department?
//       </DeleteModal>
//     </div>
//   );
// };
