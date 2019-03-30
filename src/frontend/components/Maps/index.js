import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, _updateState) => ({
  maps: [
    {
      id: '1',
      createdAt: '25.03.2019',
      played: 24,
    },
    {
      id: '2',
      createdAt: '01.01.2019',
      played: 124,
    },
    {
      id: '3',
      createdAt: '01.01.2019',
      played: 124,
    },
  ],
});

export default connect(mapStateToProps)(Component);
