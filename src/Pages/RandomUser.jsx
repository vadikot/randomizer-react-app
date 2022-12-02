import React, {useEffect, useState} from 'react';
import User from "../Components/User/User";
import {useFetch} from "../Hooks/useFetch";
import Loading from "../Components/Loading";
import FetchData from "../API/FetchData";
import {mapping} from "../utils/utils";

const RandomUser = () => {
    const [user, setUser] = useState({});
    const [fetchUser, isLoading, error] = useFetch(fetchCallback);

    async function fetchCallback() {
        const response = await FetchData.getRandomUser();
        const user = mapping(response.data.results)[0];

        setUser(user)
    }

    useEffect(() => {
        fetchUser().then();
    }, []);

    return (
        <div className='random-user'>
            <h1 className='list__title'>Random User</h1>
            {
                isLoading
                    ? <Loading/>
                    : <User user={user}/>
            }
        </div>
    );
};

export default RandomUser;