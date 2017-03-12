import React from 'react';
import Radium from 'radium';
import {
  Link
} from 'react-router-dom';

@Radium
class MenuItem extends React.Component {

  getStyles() {

    return {
      button: {
        width: 80,
        color: this.props.isSelected ? 'red' : 'black',
        fontWeight: this.props.isSelected ? 'bold' : 'normal'
      }
    };
  }

  render() {

    const styles = this.getStyles();

    return (
      <Link to={'/' + this.props.item}>
        <button
          style={styles.button}
          disabled={this.props.isSelected}
        >
          {this.props.item}
        </button>
      </Link>
    );
  }
}

export default MenuItem;