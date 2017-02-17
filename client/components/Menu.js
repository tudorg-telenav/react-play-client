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
        const pages = ['careers', 'press'];

        let anchors = [];
        for (var i = 0; i < pages.length; i++) {
            anchors.push((
                <MenuItem key={i} item={pages[i]} onChange={this.props.onChange} />
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