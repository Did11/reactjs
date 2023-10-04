import MenuItems from "./MenuItems";

const Menu = ({ data }) => {
    const { configColor, menuItems } = data;

    return (
        <nav style={{ backgroundColor: configColor.background, color: configColor.itemColor }}>
            <ul className="menus">
                {menuItems.filter((item) => item.idPadre === data.idFirstNivel).map((item, index) => {
                    const depthLevel = 0;
                    return <MenuItems
                        items={menuItems}
                        item={item}
                        key={index}
                        depthLevel={depthLevel}
                        configColor={configColor}
                    />;
                })}
            </ul >
        </nav >
    );
};

export default Menu;