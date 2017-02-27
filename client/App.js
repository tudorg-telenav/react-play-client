import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Menu from './menu/Menu';
import Home from './home/Home';
import PressContainer from './press/Press';
import CareersContainer from './careers/Careers';

class App extends React.Component {

  getStyles() {

    return {

      div: {
        display: 'flex'
      }

    };
  }

  render() {

    const styles = this.getStyles();

    return (
      <Router hashType="noslash">
        <div style={styles.div}>

          <Route path="/:page" component={Menu} />

          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/careers" component={CareersContainer} />
          <Route path="/press" component={PressContainer} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);