import React from 'react';
import axios from 'axios';

import Press from './Press';
import PressDetails from './PressDetails';

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

  changeSelectedCareer(id) {

    axios.get('http://localhost:3001/press/' + id)
      .then(res => {
        this.setState({
          detailData: res.data,
          selectedPress: id
        });
      });
  }

  goBackFromDetails() {
    this.setState({
      detailData: null,
      selectedPress: null
    });
  }

  render() {
    if (this.state.selectedPress !== null) {
      return (
        <PressDetails goBack={this.goBackFromDetails.bind(this)} data={this.state.detailData}/>
      );
    } else {
      return (
        <Press onPressClick={this.changeSelectedCareer.bind(this)} data={this.state.data}/>
      );
    }
  }

}

export default PressContainer;