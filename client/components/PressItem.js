import React from 'react';

const PressItem = (props) => {

  const getStyles = () => {

    return {

      button: {
        width: '60%'
      }

    };
  };

  const handleClick = () => {
    props.onPressClick(props.id);
  }

  const styles = getStyles();

  return (
    <button onClick={handleClick} style={styles.button} key={props.id}>{props.name}</button>
  );

};

export default PressItem;