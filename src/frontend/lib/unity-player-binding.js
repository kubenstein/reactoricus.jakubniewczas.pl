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
window.OnConfirmationEvent = (confirmationEvent) => {
  if (!window.unityGameConfirmationEmitter) window.unityGameConfirmationEmitter = new EventEmitter();
  window.unityGameConfirmationEmitter.emitEvent(confirmationEvent);
};

export const receiveConfirmation = (eventName, callback) => {
  if (!window.unityGameConfirmationEmitter) window.unityGameConfirmationEmitter = new EventEmitter();
  window.unityGameConfirmationEmitter.once(`${eventName}Done`, callback);
};
