import React from 'react';

import Careers from './Careers';
import Press from './Press';

const Content = ({page}) => {

  switch (page) {
    case 'careers':
      return (
        <Careers />
      );
      break;
    case 'press':
      return (
        <Press />
      );
      break;
  }

};

Content.propTypes = {
  page: React.PropTypes.oneOf(['careers', 'press'])
};

export default Content;