import React from 'react';
import Radium from 'radium';

class NavigationBar extends React.Component {

    getItems() {
        return ['careers', 'press releases'];
    }

    getStyles() {

        const backgroundColor = '#fff';

        return {

            nav: {
                position: 'fixed',
                height: '100%',
                width: 60,
                fontSize: 11,
                letterSpacing: 2,
                background: backgroundColor,
                overflow: 'hidden',
                top: 0,
                left: 0,
                zIndex: 2
            },

            div: {
                position: 'relative',
                top: 255
            },

            ul: {
                position: 'relative',
                width: 1000
            },

            li: {

            },

            a: {

            }

        };
    }

    render() {

        const styles = this.getStyles();
        const items = this.getItems();

        let anchors = [];
        for (var i = 0; i < items.length; i++) {
            anchors.push((
                <li style={styles.li}>
                    <a style={styles.a} key={i}>{items[i]}</a>
                </li>
            ));
        }

        return (
            <nav style={styles.nav}>
              <div style={styles.div}>
                <ul style={styles.ul}>
                    {anchors}
                </ul>
              </div>
            </nav>
        );
    }
}

export default Radium(NavigationBar);