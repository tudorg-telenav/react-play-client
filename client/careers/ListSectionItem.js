import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';

const CareersListSectionItem = (props) => {

  const getStyles = () => {

    return {
      outerDiv: {
        display: 'flex',
        flexDirection: 'row-reverse'
      },
      button: {
        width: 300,
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
    <div style={styles.outerDiv}>
      <Link to={url}>
        <button
          style={styles.button}
          key={props.id}
          disabled={props.match.params.jobId == props.id}
        >
          {props.title}
        </button>
      </Link>
    </div>
  );

};

export default withRouter(CareersListSectionItem);