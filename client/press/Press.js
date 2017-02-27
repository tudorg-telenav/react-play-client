import React from 'react';
import axios from 'axios';
import {
  Route
} from 'react-router-dom';

import Press from './List';
import PressDetails from './Details';

class PressContainer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      selectedPress: null,
      detailData: null,
      data: null
    };
  };

  componentDidMount() {

    axios.get('http://localhost:3001/press')
      .then(res => {
        this.setState({
          data: res.data
        });
      });
  }

  getStyles () {

    return {
      div: {
        width: '100%'
      }
    };
  }

  renderPressDetails(matchProps) {
    return (
      <PressDetails
        {...matchProps}
        backUrl={this.props.match.url}
        data={this.state.detailData}
      />
    );
  }

  renderPressList(matchProps) {
    return (
      <Press
        {...matchProps}
        data={this.state.data}
      />
    );
  }

  render() {

    const styles = this.getStyles();

    return (
      <div style={styles.div}>
        <Route path={'' + this.props.match.url + '/:id'} render={this.renderPressDetails.bind(this)}/>
        <Route exact path={'' + this.props.match.url} render={this.renderPressList.bind(this)}/>
      </div>
    );
  }

}

export default PressContainer;