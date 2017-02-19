import React from 'react';
import CareersListSectionItem from './ListSectionItem';

class CareersListSection extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      isCollapsed: true
    };
  };

  getStyles() {

    return {

      div: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column'
      }

    };
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCareerId !== null) {
      if (this.containsItem(nextProps.selectedCareerId)) {
        this.setState({
          isCollapsed: false
        });
      } else {
        this.setState({
          isCollapsed: true
        });
      }
    }
  }

  containsItem(itemId) {

    for (var i = 0; i < this.props.data.length; i++) {
      if (itemId === this.props.data[i].id) {
        return true;
      }
    }
    return false;
  };

  handleClick() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };

  render() {

    var children = [];

    if (!this.state.isCollapsed) {
      if (this.props.data !== null) {
        for (var i = 0; i < this.props.data.length; i++) {
          children.push(
            <CareersListSectionItem
              isSelected={this.props.selectedCareerId === this.props.data[i].id}
              onSelect={this.props.onSectionIntemSelection}
              title={this.props.data[i].title}
              key={i}
              id={this.props.data[i].id}
            />
          );
        }
      }
    }

    const styles = this.getStyles();

    return (
      <div
        style={styles.div}
      >
        <span>
          <strong>
            {this.props.section}
          </strong>
          <button onClick={this.handleClick.bind(this)}>
            {this.state.isCollapsed ? '+' : '-'}
          </button>
        </span>
        {children}
      </div>
    );
  }

};

export default CareersListSection;