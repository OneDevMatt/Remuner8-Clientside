import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from '../components/Forms/LoginForm';
import Styles from './forms.module.scss';

const Login = () => {
  return (
    <div className={Styles.background}>
      <Container className="d-flex flex-column justify-content-center h-100">
        <Row className={`justify-content-center  ${Styles.formBody}`}>
          <Col xs={10} sm={9} md={7} lg={5} xl={5}>
            <div className={Styles.rounded}>
              <div className="card-body">
                <div className="mb-4">
                  <div className="text-center">
                    <Link to="/">
                      <img
                        src="/images/default.png"
                        alt="Remuner8"
                        className="img-fluid"
                        width="130"
                      />
                    </Link>
                  </div>
                  <Row className="justify-content-center">
                    <Col xs={11} sm={10} md={10} lg={10}>
                      <LoginForm />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
