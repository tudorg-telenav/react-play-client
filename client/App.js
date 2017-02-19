import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './menu/Menu';
import PressContainer from './press/Press';
import CareersContainer from './careers/Careers';

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

    var content = null;
    switch (this.state.page) {
      case 'careers':
        content = (
          <CareersContainer />
        );
        break;
      case 'press':
        content = (
          <PressContainer />
        );
        break;
    }

    return (
      <div style={styles.div}>
        <Menu onChange={this.changeMenu.bind(this)}/>
        {content}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);