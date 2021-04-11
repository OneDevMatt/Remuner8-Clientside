import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DummyImage from 'assets/img/theme/team-1-800x800.jpg';

const EmployeeAvatar = ({ employee }) => {
  return (
    <TableAvatar>
      <Avatar to="/admin/employees/profile">
        <Image src={employee.avatar || DummyImage} />
      </Avatar>
      <AvatarLink to="/admin/employees/profile">
        {employee.name || employee.employee}
        <Job>{employee.name || employee.job}</Job>
      </AvatarLink>
    </TableAvatar>
  );
};

EmployeeAvatar.defaultProps = {
  name: 'John Doe',
  avatar: DummyImage
};

export default EmployeeAvatar;

const TableAvatar = styled.h2`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;

const Avatar = styled(Link)`
  border-radius: 50%;
  display: inline-block;
  font-weight: 500;
  height: auto;
  line-height: 38px;
  margin: 0 10px 0 0;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  width: auto;
  position: relative;
  white-space: nowrap;
`;

export const AvatarLink = styled(Link)`
  color: #1f1f1f;
  display: inline-grid;
  margin-bottom: 0;
`;

const Image = styled.img`
  border-radius: 50%;
  display: block;
  overflow: hidden;
  height: 40px;
`;

const Job = styled.span`
  color: #525f7f;
  font-size: 12px;
  margin-top: 3px;
`;
