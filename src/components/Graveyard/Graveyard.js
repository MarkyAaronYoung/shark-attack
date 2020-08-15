import React from 'react';

import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import GraveStone from '../GraveStone/GraveStone';

import './Graveyard.scss';

class SharkTank extends React.Component {
  static propTypes = {
    graveStone: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => (
      <GraveStone key={student.id} student={student}/>
    ));

    return (
      <div>
       <h2>Graveyard</h2>
       <div className="card-columns">
       { studentCards }
       </div>
      </div>
    );
  }
}

export default SharkTank;
