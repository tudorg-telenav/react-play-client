import React from 'react';

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
        <button
          style={styles.button}
          onClick={this.handleClick.bind(this)}
        >
          We are so hiring right now...
        </button>
      </div>
    );
  }

}

export default Home;