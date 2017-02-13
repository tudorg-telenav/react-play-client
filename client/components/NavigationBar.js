import React from 'react';
import Radium from 'radium';

@Radium
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
                top: 50
            },

            ul: {
                position: 'relative',
                width: 1000
            },

            li: {
              marginRight: 30
            },

            a: {
              display: 'block',
              padding: '10px 0px 80px 0px',
              color: '#337ab7',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(170,201,229,0)',
              WebkitTransition: '.25s linear',
                transform: 'rotate(90deg)',
            transformOrigin: 'left top 0'
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

export default NavigationBar;