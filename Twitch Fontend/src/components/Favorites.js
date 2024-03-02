// Favorites.js
import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { Menu, Button, Drawer } from "antd";
import {
  EyeOutlined,
  YoutubeOutlined,
  VideoCameraOutlined,
  StarFilled,
} from "@ant-design/icons";
import { deleteFavoriteItem } from "../utils";

const { SubMenu } = Menu;

function Favorites({ favoriteItems, updateFavoriteItems }) {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const { videos, streams, clips } = favoriteItems;

  const onDrawerClose = () => {
    setDisplayDrawer(false);
  };

  const onFavoriteClick = () => {
    setDisplayDrawer(true);
  };

  const handleDeleteFavorite = (item) => {
    deleteFavoriteItem(item)
      .then(() => {
        updateFavoriteItems(); // 这个函数需要定义，以便在删除操作后更新收藏列表
      })
      .catch((error) => {
        console.error("Failed to delete favorite item:", error);
      });
  };

  return (
    <>
      <Button
        type="primary"
        shape="round"
        onClick={onFavoriteClick}
        icon={<StarFilled />}
      >
        My Favorites
      </Button>
      <Drawer
        title="My Favorites"
        placement="right"
        width={720}
        visible={displayDrawer}
        onClose={onDrawerClose}
      >
        <Menu
          mode="inline"
          defaultOpenKeys={["streams"]}
          style={{ height: "100%", borderRight: 0 }}
          selectable={false}
        >
          <SubMenu key={"streams"} icon={<EyeOutlined />} title="Streams">
            <MenuItem items={streams} onDelete={handleDeleteFavorite} />
          </SubMenu>
          <SubMenu key={"videos"} icon={<YoutubeOutlined />} title="Videos">
            <MenuItem items={videos} onDelete={handleDeleteFavorite} />
          </SubMenu>
          <SubMenu key={"clips"} icon={<VideoCameraOutlined />} title="Clips">
            <MenuItem items={clips} onDelete={handleDeleteFavorite} />
          </SubMenu>
        </Menu>
      </Drawer>
    </>
  );
}

export default Favorites;
