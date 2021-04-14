import React from 'react';

const Earnings = () => (
  <div className="col-sm-12 mb-sm-4">
    <div>
      <h4 className="m-b-10">
        <strong>Earnings</strong>
      </h4>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>
              <strong>Basic Salary</strong>
              <span className="float-right">N6500</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Housing Allowance</strong>
              <span className="float-right">N55</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Transport Allowance</strong>
              <span className="float-right">N55</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Other Allowances</strong>
              <span className="float-right">N55</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Total Earnings</strong>
              <span className="float-right">
                <strong>N55</strong>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Earnings;
