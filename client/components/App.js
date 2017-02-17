import React from 'react';

import Menu from './Menu';
import Content from './Content';

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
              <Content page="press"/>
            </div>
        );
    }
}

export default App;

window.PAGES = [
  'careers',
	'press'
];