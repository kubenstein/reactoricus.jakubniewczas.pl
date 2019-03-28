import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ algorythm = [] }) => ({
  algorythm,
});

export default connect(mapStateToProps)(Component);
