import React from 'react';
import axios from 'axios';

import CareerLocations from './CareerLocations';

class CareersContainer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      selectedLocation: null,
      locationData: null,
      detailData: null,
      careerTreeData: null
    };
  };

  componentDidMount() {

    axios.get('http://localhost:3001/careerLocations')
      .then(res => {
        this.setState({
          locationData: res.data
        });
      });

    axios.get('http://localhost:3001/careers/')
      .then(res => {
        this.setState({
          careerTreeData: res.data
        });
      });
  }

  onSelectLocationItem(locationId) {

    axios.get('http://localhost:3001/careers/' + locationId)
      .then(res => {
        this.setState({
          careerTreeData: res.data,
          selectedLocation: locationId
        });
      });
  }

  render() {
    return (
      <div>
        <CareerLocations onSelectItem={this.onSelectLocationItem.bind(this)} data={this.state.locationData}/>
      </div>
    );
  }

}

export default CareersContainer;