import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import { Container, Row, Col } from 'reactstrap';

// core components
import { chartOptions, parseOptions } from 'variables/charts.js';

import Header from 'components/Dashboard/Header';
import SummaryCards from 'components/Dashboard/SummaryCards';
import EmployeeCard from 'components/Dashboard/EmployeeCard';
import PerformanceChart from 'components/Dashboard/PerformanceChart';
import RevenueChart from 'components/Dashboard/RevenueChart';

const Index = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState('data1');
  const [employeeCount, setEmployeeCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);
  const urls = [
    'https://localhost:44333/api/Employees/count',
    'https://localhost:44333/api/Departments/count'
  ];

  if (window.Chart) parseOptions(Chart, chartOptions());

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data('data' + index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all(
          urls.map(url => fetch(url).then(res => res.json()))
        );
        setEmployeeCount(response[0]);
        setDepartmentCount(response[1]);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
  });

  return (
    <>
      <Header employeeCount={employeeCount} departmentCount={departmentCount} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <RevenueChart
              activeNav={activeNav}
              chartExample1Data={chartExample1Data}
              toggleNavs={toggleNavs}
            />
          </Col>
          <Col xl="4">
            <PerformanceChart />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <SummaryCards overallEmployees={employeeCount} />
          </Col>
        </Row>

        {/* Employee card with table */}
        <Row className="mt-5 justify-content-center">
          <Col className="mb-5 mb-xl-0">
            <EmployeeCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
