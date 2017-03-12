import React from 'react';
import axios from 'axios';

import CareersListSection from './ListSection';

class CareersList extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      section: null,
      data: null
    };
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

    let suffix = '';
    if (this.props.match.params.locationId !== 'all') {
      suffix = this.props.match.params.locationId;
    }

    axios.get('http://localhost:3001/careers/' + suffix)
      .then(res => {

        this.setState({
          data: res.data
        });

        if (this.getCareer(this.props.match.params.jobId) === null) {
          let detailData = this.getFirstCareer();
          if (detailData !== null) {
            this.props.replace( // history should skip redirects like these
              this.props.baseUrl +
              '/job=' + detailData.id +
              '/from=' + (suffix === '' ? 'all' : suffix)
            );
          }
        }
      });
  }

  componentWillReceiveProps(nextProps) {

    if (
      this.props.match.params.locationId !== nextProps.match.params.locationId
    ) {
      let suffix = '';
      if (nextProps.match.params.locationId !== 'all') {
        suffix = nextProps.match.params.locationId;
      }
      axios.get('http://localhost:3001/careers/' + suffix)
        .then(res => {

          this.setState({
            data: res.data
          });

          let detailData = this.getFirstCareer();
          if (detailData !== null) {
            let newUrl =
              nextProps.baseUrl +
              '/job=' + detailData.id +
              '/from=' + (suffix === '' ? 'all' : suffix);
            if (newUrl !== nextProps.location.pathname) {
              nextProps.replace( // history should skip redirects like these
                nextProps.baseUrl +
                '/job=' + detailData.id +
                '/from=' + (suffix === '' ? 'all' : suffix)
              );
            }
          }

          this.setState({
            section: this.getFirstNonEmptySection()
          });

        });
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
            this.props.match.params.jobId
          )) {
            isCollapsed = false;
          }
        }

        children.push(
          <CareersListSection
            baseUrl={this.props.baseUrl}
            onSectionToggled={this.toggleSection.bind(this)}
            isCollapsed={isCollapsed}
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

  getFirstNonEmptySection() {

    const data = this.state.data;

    for (var section in data) {
      if (data.hasOwnProperty(section)) {

        const list = data[section];

        if (list.length > 0) {
          return section;
        }
      }
    }
    return null;
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