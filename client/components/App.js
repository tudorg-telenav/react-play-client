import React from 'react';

import Menu from './Menu';

class App extends React.Component {

    getStyles() {

        return {

            div: {
                display: 'flex',
                height: '100%'
            }

        };
    }

    render() {

        const styles = this.getStyles();

        return (
            <div style={styles.div}>
              <Menu />
            </div>
        );
    }
}

export default App;