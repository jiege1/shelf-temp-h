import React from 'react';
import fundebug from 'fundebug-javascript';

fundebug.apikey = window.CFG.error;

/**
 * window.onerror
 * @param errorMessage
 */
window.onerror = function(errorMessage) {
  fundebug.notifyError(errorMessage, {
    metaData: {
      info: 'window.onerror',
    }
  });
};

/**
 *
 * @param error 异常堆栈信息
 * @param info  错误信息
 */
export function sendError({error, info}) {
  fundebug.notifyError(error, {
    metaData: {
      info: info
    }
  });
}

export default function(Com) {
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        info: null,
      };
    }

    componentDidCatch(error, info) {
      this.setState({ error, info });
      sendError({ error, info });
    }

    render() {
      const {error, info} = this.state;

      if (error) {
        return 'error';
      }

      return <Com {...this.props}/>;
    }
  };
}

