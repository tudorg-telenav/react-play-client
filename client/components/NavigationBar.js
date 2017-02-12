import React from 'react';
import Radium from 'radium';

class NavigationBar extends React.Component {

    getStyles() {

        const backgroundColor = '#fff';

        return {

            navStyle: {
                position: "fixed",
                height: "100%",
                width: 60,
                fontSize: 11,
                letterSpacing: 2,
                background: backgroundColor,
                overflow: "hidden",
                top: 0,
                left: 0,
                zIndex: 2
            },

            divStyle: {
                position: "relative",
                top: 255
            },

            ulStyle: {
                position: "relative",
                width: 1000
            }
        };
    }

    render() {

        const styles = this.getStyles();

        return (
            <nav style={styles.navStyle}>
              <div style={styles.divStyle}>
                <ul style={styles.ulStyle}>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Radium(NavigationBar);