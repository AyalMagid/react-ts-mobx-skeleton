import React from 'react';
import './ItemsList.scss';

interface IItemsList {
    items: any[];
}

export const ItemsList: React.FC<IItemsList> = ({ items }) => {
    return (
        <div className='items-list flex align-center col'>
            {items.map((item: any) => {
                return <Item title={item.title} body={item.body} />;
            })}
        </div>
    );
};

interface IItem {
    title: string;
    body: string;
}

const Item: React.FC<IItem> = ({ title, body }) => {
    return (
        <div className='item'>
            <div className='title'>{title}`</div>
            <div className='body'>{body}</div>
        </div>
    );
};
