import React, { Component } from 'react';
import axios from 'axios';
import SingleCampus from './SingleCampus';
import AllCampuses from './AllCampuses';
import Sidebar from './Sidebar';
import Students from './Students';

export default class Main extends Component {
  constructor () {
    super();
    this.state = {
      campuses: [],
      selectedCampus: ''
    }
  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses })
      });
  }

  selectCampus (campusId) {
    axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        selectedCampus: campus
      }));
  }

  deselectCampus () {
    this.setState({ deselectCampus: {} });
  }

  render () {
    return (
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
          {
            this.state.selectedCampus.id ?
            <SingleCampus campus={this.state.selectedCampus} /> :
            <AllCampuses campuses={this.state.campuses} selectCampus={this.state.selectCampus} />
          }
          </div>
        </div>
    );
  }
}
