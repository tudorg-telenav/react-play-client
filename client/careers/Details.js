import React from 'react';
import axios from 'axios';
import {
  matchPath
} from 'react-router-dom';

class CareerDetails extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      data: null
    };
  };

  getStyles() {

    return {
      div: {
        width: '100%'
      }
    };
  }

  componentDidMount() {

    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {

      this.loadData(nextProps);
  }

  loadData(props) {

    const manualMatch = matchPath(
      props.location.pathname,
      props.baseUrl + '/job=:jobId/from=:locationId'
    );

    if (manualMatch !== null) {

      axios.get('http://localhost:3001/job/' + manualMatch.params.jobId)
        .then(res => {
          this.setState({
            data: res.data
          });
        });
    }
  }

  render() {

    const styles = this.getStyles();

    let title = '';
    let content = '';
    if (this.state.data !== null) {
      title = this.state.data.title;
      content = this.state.data.content;
    }

    return (
      <div
        style={styles.div}
      >
        <h2>Career Description</h2>
        <br />
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    );
  }

}

export default CareerDetails;