import React from 'react';
import {
  Link,
  withRouter,
  matchPath
} from 'react-router-dom';

const CareersListSectionItem = (props) => {

  const getStyles = () => {

    return {

      button: {
        color: props.isSelected ? 'red' : 'black',
        fontWeight: props.isSelected ? 'bold' : 'normal'
      }
    };
  };

  const styles = getStyles();

  const manualMatch = matchPath(props.match.url + '/job=' + props.id, props.match.url + '/job=:jobId');
  const url = props.baseUrl + '/job=' + manualMatch.params.jobId;

  return (
    <Link to={url}>
      <button
        style={styles.button}
        key={props.id}
      >
        {props.title}
      </button>
    </Link>
  );

};

export default withRouter(CareersListSectionItem);