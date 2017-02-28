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

  let title = '';
  let content = '';
  if (props.data !== null) {
    title = props.data.title;
    content = props.data.content;
  }

  return (
    <div
      style={styles.div}
    >
      <h2>Career Description</h2>
      <br />
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );

};

export default CareerDetails;