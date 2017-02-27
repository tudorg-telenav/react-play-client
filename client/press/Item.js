import React from 'react';

const PressItem = (props) => {

  const getStyles = () => {

    return {

      button: {
        width: '100%'
      }

    };
  };

  const styles = getStyles();

  return (
    <button
      style={styles.button}
      key={props.id}
    >
      {props.title}
    </button>
  );

};

PressItem.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PressItem;