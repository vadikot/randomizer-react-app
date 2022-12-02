import React from 'react';
import FetchData from "../API/FetchData";
import {mapping} from "../utils/utils";
import Storage from "../API/Storage";
import {useFetch} from "./useFetch";

const useFetchByGender = (gender, setUsers, isShowMoreParent, setIsShowMoreParent) => {

    async function fetchCallback() {
        const response = await FetchData.getRandomUsersByGender(16, gender);
        const mapUsers = mapping(response.data.results);

        if (isShowMoreParent) {
            const localUsers = Storage.getUsers(gender);

            Storage.setUsers([...localUsers, ...mapUsers], gender)
            setUsers((oldUsers) => [...oldUsers, ...mapUsers]);
            setIsShowMoreParent(false);

            return;
        }

        const isLoadMore = Storage.getUsersCount(gender) === Storage.getUsersCountFromHome(gender);

        if (isLoadMore) {
            const localUsers = Storage.getUsers(gender);
            const usersArr = [...localUsers, ...mapUsers];

            Storage.setUsers(usersArr, gender);
            setUsers(usersArr);
        } else {
            const localUsers = Storage.getUsers(gender);

            Storage.setUsers(localUsers, gender);
            setUsers(localUsers);
        }
    }

    const [newFunc, isLoading, error] = useFetch(fetchCallback);

    return [newFunc, isLoading, error];
};

export default useFetchByGender;