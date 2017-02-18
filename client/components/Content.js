import React from 'react';
import axios from 'axios';

import CareersContainer from './CareersContainer';
import Press from './Press';

class Content extends React.Component {

  constructor(props) {

    super(props);

    this.state = { // getInitialState method is deprecated
      careersData: null,
      pressData: null
    };
  };

  componentDidMount() {

    axios.get('http://localhost:3001/press')
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
          <CareersContainer />
        );
        break;
      case 'press':
        return (
          <Press data={this.state.pressData} />
        );
        break;
    }
  }

}

Content.propTypes = {
  page: React.PropTypes.oneOf(['careers', 'press'])
};

export default Content;