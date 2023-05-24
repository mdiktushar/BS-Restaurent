import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import banner3 from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/components/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>BSR | Menu</title>
      </Helmet>

      <Cover img={banner3} title={`Our Menu`} />
      <PopularMenu />
      <Cover img={banner3} title={`This is Food`} />
      <PopularMenu />
      <Cover img={banner3} title={`This is Salad`} />
      <PopularMenu />
      <Cover img={banner3} title={`This is Supe`} />
      <PopularMenu />
    </div>
  );
};

export default Menu;
