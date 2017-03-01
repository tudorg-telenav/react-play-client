import React from 'react';
import {
  Route
} from 'react-router-dom';

import CareerLocations from './Locations';
import CareersList from './List';
import CareerDetails from './Details';

class CareersContainer extends React.Component {

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

  renderCareerLocations(matchProps) {

    return (
      <CareerLocations
        {...matchProps}
        baseUrl={this.props.match.url}
      />
    );
  }

  renderCareerList(matchProps) {

    return (
      <CareersList
        {...matchProps}
        baseUrl={this.props.match.url}
      />
    );
  }

  renderCareerDetails(matchProps) {

    return (
      <CareerDetails
        {...matchProps}
        baseUrl={this.props.match.url}
      />
    );
  }


  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.outerDiv}>

        <Route
          exact
          path={this.props.match.url}
          render={this.renderCareerLocations.bind(this)}
        />
        <Route
          exact
          path={this.props.match.url + '/job=:jobId/from=:locationId'}
          render={this.renderCareerLocations.bind(this)}
        />

        <div style={styles.innerDiv}>
          <Route
            exact
            path={this.props.match.url}
            render={this.renderCareerList.bind(this)}
          />
          <Route
            exact
            path={this.props.match.url + '/job=:jobId/from=:locationId'}
            render={this.renderCareerList.bind(this)}
          />

          <Route
            exact
            path={this.props.match.url}
            render={this.renderCareerDetails.bind(this)}
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

}

export default CareersContainer;