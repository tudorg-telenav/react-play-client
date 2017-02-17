import React from 'react';
import Radium from 'radium';

import Careers from './Careers';
import Press from './Press';

const Content = ({page}) => {

  switch (page) {
    case PAGES[0]:// careers
      return (
        <Careers />
      );
      break;
    case PAGES[1]:// press
      return (
        <Press />
      );
      break;
  }

};

Content.propTypes = {
  page: React.PropTypes.oneOf(window.PAGES)
};

export default Content;