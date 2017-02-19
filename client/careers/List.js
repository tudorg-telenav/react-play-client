import React from 'react';
import CareersListSection from './ListSection';

const CareersList = (props) => {

  const getStyles = () => {

    return {

      div: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }

    };
  };

  const styles = getStyles();

  var children = [];
  var i = 0;
  for (var section in props.data) {
    if (props.data.hasOwnProperty(section)) {
      children.push(
        <CareersListSection
          onSectionIntemSelection={props.onListItemSelection}
          section={section}
          data={props.data[section]}
          key={i}
        />
      );
      i++;
    }
  }

  return (

    <div
      style={styles.div}
    >
      <h2>Careers List</h2>
      {children}
    </div>
  );

};

export default CareersList;