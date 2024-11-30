import React from 'react';
import style from './Items.module.css';
import Images from '../../assets/Images/Images';

const Items = () => {

    const items = Object.values(Images.BottomHeading).filter(Boolean);

    return (
        <div className={style.Items}>
            {items.map((item, index) => (
                <img
                    src={item}
                    key={index}
                    className={style.Image}
                    alt={`Item ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default Items;
