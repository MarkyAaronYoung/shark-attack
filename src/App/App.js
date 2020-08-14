import React from 'react';

import studentData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';

import './App.scss';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });
    const dearlyBeloved = studentData.dearlyBeloved();
    this.setState({ dearlyBeloved });
  }

  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <SharkTank />
      </div>
    );
  }
}

export default App;
