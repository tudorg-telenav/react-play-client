import React from 'react';
import Radium from 'radium';

import MenuItem from './MenuItem';

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

        let anchors = [];
        for (var i = 0; i < PAGES.length; i++) {
            anchors.push((
                <MenuItem item={PAGES[i]} />
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