import React, {useEffect, useState} from 'react';
import {useFetch} from "../Hooks/useFetch";
import FetchData from "../API/FetchData";
import Loading from "../Components/Loading";
import List from "../Components/List";
import {mapping} from "../utils/utils";
import Storage from "../API/Storage";

const Home = () => {
    const [males, setMales] = useState([]);
    const [females, setFemales] = useState([]);
    const [randomGender, setRandomGender] = useState([]);
    const [fetchMales, malesIsLoading, malesError] = useFetch(() => fetchCallback(setMales, 4, 'male'));
    const [fetchFemales, femalesIsLoading, femalesError] = useFetch(() => fetchCallback(setFemales, 4, 'female'));
    const [fetchRandomGender, randomGenderIsLoading, randomGenderError] = useFetch(() =>
        fetchCallback(setRandomGender, 4, 'random'));

    async function fetchCallback(setFetchDataFunc, count, gender) {
        const response = await FetchData.getRandomUsersByGender(count, gender);
        const mapUsers = mapping(response.data.results);

        setFetchDataFunc(mapUsers);
        Storage.setUsers(mapUsers, gender);
        Storage.setUsersCountFromHome(mapUsers.length, gender);
    }

    useEffect(() => {
        Storage.reset();
        fetchMales().then();
        fetchFemales().then();
        fetchRandomGender().then();
    }, []);

    return (
        <div className='home'>
            {
                malesIsLoading
                    ? <Loading/>
                    : <List gender={'male'} items={males} isShortList isShortUsers/>
            }
            {
                malesIsLoading
                    ? <Loading/>
                    : <List gender={'female'} items={females} isShortList isShortUsers/>
            }
            {
                malesIsLoading
                    ? <Loading/>
                    : <List gender={'random'} items={randomGender} isShortList isShortUsers/>
            }
        </div>
    );
};

export default Home;