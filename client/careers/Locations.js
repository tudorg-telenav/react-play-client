import React from 'react';
import axios from 'axios';

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

    var children = [];
    if (this.state.data !== null) {
      for (var i = 0; i < this.state.data.length; i++) {
        children.push(
          <CareerLocationItem
            isSelected={this.props.selectedLocationId == this.state.data[i].id} // string and number
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
        <h2>Career Locations</h2>
        {children}
      </div>
    );
  }

}

export default CareerLocations;