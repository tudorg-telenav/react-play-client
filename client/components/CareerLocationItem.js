import React from 'react';

const CareerLocationItem = (props) => {

  const getStyles = () => {

    return {

      button: {
        width: '100%'
      }

    };
  };

  const handleClick = () => {
    props.onSelect(props.id);
  }

  const styles = getStyles();

  return (
    <button onClick={handleClick} style={styles.button} key={props.id}>{props.name}</button>
  );

};

export default CareerLocationItem;