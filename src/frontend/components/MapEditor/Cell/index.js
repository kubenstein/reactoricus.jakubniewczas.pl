import deepCopy from 'lib/deep-copy';
import connect from 'lib/appState/connect';

import Component from './component';

const nextType = type => ({
  empty: 'box',
  box: 'badge',
  badge: 'empty',
}[type]);

const mapStateToProps = ({ newMapCoordinates }, { x, y }, updateState) => {
  const type = newMapCoordinates[`${x},${y}`] || 'empty';
  return {
    type,
    onClick: () => {
      if (type === 'start') return;

      const updatedNewMap = deepCopy(newMapCoordinates);
      updatedNewMap[`${x},${y}`] = nextType(type);
      updateState({ newMapCoordinates: updatedNewMap });
    },
  };
};

export default connect(mapStateToProps)(Component);
