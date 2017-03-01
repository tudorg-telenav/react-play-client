import React from 'react';
import axios from 'axios';
import {
  matchPath
} from 'react-router-dom';

import CareersListSection from './ListSection';

class CareersList extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      section: null,
      data: null,
      jobId: null
    };

    this.location = null;
  };

  getStyles() {

    return {
      div: {
        width: 550,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    };
  }

  componentDidMount() {

    this.updateData(this.props);
  }

  componentWillReceiveProps(nextProps) {

    this.updateData(nextProps);
  }

  updateData(props) {

    const manualMatch = matchPath(
      props.location.pathname,
      props.baseUrl + '/job=:jobId/from=:locationId'
    );

    let suffix = '';
    if (manualMatch !== null && manualMatch.params.locationId !== 'all') {
      suffix = manualMatch.params.locationId;
    }

    if (this.location !== suffix) {

      this.location = suffix;

      axios.get('http://localhost:3001/careers/' + suffix)
        .then(res => {

          this.setState({
            data: res.data
          });

          if (manualMatch === null || this.getCareer(manualMatch.params.jobId) === null) {
            let detailData = this.getFirstCareer();
            if (detailData !== null) {
              props.push(
                props.baseUrl +
                '/job=' + detailData.id +
                '/from=all'
              );
              this.setState({
                jobId: detailData.id
              });
            }
          } else {
            this.setState({
              jobId: manualMatch.params.jobId
            });
          }
        });
    } else {
      if (manualMatch === null) {
        let detailData = this.getFirstCareer();
        if (detailData !== null) {
          props.push(
            props.baseUrl +
            '/job=' + detailData.id +
            '/from=all'
          );
          this.setState({
            jobId: detailData.id
          });
        }
      } else {
        this.setState({
          jobId: manualMatch.params.jobId
        });
      }
    }
  }

  toggleSection(section) {
    if (this.state.section !== section) {
      this.setState({
        section
      });
    }
  }

  sectionContainsItem(sectionData, itemId) {

    for (var i = 0; i < sectionData.length; i++) {
      if (itemId == sectionData[i].id) { // string or number
        return true;
      }
    }
    return false;
  };

  render() {

    var styles = this.getStyles();

    var children = [];
    var i = 0;
    for (var section in this.state.data) {
      if (this.state.data.hasOwnProperty(section)) {

        let isCollapsed = true;
        if (this.state.section === section) {
          isCollapsed = false;
        } else if (this.state.section === null) {
          if (this.sectionContainsItem(
            this.state.data[section],
            this.state.jobId
          )) {
            isCollapsed = false;
          }
        }

        children.push(
          <CareersListSection
            baseUrl={this.props.baseUrl}
            onSectionToggled={this.toggleSection.bind(this)}
            isCollapsed={isCollapsed}
            selectedCareerId={this.state.jobId}
            section={section}
            data={this.state.data[section]}
            key={i}
          />
        );
        i++;
      }
    }

    return (

      <div
        style={styles.div}
      >
        <h2>Careers List</h2>
        {children}
      </div>
    );
  }

  getFirstCareer() {

    const data = this.state.data;

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
    const data = this.state.data;

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
    return null;
  }

}

export default CareersList;