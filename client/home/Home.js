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
        justifyContent: 'center'
      },
      button: {
        width: 300
      }

    };
  }

  handleClick() {
    this.props.onGoToCareers('careers');
  }

  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.div}>
        <Link to="/careers">
          <button
            style={styles.button}
            onClick={this.handleClick.bind(this)}
          >
            We are so hiring right now...
          </button>
        </Link>
      </div>
    );
  }

}

export default Home;