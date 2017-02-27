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
      div: {
        width: '100%'
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
      <div style={styles.div}>
        <Link to={this.props.backUrl}>
          <button>
            BACK
          </button>
        </Link>
        <p>Press details for <strong>{title}</strong></p>
        <p>{content}</p>
      </div>
    );
  }

}

export default PressDetails;