import React from 'react';
import Radium from 'radium';

@Radium
class MenuItem extends React.Component {

  getStyles() {

    return {

      button: {
        textAlign: 'center'
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
        style={styles.span}
      >
        {this.props.item}
      </button>
    );
  }
}

export default MenuItem;