import React from 'react';
import axios from 'axios';

import Careers from './Careers';

class CareersContainer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      details: false,
      data: null
    };
  };

  componentDidMount() {

    axios.get('http://localhost:3001/careers')
      .then(res => {
        this.setState({
          data: res.data
        });
      });
  }

  render() {
    if (this.state.details) {
      return (
        <Careers data={this.state.data}/>
      );
    } else {
      return (
        <Careers data={this.state.data}/>
      );
    }
  }

}

export default CareersContainer;