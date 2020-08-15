import React from 'react';

import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    eatStudent: PropTypes.func,
  }

  followTheLightEvent = (e) => {
    e.preventDefault();
    const { eatStudent } = this.props;
    eatStudent();
  };

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => (
      <LiveStudent key={student.id} student={student}/>
    ));

    return (
      <div>
       <h2>Shark Tank</h2>
       <button className="btn btn-danger" onClick={this.followTheLightEvent}><i className="fas fa-skull-crossbones">ShArK aTtAcK</i></button>
       <div className="card-columns">
       { studentCards }
       </div>
      </div>
    );
  }
}

export default SharkTank;
