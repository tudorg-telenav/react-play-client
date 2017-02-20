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

  componentWillReceiveProps(nextProps) {

    if (nextProps.data !== null && nextProps.selectedCareerId !== null) {
      for (var section in nextProps.data) {
        if (nextProps.data.hasOwnProperty(section)) {

          if (this.sectionContainsItem(section, nextProps.selectedCareerId)) {
            this.setState({
              section
            });
          }
        }
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

  sectionContainsItem(section, itemId) {

    var data = this.props.data[section];

    for (var i = 0; i < data.length; i++) {
      if (itemId === data[i].id) {
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
        children.push(
          <CareersListSection
            onSectionToggled={this.toggleSection.bind(this)}
            isCollapsed={this.state.section !== section}
            selectedCareerId={this.props.selectedCareerId}
            onSectionIntemSelection={this.props.onListItemSelection}
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

};

export default CareersList;