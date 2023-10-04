import { useState } from 'react';
import Dropdown from './Dropdown';

const MenuItems = ({ items, item, index, depthLevel, configColor}) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="menu-items" key={index}>
            {item.isFolder ? (
                <>
                    <button
                        type="button"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {item.name}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown 
                        items={items} 
                        dropdown={dropdown}
                        submenu={
                            items.filter((subitem) => subitem.idPadre === item.id)
                        } 
                        depthLevel={depthLevel}
                        configColor={configColor}
                    />
                </>
            ) : (
                <a href="#">{item.name}</a>
            )}
        </li >
    );
};

export default MenuItems;