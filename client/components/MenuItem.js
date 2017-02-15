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

    render() {

        const styles = this.getStyles();

        return (
            <button style={styles.span}>
                {this.props.item}
            </button>
        );
    }
}

export default MenuItem;