import React from 'react';
import axios from 'axios';
import {
  matchPath
} from 'react-router-dom';

import CareerLocationItem from './LocationItem';

class CareerLocations extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      data: null
    };
  };

  getStyles() {

    return {
      div: {
        width: '70%'
      }
    };
  }

  componentDidMount() {

    axios.get('http://localhost:3001/careerLocations')
      .then(res => {
        this.setState({
          data: res.data
        });
      });
  }

  render() {

    const styles = this.getStyles();

    const manualMatch = matchPath(
      this.props.location.pathname,
      this.props.baseUrl + '/job=:jobId/from=:locationId'
    );

    let selectedId = null;
    if (manualMatch !== null) {
      selectedId = manualMatch.params.locationId
    }

    var children = [];
    if (this.state.data !== null) {
      for (var i = 0; i < this.state.data.length; i++) {
        children.push(
          <CareerLocationItem
            isSelected={selectedId == this.state.data[i].id} // string and number
            baseUrl={this.props.baseUrl}
            name={this.state.data[i].name}
            id={this.state.data[i].id}
            key={this.state.data[i].id}
          />
        );
      }
    }

    return (
      <div
        style={styles.div}
      >
        <h2>Locations</h2>
        {children}
      </div>
    );
  }

}

export default CareerLocations;