import React from 'react';
import axios from 'axios';

import CareerLocations from './Locations';
import CareersList from './List';
import CareerDetails from './Details';

class CareersContainer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      selectedLocation: null,
      locationData: null,
      detailData: null,
      careerListData: null,
      selectedCareerId: null
    };
  };

  getStyles() {

    return {

      outerDiv: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      innerDiv: {
        width: '100%',
        display: 'flex'
      }

    };
  }

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
          careerListData: res.data
        });

        var detailData = this.getFirstCareer();
        this.setState({
          detailData,
          selectedCareerId: detailData.id
        });
      });

  }

  selectLocationItem(selectedLocationId) {

    if (selectedLocationId === this.state.selectedLocationId) {
      axios.get('http://localhost:3001/careers/')
        .then(res => {
          this.setState({
            careerListData: res.data,
            selectedLocationId: null
          });
        });
    } else {
      axios.get('http://localhost:3001/careers/' + selectedLocationId)
        .then(res => {
          this.setState({
            careerListData: res.data,
            selectedLocationId
          });
          var detailData = this.getFirstCareer();
          this.setState({
            detailData,
            selectedCareerId: detailData.id
          });
        });
    }
  }

  selectListItem(selectedCareerId) {

    var detailData = this.getCareer(selectedCareerId);
    this.setState({
      detailData,
      selectedCareerId
    });
  }

  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.outerDiv}>
        <CareerLocations
          selectedLocationId={this.state.selectedLocationId}
          onSelectItem={this.selectLocationItem.bind(this)}
          data={this.state.locationData}
        />
        <div style={styles.innerDiv}>
          <CareersList
            selectedCareerId={this.state.selectedCareerId}
            onListItemSelection={this.selectListItem.bind(this)}
            data={this.state.careerListData}
          />
          <CareerDetails
            data={this.state.detailData}
          />
        </div>
      </div>
    );
  }

  getFirstCareer() {

    const data = this.state.careerListData;

    for (var section in data) {
      if (data.hasOwnProperty(section)) {

        const list = data[section];

        if (list.length > 0) {
          return list[0];
        }
      }
    }
  }

  getCareer(id) {
    const data = this.state.careerListData;

    for (var section in data) {
      if (data.hasOwnProperty(section)) {

        const list = data[section];

        for (var i = 0; i < list.length; i++) {
          if (id === list[i].id) {
            return list[i];
          }
        }
      }
    }
  }

}

export default CareersContainer;