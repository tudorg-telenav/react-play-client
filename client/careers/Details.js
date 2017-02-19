import React from 'react';

const CareerDetails = (props) => {

  const getStyles = () => {

    return {

      div: {
        width: '100%'
      }

    };
  };

  const styles = getStyles();

  const title = props.data !== null ? props.data.title : '';
  const content = props.data !== null ? props.data.content : '';

  return (
    <div
      style={styles.div}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );

};

export default CareerDetails;