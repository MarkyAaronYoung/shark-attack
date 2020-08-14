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
    const tempLivingStudents = studentData.livingStudents();
    console.error(tempLivingStudents);
    this.setState({ livingStudents: tempLivingStudents });
    const tempDearlyBeloved = studentData.dearlyBeloved();
    console.error(tempDearlyBeloved);
    this.setState({ dearlyBeloved: tempDearlyBeloved });
  }

  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <SharkTank students={this.state.livingStudents}/>
      </div>
    );
  }
}

export default App;
