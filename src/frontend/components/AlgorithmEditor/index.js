import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ algorithm = [] }) => ({
  algorithm,
});

export default connect(mapStateToProps)(Component);
