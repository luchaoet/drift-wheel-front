import { createNanoEvents } from 'nanoevents';

const emitter = createNanoEvents();

export const subscribe = (event: string, listener: any) => {
  return emitter.on(event, listener);
};

export const publish = (event: string, data?: any) => {
  emitter.emit(event, data);
};