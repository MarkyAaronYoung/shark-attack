import React from 'react';

// import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card bg-dark text-light border-0">
        <img className="card-img-top" src="https://media.wired.com/photos/5926a817cefba457b079aba4/master/w_1164,c_limit/GravestoneTA-186755520.jpg" alt="one specific tombstone" />
        <div className="card-img-overlay">
          <div className="box d-flex flex-column justify-content-center">
            <p className="text-uppercase">{student.firstName} {student.lastName}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GraveStone;
