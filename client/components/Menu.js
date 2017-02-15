import React from 'react';
import Radium from 'radium';

import MenuItem from './MenuItem';

@Radium
class Menu extends React.Component {

    getItems() {
        return ['careers', 'press releases'];
    }

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
        const items = this.getItems();

        let anchors = [];
        for (var i = 0; i < items.length; i++) {
            anchors.push((
                <MenuItem item={items[i]} />
            ));
        }

        return (
            <div style={styles.div}>
                {anchors}
            </div>
        );
    }
}

export default Menu;