import React from 'react';
import CareersListSectionItem from './ListSectionItem';

const CareersListSection = (props) => {

  const getStyles = () => {

    return {
      div: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column'
      },
      facetStrong: {
        color: props.data.length > 0 ? 'green' : 'grey'
      },
      titleSpan: {
        color: props.data.length > 0 ? 'black' : 'grey'
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
        <button
          onClick={handleClick.bind(this)}
          disabled={props.data.length === 0}
        >
          {props.isCollapsed ? '+' : '-'}
        </button>
        &nbsp;
        <strong style={styles.facetStrong}>
          ({props.data.length})
        </strong>
        &nbsp;
        <span style={styles.titleSpan}>
          {props.section}
        </span>
      </span>
      {children}
    </div>
  );

};

export default CareersListSection;