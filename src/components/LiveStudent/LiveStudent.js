/* eslint-disable max-len */
import React from 'react';

// import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card bg-dark text-light border-0">
          <img className="card-img-top" src="https://images.theconversation.com/files/299379/original/file-20191030-154716-1wc4d64.jpg?ixlib=rb-1.1.0&rect=0%2C12%2C2048%2C1023&q=45&auto=format&w=1356&h=668&fit=crop" alt="one specific fish" />
        <div className="card-img-overlay">
              <h5 className="card-title text-uppercase">{student.firstName} {student.lastName}</h5>
            </div>
          </div>
    );
  }
}

export default LiveStudent;
