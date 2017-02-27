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
        >
          {this.props.item}
        </button>
      </Link>
    );
  }
}

export default MenuItem;