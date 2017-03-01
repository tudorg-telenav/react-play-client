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

    const manualMatch = matchPath(
      this.props.location.pathname,
      this.props.match.url + '/job=:jobId/from=:locationId'
    );

    let suffix = '';
    if (manualMatch !== null && manualMatch.params.locationId !== 'all') {
      suffix = manualMatch.params.locationId;
    }

    axios.get('http://localhost:3001/careers/' + suffix)
      .then(res => {

        this.setState({
          careerListData: res.data
        });

        if (manualMatch === null) {
          let detailData = this.getFirstCareer();
          if (detailData !== null) {
            this.props.push(
              this.props.match.url +
              '/job=' + detailData.id +
              '/from=all'
            );
          }
        }
      });

  }

  renderCareerLocations(matchProps) {

    const manualMatch = matchPath(
      this.props.location.pathname,
      this.props.match.url + '/job=:jobId/from=:locationId'
    );

    return (
      <CareerLocations
        {...matchProps}
        baseUrl={this.props.match.url}
        selectedLocationId={manualMatch.params.locationId}
      />
    );
  }

  renderCareerList(matchProps) {

    const manualMatch = matchPath(
      this.props.location.pathname,
      this.props.match.url + '/job=:jobId/from=:locationId'
    );

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

    const manualMatch = matchPath(
      this.props.location.pathname,
      this.props.match.url + '/job=:jobId/from=:locationId'
    );

    return (
      <CareerDetails
        {...matchProps}
        jobId={manualMatch.params.jobId}
      />
    );
  }


  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.outerDiv}>

        <Route
          exact
          path={this.props.match.url + '/job=:jobId/from=:locationId'}
          render={this.renderCareerLocations.bind(this)}
        />

        <div style={styles.innerDiv}>
          <Route
            exact
            path={this.props.match.url + '/job=:jobId/from=:locationId'}
            render={this.renderCareerList.bind(this)}
          />

          <Route
            exact
            path={this.props.match.url + '/job=:jobId/from=:locationId'}
            render={this.renderCareerDetails.bind(this)}
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