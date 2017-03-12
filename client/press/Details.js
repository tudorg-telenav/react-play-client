import React from 'react';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';

class PressDetails extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      detailData: null
    };
  };

  getStyles () {

    return {
      outerDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%'
      }
    };
  }

  componentDidMount() {

    axios.get('http://localhost:3001/press/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          detailData: res.data
        });
      });
  }

  render() {

    const styles = this.getStyles();

    let title = '';
    let content = '';
    if (this.state.detailData !== null) {

      title = this.state.detailData.title;
      content = this.state.detailData.content;
    }

    return (
      <div style={styles.outerDiv}>
        <div style={styles.div}>
          <h2>Details</h2>
          <Link to={this.props.backUrl}>
            <button>
              BACK
            </button>
          </Link>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  }

}

export default PressDetails;