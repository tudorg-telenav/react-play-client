import React from 'react';
import Radium from 'radium';

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

  handleClick(e) {
    var item = e.target.innerHTML;
    this.props.onChange(item);
  }

  render() {

    const styles = this.getStyles();

    return (
      <button
        onClick={this.handleClick.bind(this)}
        style={styles.button}
      >
        {this.props.item}
      </button>
    );
  }
}

export default MenuItem;