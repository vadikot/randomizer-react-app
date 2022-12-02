export default class Storage {
    static getUsers(gender) {
        const jsonUsers = window.localStorage.getItem(gender);

        return JSON.parse(jsonUsers);
    }

    static setUsers(users, gender) {
        const jsonUsers = JSON.stringify(users);

        this.setUsersCount(users.length, gender);
        window.localStorage.setItem(gender, jsonUsers);
    }

    static setUsersCount(count, gender) {
        window.localStorage.setItem(`${gender}Count`, count);
    }

    static getUsersCount(gender) {
        return window.localStorage.getItem(`${gender}Count`);
    }

    static setUsersCountFromHome(count, gender) {
        window.localStorage.setItem(`${gender}CountHome`, count);
    }

    static getUsersCountFromHome(gender) {
        return window.localStorage.getItem(`${gender}CountHome`);
    }

    static reset() {
        window.localStorage.clear();
    }
}