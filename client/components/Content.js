import React from 'react';

import PressContainer from './PressContainer';
import CareersContainer from './CareersContainer';

const Content = (props) => {

  switch (props.page) {
    case 'careers':
      return (
        <CareersContainer />
      );
      break;
    case 'press':
      return (
        <PressContainer />
      );
      break;
  }

};

Content.propTypes = {
  page: React.PropTypes.oneOf(['careers', 'press'])
};

export default Content;