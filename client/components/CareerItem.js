import React from 'react';

const CareerItem = (props) => {

  const getStyles = () => {

    return {

      button: {
        width: '60%'
      }

    };
  };

  const handleClick = () => {
    props.onCareerClick(props.id);
  }

  const styles = getStyles();

  return (
    <button onClick={handleClick} style={styles.button} key={props.id}>{props.name}</button>
  );

};

export default CareerItem;