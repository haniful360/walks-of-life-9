import React from 'react';
import accounts from '../../images/icons/accounts.png'
import chip from '../../images/icons/chip.png'
import group from '../../images/icons/Group.png'
import social from '../../images/icons/social-media.png'
import Category from '../Category/Category';
const CategoryList = () => {
    const categories = [
        { id: 1, name: 'Account & Finance', job: '300 Jobs Available', img: accounts },
        { id: 2, name: 'Creative Design', job: '100+ Jobs Available', img: group },
        { id: 3, name: 'Marketing & Sales', job: '150 Jobs Available', img: chip },
        { id: 4, name: 'Engineering Job', job: '224 Jobs Available', img: social }
    ]
    return (
        <div>
            <div>
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center w-[1280px] mx-auto'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    >
                    </Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;