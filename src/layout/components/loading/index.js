import React from 'react';
import PropTypes from 'prop-types';

export default class Loading extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        正在加载模块...
      </div>
    );
  }
}