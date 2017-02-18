import React from 'react';
import axios from 'axios';

import CareerLocations from './CareerLocations';

class CareersContainer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      selectedLocation: null,
      careerData: null,
      detailData: null
    };
  };

  componentDidMount() {

    axios.get('http://localhost:3001/careerLocations')
      .then(res => {
        this.setState({
          careerData: res.data
        });
      });
  }

  changeSelectedLocation(id) {

    axios.get('http://localhost:3001/career/' + location)
      .then(res => {
        this.setState({
          detailData: res.data,
          selectedPress: id
        });
      });
  }

  render() {
    return (
      <CareerLocations onPressClick={this.changeSelectedLocation.bind(this)} data={this.state.careerData}/>
    );
  }

}

export default CareersContainer;