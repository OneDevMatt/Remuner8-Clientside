import React from 'react';

const Deductions = () => (
  <div className="col-sm-12">
    <div>
      <h4 className="m-b-10">
        <strong>Deductions</strong>
      </h4>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>
              <strong>Tax Deducted at Source (T.D.S.)</strong>
              <span className="float-right">N0</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Pension</strong>
              <span className="float-right">N0</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Loan</strong> <span className="float-right">N300</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Total Deductions</strong>
              <span className="float-right">
                <strong>N59698</strong>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default Deductions;
