import { HeaderMenuItem } from "carbon-components-react";
import React from "react";

type ItemTypes = {
  href: string;
  label: string;
};

interface ItemProps {
  navItems: any[];
}

const MenuItems = ({ navItems }: ItemProps) => {
  const request = navItems;

  return (
    <>
      {request.map((item, index) => (
        <HeaderMenuItem
          key={index}
          href={item.href}
          target={item.href.includes("http") ? "_blank" : "_self"}
        >
          {item.label}
        </HeaderMenuItem>
      ))}
    </>
  );
};

export default MenuItems;
