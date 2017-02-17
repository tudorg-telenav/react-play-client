import React from 'react';

import Menu from './Menu';
import Content from './Content';

class App extends React.Component {

    constructor(props) {

      super(props);

      this.state = { // getInitialState method is deprecated
        page: 'careers'
      };
    };

    getStyles() {

        return {

            div: {
                display: 'flex',
                height: '100%'
            }

        };
    }

    changeMenu(page) {
      this.setState({
        page
      });
    }

    render() {

        const styles = this.getStyles();

        return (
            <div style={styles.div}>
              <Menu onChange={this.changeMenu.bind(this)}/>
              <Content page={this.state.page}/>
            </div>
        );
    }
}

export default App;