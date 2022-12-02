import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import List from "../Components/List";
import Storage from "../API/Storage";
import useFetchByGender from "../Hooks/useFetchByGender";

const ByGender = () => {
    const {gender} = useParams();
    const [users, setUsers] = useState(Storage.getUsers(gender));
    const [isShowMoreParent, setIsShowMoreParent] = useState(false);
    const [fetchByGender, isLoading, error] = useFetchByGender(gender, setUsers, isShowMoreParent, setIsShowMoreParent);

    useEffect(() => {
        fetchByGender().then();
    }, [gender, isShowMoreParent]);

    return (
        <List
            gender={gender}
            items={users}
            isShortUsers={true}
            setIsShowMoreFunc={setIsShowMoreParent}
        />
    );
};

export default ByGender;