import EventEmitter from 'wolfy87-eventemitter';
import IGameMap from '../@types/gameMap';

declare global {
  interface Window {
    mapCoordinates: Pick<IGameMap, 'coordinates'>;
    unityGameEmitter: EventEmitter,
    unityGame: {
      SendMessage(messageName: string, messagePayload: string): void
    },
    UnityOnEvent(eventName: string): void
  }
}


export const setMapCoordinates = (coordinates: Pick<IGameMap, 'coordinates'>) => {
  window.mapCoordinates = coordinates;
};

export const sendStep = (stepName: string) => {
  window.unityGame.SendMessage('Reaktorious', stepName);
};

//
// binding with unityGame callback
// this method will be invoked by unityPlayer
window.UnityOnEvent = (eventName: string) => {
  if (!window.unityGameEmitter) window.unityGameEmitter = new EventEmitter();
  window.unityGameEmitter.emitEvent(eventName, []);
};

export const receiveGameReady = (callback: Function) => {
  if (!window.unityGameEmitter) window.unityGameEmitter = new EventEmitter();
  window.unityGameEmitter.once('GameReady', callback);
};

export const receiveGameStart = (callback: Function) => {
  window.unityGameEmitter.removeAllListeners();
  window.unityGameEmitter.once('GameStartDone', callback);
};

export const receiveConfirmation = (eventName: string, callback: Function) => {
  window.unityGameEmitter.once(`${eventName}Done`, callback);
};

export const receiveFail = (eventName: string, callback: Function) => {
  window.unityGameEmitter.once(`${eventName}Fail`, callback);
};

export const receiveGameEnds = (callback: Function) => {
  window.unityGameEmitter.once('GameFinished', callback);
};
