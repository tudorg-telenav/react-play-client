import React from 'react';

const CareerItem = (props) => {

  const getStyles = () => {

    return {

      button: {
        width: '60%'
      }

    };
  };

  const styles = getStyles();

  return (
    <button style={styles.button} key={props.id}>{props.name}</button>
  );

};

export default CareerItem;