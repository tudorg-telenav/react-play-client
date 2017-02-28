import React from 'react';
import CareersListSection from './ListSection';

class CareersList extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      section: null
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
    for (var section in this.props.data) {
      if (this.props.data.hasOwnProperty(section)) {

        let isCollapsed = true;
        if (this.state.section === section) {
          isCollapsed = false;
        } else if (this.state.section === null) {
          if (this.sectionContainsItem(
            this.props.data[section],
            this.props.selectedCareerId
          )) {
            isCollapsed = false;
          }
        }

        children.push(
          <CareersListSection
            baseUrl={this.props.baseUrl}
            onSectionToggled={this.toggleSection.bind(this)}
            isCollapsed={isCollapsed}
            selectedCareerId={this.props.selectedCareerId}
            section={section}
            data={this.props.data[section]}
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

}

export default CareersList;