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

  const handleClick = () => {
    props.onSectionToggled(props.section);
  };

  var children = [];

  if (!props.isCollapsed) {
    if (props.data !== null) {
      for (var i = 0; i < props.data.length; i++) {
        children.push(
          <CareersListSectionItem
            baseUrl={props.baseUrl}
            title={props.data[i].title}
            key={i}
            id={props.data[i].id}
          />
        );
      }
    }
  }

  const styles = getStyles();

  return (
    <div
      style={styles.div}
    >
      <span>
        <button onClick={handleClick.bind(this)}>
          {props.isCollapsed ? '+' : '-'}
        </button>
        <strong>
          {props.section}
        </strong>
      </span>
      {children}
    </div>
  );

};

export default CareersListSection;