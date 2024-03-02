import { Menu } from "antd";
import React from "react";

const renderItemLink = (item) => {
  // if is stream
  if (item.broadcaster_name) {
    return `https://www.twitch.tv/${item.broadcaster_name}`;
  } else if (item.url) {
    return item.url;
  }
  return "#";
};

function MenuItem({ items }) {
  // Optional Chaining
  return items?.map((item) => (
    <Menu.Item key={item.id}>
      <a href={renderItemLink(item)} target="_blank" rel="noopener noreferrer">
        {`${item.broadcaster_name} - ${item.title}`}
      </a>
    </Menu.Item>
  ));
}

export default MenuItem;
