import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeStyles from './home.module.scss';

export default class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1 className={HomeStyles.heading}>Hello, world!</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
