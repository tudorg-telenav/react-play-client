import React from 'react';
import CareersListSectionItem from './ListSectionItem';

const CareersListSection = (props) => {

  const getStyles = () => {

    return {

      div: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column'
      }

    };
  };

  const styles = getStyles();

  var children = [];
  if (props.data !== null) {
    for (var i = 0; i < props.data.length; i++) {
      children.push(
        <CareersListSectionItem
          isSelected={props.selectedCareerId === props.data[i].id}
          onSelect={props.onSectionIntemSelection}
          title={props.data[i].title}
          key={i}
          id={props.data[i].id}
        />
      );
    }
  }

  return (
    <div
      style={styles.div}
    >
      <span>{props.section}</span>
      {children}
    </div>
  );

};

export default CareersListSection;