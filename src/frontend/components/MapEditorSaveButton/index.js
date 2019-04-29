import axios from 'axios';
import connect from 'lib/appState/connect';

import Component from './component';

const postMap = ({ name, coordinates }) => axios.post('/api/maps/', { name, coordinates });

const serializeCoordinates = editorCoordinates => Object.keys(editorCoordinates)
  .map((xy) => {
    const type = editorCoordinates[xy];
    if (type === 'empty') return null;
    const hasBadge = type === 'badge';
    return `${xy},${hasBadge ? '1' : '0'}`;
  })
  .filter(v => v)
  .join('|');

const mapStateToProps = ({ newMapName, newMapCoordinates }, _props, updateState) => ({
  onClick: () => {
    const coordinates = serializeCoordinates(newMapCoordinates);
    postMap({ name: newMapName, coordinates })
      .then(() => updateState({
        newMapCoordinates: {},
        newMapName: '',
        mapEditorOpened: false,
      }))
      .catch(({ response: { data } }) => alert(data.join('\n\n')));
  },
});

export default connect(mapStateToProps)(Component);
