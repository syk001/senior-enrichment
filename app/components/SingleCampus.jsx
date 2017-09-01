import React, { Component } from 'react';
import Students from './Students';

export default class SingleCampus extends Component {

  render () {
    const campus = this.props.campus;

    return (
      <div className="campus">
        <div>
          <h3>{ campus.name }</h3>
          <img src={ campus.imageUrl } className="img-thumbnail" />
        </div>
        <Students students={campus.students} />
      </div>
    )
  }

}
