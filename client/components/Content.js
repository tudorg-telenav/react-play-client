import React from 'react';
import axios from 'axios';

import PressContainer from './PressContainer';
import Careers from './Careers';

class Content extends React.Component {

  constructor(props) {

    super(props);

    this.state = { // getInitialState method is deprecated
      careersData: null,
      pressData: null
    };
  };

  componentDidMount() {

    axios.get('http://localhost:3001/careers')
      .then(res => {
        this.setState({
          pressData: res.data
        });
      });
  }

  render() {
    switch (this.props.page) {
      case 'careers':
        return (
          <Careers data={this.state.pressData} />
        );
        break;
      case 'press':
        return (
          <PressContainer />
        );
        break;
    }
  }

}

Content.propTypes = {
  page: React.PropTypes.oneOf(['careers', 'press'])
};

export default Content;