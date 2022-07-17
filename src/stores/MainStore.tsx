import { makeAutoObservable } from 'mobx';

export class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello from ${this.name}`);
    }
}

class MainStore {
    private _count = 0;

    private _testUsers: User[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    countUp() {
        this._count++;
    }

    addUser(user: User) {
        this._testUsers.push(user);
    }

    get count() {
        return this._count;
    }

    get testUsers() {
        return this._testUsers;
    }
}

export const mainStore = new MainStore();
