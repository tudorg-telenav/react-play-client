import React from 'react';

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
    props.onSelect(props.id);
  }

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

export default CareerLocationItem;