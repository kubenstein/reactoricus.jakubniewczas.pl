import EventEmitter from 'wolfy87-eventemitter';

export const setMapCoordinates = (coordinates) => {
  window.mapCoordinates = coordinates;
};

export const sendStep = (stepName) => {
  window.unityGame.SendMessage('Reaktorious', stepName);
};

//
// binding with unityGame callback
// this method will be invoked by unityPlayer
window.UnityOnEvent = (eventName) => {
  window.unityGameEmitter.emitEvent(eventName);
};

export const receiveGameStart = (callback) => {
  if (window.unityGameEmitter) {
    window.unityGameEmitter.removeAllListeners();
  } else {
    window.unityGameEmitter = new EventEmitter();
  }
  window.unityGameEmitter.once('GameStartDone', callback);
};

export const receiveConfirmation = (eventName, callback) => {
  window.unityGameEmitter.once(`${eventName}Done`, callback);
};

export const receiveFail = (eventName, callback) => {
  window.unityGameEmitter.once(`${eventName}Fail`, callback);
};

export const receiveGameEnds = (callback) => {
  window.unityGameEmitter.once('GameFinished', callback);
};
