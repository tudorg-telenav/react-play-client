import React from 'react';
import {
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

  const handleClick = () => {
    if (props.isSelected) {
      props.push(
        props.baseUrl +
        '/job=' + props.match.params.jobId +
        '/from=all'
      );
    } else {
      props.push(
        props.baseUrl +
        '/job=' + props.match.params.jobId +
        '/from=' + props.id
      );
    }
  };

  const styles = getStyles();

  return (
    <button
      onClick={handleClick}
      style={styles.button}
      key={props.id}
    >
      {props.name}
    </button>
  );

};

export default withRouter(CareerLocationItem);