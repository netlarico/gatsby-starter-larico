import React from "react";

import { Link, graphql, StaticQuery } from "gatsby";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import SearchBox from "../SearchBox";

const { SubMenu } = Menu;

const NavBar = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => (
      <div className="right">
        <SearchBox searchIndex={data.siteSearchIndex.index} />

        <Menu mode="horizontal" className="main-menu">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>

          <Menu.Item key="blog">
            <Link to="/blog">Blog</Link>
          </Menu.Item>

          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>

          <SubMenu title="Others">
            <Menu.ItemGroup>
              <Menu.Item key="pricing">
                <Link to="/pricing">Pricing</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    )}
  />
);

export default NavBar;
