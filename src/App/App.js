import React from 'react';

import studentData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';

import Graveyard from '../components/Graveyard/Graveyard';

import './App.scss';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
  }

  componentDidMount() {
    const tempLivingStudents = studentData.livingStudents();
    this.setState({ livingStudents: tempLivingStudents });
    const tempDearlyBeloved = studentData.dearlyBeloved();
    this.setState({ dearlyBeloved: tempDearlyBeloved });
  }

  eatStudent = () => {
    studentData.followTheLight();
    const tempLivingStudents = studentData.livingStudents();
    this.setState({ livingStudents: tempLivingStudents });
    const tempDearlyBeloved = studentData.dearlyBeloved();
    this.setState({ dearlyBeloved: tempDearlyBeloved });
  }

  render() {
    return (
      <div className="App">
        <SharkTank students={this.state.livingStudents} eatStudent={this.eatStudent}/>
        <Graveyard students={this.state.dearlyBeloved}/>
      </div>
    );
  }
}

export default App;
