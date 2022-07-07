import { makeAutoObservable } from 'mobx';

class MainStore {
    private _count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    countUp() {
        this._count++;
    }

    get count() {
        return this._count;
    }
}

export const mainStore = new MainStore();
