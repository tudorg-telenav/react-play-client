import React from 'react';
import {
  Link
} from 'react-router-dom';

class Home extends React.Component {

  constructor(props) {

    super(props);

  };

  getStyles() {

    return {

      div: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      button: {
        width: 300
      }

    };
  }

  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.div}>
        <h2>Home</h2>
        <Link to="/careers">
          <button
            style={styles.button}
          >
            We are so hiring right now...
          </button>
        </Link>
      </div>
    );
  }

}

export default Home;