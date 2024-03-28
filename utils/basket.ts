'use client'

import { jsonParse, typeBy } from "./index"
import { cloneDeep } from 'lodash'

class LocalStorage {
  EXPIRE_KEY = 'BASKET_CACHE_EXPIRE'
  CACHE: any[] = []
  constructor() {
    this.init()
  }
  init() {
    if (typeof window !== 'undefined') {
      let expire = window.localStorage.getItem(this.EXPIRE_KEY) || null;
      this.CACHE = expire !== null ? jsonParse(expire, []) : [];
    }
  }
  get() {
    return cloneDeep(this.CACHE)
  }
  add(d: any) {
    const isNotHas = this.has(d) === -1;
    if (isNotHas) {
      this.CACHE.push(d);
      this.set()
    }
    return this.get()
  }
  remove(d: any) {
    const id = typeBy(d) === 'string' ? d : d.productId;
    this.CACHE = this.CACHE.filter((i: any) => i.productId !== id);
    this.set()
    return this.get()
  }
  getLen() {
    return this.CACHE.length
  }

  set() {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.EXPIRE_KEY, JSON.stringify(this.CACHE))
    }
  }
  has(d: any) {
    const id = typeBy(d) === 'string' ? d : d.productId;
    return this.CACHE.findIndex((i: any) => i.productId === id)
  }
}

const basket = new LocalStorage()

export default basket