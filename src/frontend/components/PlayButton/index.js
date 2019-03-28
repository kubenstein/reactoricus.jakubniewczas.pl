import connect from 'lib/appState/connect';

import { execute } from './algorithm-execution-utils';

import Component from './component';

const mapStateToProps = ({ algorithm = [] }, _props, _updateState) => ({
  onClick: () => {
    execute(algorithm, (step, next) => {
      console.log(step);
      next();
    });
  },
});

export default connect(mapStateToProps)(Component);
