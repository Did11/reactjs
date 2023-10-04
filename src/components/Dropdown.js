import MenuItems from "./MenuItems";

const Dropdown = ({ items, dropdown, submenu, depthLevel, configColor }) => {
    depthLevel = depthLevel + 1;

    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul 
            className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`} 
            style={{ backgroundColor: configColor.itemBackground }}
        >
            {submenu.map((item, index) => (
                <MenuItems items={items} item={item} key={index} depthLevel={depthLevel} configColor={configColor} />
            ))}
        </ul>
    );
};

export default Dropdown;