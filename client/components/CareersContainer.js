import React from 'react';
import axios from 'axios';

import Careers from './Careers';
import CareerDetails from './CareerDetails';

class CareersContainer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      selectedCareer: null,
      detailData: null,
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

  changeSelectedCareer(id) {

    axios.get('http://localhost:3001/careers/' + id)
      .then(res => {
        this.setState({
          detailData: res.data,
          selectedCareer: id
        });
      });
  }

  render() {
    if (this.state.selectedCareer !== null) {
      return (
        <CareerDetails data={this.state.detailData}/>
      );
    } else {
      return (
        <Careers onCareerClick={this.changeSelectedCareer.bind(this)} data={this.state.data}/>
      );
    }
  }

}

export default CareersContainer;