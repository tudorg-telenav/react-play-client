import React from 'react';

const CareersListSectionItem = (props) => {

  const handleClick = () => {
    props.onSelect(props.id);
  };

  const getStyles = () => {

    return {

      button: {
        color: props.isSelected ? 'red' : 'black',
        fontWeight: props.isSelected ? 'bold' : 'normal'
      }
    };
  };

  const styles = getStyles();

  return (
    <button
      style={styles.button}
      onClick={handleClick}
      key={props.id}
    >
      {props.title}
    </button>
  );

};

export default CareersListSectionItem;