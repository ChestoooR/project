import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({width,height}) => {

  return <div className="Loading" style={{ width, height }}/>;
}

Loading.defaultProps = {
  width: '68px',
  height: '68px'
}

Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
}

export default Loading;
