import React from 'react';
import axios from 'axios';

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

    this.loadData(this.props.jobId);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.jobId != this.props.jobId) {
      this.loadData(nextProps.jobId);
    }
  }

  loadData(id) {

    axios.get('http://localhost:3001/job/' + id)
      .then(res => {
        this.setState({
          data: res.data
        });
      });
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