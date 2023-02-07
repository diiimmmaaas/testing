import React from "react";

const List = (props) => {
    const { items = []} = props

    if (!items.length) {
        return null
    }

    return (
        <ul className='list'>
            {
                items.map((item,index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    );
};

export default List;
