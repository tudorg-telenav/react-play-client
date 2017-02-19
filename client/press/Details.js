import React from 'react';

const PressDetails = (props) => {

  const getStyles = () => {

    return {

      div: {
        width: '100%'
      }

    };
  };

  const styles = getStyles();

  const handleBackClick = () => {
    props.goBack();
  };

  return (

    <div style={styles.div}>
      <button
        onClick={handleBackClick}
      >
        BACK
      </button>
      <p>Press details for <strong>{props.data.title}</strong></p>
      <p>{props.data.content}</p>
    </div>
  );

};

export default PressDetails;