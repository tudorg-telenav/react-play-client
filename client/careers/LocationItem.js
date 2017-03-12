import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';

const CareerLocationItem = (props) => {

  const getStyles = () => {

    return {

      button: {
        width: '50%',
        color: props.isSelected ? 'red' : 'black',
        fontWeight: props.isSelected ? 'bold' : 'normal'
      }

    };
  };

  const styles = getStyles();

  let url = null;
  if (props.isSelected) {
    url =
      props.baseUrl +
      '/job=' + props.match.params.jobId +
      '/from=all';
  } else {
    url =
      props.baseUrl +
      '/job=' + props.match.params.jobId +
      '/from=' + props.id;
  }

  return (
    <Link to={url}>
      <button
        style={styles.button}
        key={props.id}
      >
        {props.name}
      </button>
    </Link>
  );

};

export default withRouter(CareerLocationItem);