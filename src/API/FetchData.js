import axios from "axios";

export default class FetchData {
    static async getRandomUser() {
        return await axios.get('https://randomuser.me/api/');
    }

    static async getRandomUsersByGender(count = 5, title = '') {
        if (title === 'random') {
            title = ''
        }

        return await axios.get('https://randomuser.me/api/', {
            params: {
                results: count,
                gender: title,
            }
        });
    }
}