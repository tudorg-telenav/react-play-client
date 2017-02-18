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

  return (

    <div style={styles.div}>
      <h4>Careers details for {props.data.title}</h4>
      <p>{props.data.content}</p>
    </div>
  );

};

export default CareerDetails;