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
        flexDirection: 'column',
        alignItems: 'center'
      }

    };
  }

  render() {

    const styles = this.getStyles();
    const pages = ['home', 'careers', 'press'];

    let anchors = [];
    for (var i = 0; i < pages.length; i++) {

      let isSelected = false;

      if (!this.props.match.params.hasOwnProperty('page') && i === 0) {
        isSelected = true;
      } else if (this.props.match.params.page === pages[i]) {
        isSelected = true;
      }

      anchors.push((
        <MenuItem
          isSelected={isSelected}
          key={i}
          item={pages[i]}
        />
      ));
    }

    return (
      <div
        style={styles.div}
      >
        <h2>Menu</h2>
        {anchors}
      </div>
    );
  }
}

export default Menu;