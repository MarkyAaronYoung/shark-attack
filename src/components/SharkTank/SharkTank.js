import React from 'react';

import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudent: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => (
      <LiveStudent key={student.id} student={student}/>
    ));

    return (
      <div>
       <h2>Shark Tank</h2>
       <div className="card-columns">
       { studentCards }
       </div>
      </div>
    );
  }
}

export default SharkTank;
