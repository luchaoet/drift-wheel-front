import NodeCache from 'node-cache'

const myCache = new NodeCache();

const time = 24 * 60 * 60;

const getCache = (): any[] => {
  const keys = myCache.keys();
  const values = myCache.mget(keys);
  return Object.values(values)
}

const setCache = (d: any) => {
  myCache.set(d.productId, d, time);
  return getCache();
}

const removeCache = (id: string) => {
  if (myCache.has(id)) {
    myCache.del(id);
  }

  return getCache();
}

const getLen = () => {
  return myCache.keys().length
}

export {
  getCache,
  setCache,
  removeCache,
  getLen
}