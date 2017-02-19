import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './menu/Menu';
import Home from './home/Home';
import PressContainer from './press/Press';
import CareersContainer from './careers/Careers';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = { // getInitialState method is deprecated
      page: 'home'
    };
  };

  getStyles() {

    return {

      div: {
        display: 'flex'
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
      case 'home':
        content = (
          <Home onGoToCareers={this.changeMenu.bind(this)}/>
        );
        break;
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
        <Menu
          selectedItem={this.state.page}
          onChange={this.changeMenu.bind(this)}
        />
        {content}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);