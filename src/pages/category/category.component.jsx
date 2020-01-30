import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './category.styles.scss';

const CategoryPage = ({ match }) => {
    console.log('match', match);
    return (
    <div className='category'>
        <h2>Category page</h2>
    </div>
)}

export default CategoryPage;

