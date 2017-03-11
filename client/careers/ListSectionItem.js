import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';

const CareersListSectionItem = (props) => {

  const getStyles = () => {

    return {

      button: {
        color: props.match.params.jobId == props.id ? 'red' : 'black',
        fontWeight: props.match.params.jobId == props.id ? 'bold' : 'normal'
      }
    };
  };

  const styles = getStyles();

  const url =
    props.baseUrl +
    '/job=' + props.id +
    '/from=' + props.match.params.locationId;

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