import React from 'react';
import User from "./User/User";
import {Link} from "react-router-dom";

const List = ({
                  gender,
                  items,
                  isShortList = false,
                  isShortUsers = false,
                  setIsShowMoreFunc
              }) => {

    const listClasses = isShortList ? 'list' : 'list more';
    const title = getTitleFromGender(gender)

    function getTitleFromGender(gender) {
        switch (gender) {
            case 'male':
                return 'Men';
            case 'female':
                return 'Women';
            case 'random':
                return 'Random gender';
        }
    }

    return (
        <div className={listClasses}>
            <h1 className='list__title'>{title}</h1>
            <div className='list__items'>
                {
                    items.map(item => <User key={item.id}
                                            user={item}
                                            isShortUsers={isShortUsers}
                                            isAddLink={!isShortList}
                    />)
                }
            </div>
            {
                isShortList
                    ? <Link
                        className='list__showMore'
                        to={'/' + gender.toLowerCase()}
                        state={{users: items}}
                    >Show more</Link>
                    : <div className='list__showMore'
                           onClick={() => setIsShowMoreFunc(true)}
                    >Show more</div>
            }
        </div>
    );
};

export default List;