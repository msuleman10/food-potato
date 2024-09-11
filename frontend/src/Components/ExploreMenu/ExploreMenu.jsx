import React from 'react'
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets"

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='exploreMenu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cumque corporis numquam ullam in molestiae, officiis distinctio facilis illo fuga vero! Ducimus corrupti dolore sed iure eos soluta alias aspernatur!</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "all" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu