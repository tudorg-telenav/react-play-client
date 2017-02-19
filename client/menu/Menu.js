import React from 'react';
import Radium from 'radium';

import MenuItem from './Item';

@Radium
class Menu extends React.Component {

  getStyles() {

    return {

      div: {
        width: 100,
        display: 'flex',
        flexDirection: 'column'
      }

    };
  }

  render() {

    const styles = this.getStyles();
    const pages = ['home', 'careers', 'press'];

    let anchors = [];
    for (var i = 0; i < pages.length; i++) {
      anchors.push((
        <MenuItem
          isSelected={this.props.selectedItem === pages[i]}
          key={i}
          item={pages[i]}
          onChange={this.props.onChange}
        />
      ));
    }

    return (
      <div
        style={styles.div}
      >
        {anchors}
      </div>
    );
  }
}

export default Menu;