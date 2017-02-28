import React from 'react';
import axios from 'axios';
import {
  Route,
  matchPath
} from 'react-router-dom';

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
      careerListData: null
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

        const manualMatch = matchPath(this.props.location.pathname, this.props.match.url + '/job=:jobId');

        if (manualMatch === null) {
          let detailData = this.getFirstCareer();
          if (detailData !== null) {
            this.setState({
              detailData
            });
            this.props.push(this.props.match.url + '/job=' + detailData.id);
          }
        } else {
          let detailData = this.getCareer(manualMatch.params.jobId);
          if (detailData !== null) {
            this.setState({
              detailData
            });
          }
        }
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

          let detailData = this.getFirstCareer();
          if (detailData !== null) {
            this.setState({
              detailData
            });
            this.props.push(this.props.match.url + '/job=' + detailData.id);
          }
        });
    }
  }

  renderCareerLocations(matchProps) {
    return (
      <CareerLocations
        {...matchProps}
        selectedLocationId={this.state.selectedLocationId}
        onSelectItem={this.selectLocationItem.bind(this)}
        data={this.state.locationData}
      />
    );
  }

  renderCareerList(matchProps) {

    const manualMatch = matchPath(this.props.location.pathname, this.props.match.url + '/job=:jobId');

    return (
      <CareersList
        {...matchProps}
        baseUrl={this.props.match.url}
        selectedCareerId={manualMatch.params.jobId}
        data={this.state.careerListData}
      />
    );
  }

  renderCareerDetails(matchProps) {
    return (
      <CareerDetails
        {...matchProps}
        data={this.state.detailData}
      />
    );
  }


  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.outerDiv}>

        <Route exact path={this.props.match.url + '/job=:jobId'} render={this.renderCareerLocations.bind(this)} />

        <div style={styles.innerDiv}>
          <Route exact path={this.props.match.url + '/job=:jobId'} render={this.renderCareerList.bind(this)} />

          <Route exact path={this.props.match.url + '/job=:jobId'} render={this.renderCareerDetails.bind(this)} />
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
    return null;
  }

  getCareer(id) {
    const data = this.state.careerListData;

    for (var section in data) {
      if (data.hasOwnProperty(section)) {

        const list = data[section];

        for (var i = 0; i < list.length; i++) {
          if (id == list[i].id) { // string or number
            return list[i];
          }
        }
      }
    }
  }

}

export default CareersContainer;