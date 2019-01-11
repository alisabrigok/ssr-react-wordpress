import React, { Component } from "react";
import Link from "next/link";

class Menu extends Component {
  constructor() {
    super();
  }

  getSlug(url) {
    const parts = url.split("/");
    return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
    const menuItems = this.props.menu.items.map((item, index) => {
      if (item.object === "custom") {
        return (
          <Link href={item.url} key={item.ID}>
            <a className="menu-item">{item.title}</a>
          </Link>
        );
      }
      const slug = this.getSlug(item.url);
      const actualPage = item.object === "category" ? "category" : "post";
      return (
        <Link
          as={`/${slug}`}
          href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
          key={item.ID}
        >
          <a className="menu-item">{item.title}</a>
        </Link>
      );
    });

    return <nav>{menuItems}</nav>;
  }
}

export default Menu;
