import React, { useEffect, useState } from "react";
import TopMenu from "./TopHeader";
import { Link, NavLink } from "react-router-dom";
import logo from "../../resources/img/logo.jpg";
import "./Header.scss";
import { Badge, Button, Col, Menu, Row } from "antd";
import {
  MessageOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  let dataCart = useSelector((state) => state.shopcart.listCartItem);

  const [user, setUser] = useState({});
  const [quantityMessage, setquantityMessage] = useState("");
  const [current, setCurrent] = useState("");
  const cartItemCount = 5;

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUser(userData);
  }, []);

  const items = [
    {
      label: <Link to={"/"}>TRANG CHỦ</Link>,
      key: "home",
    },
    {
      label: <Link to={"/shop"}>CỬA HÀNG</Link>,
      key: "shop",
    },
    {
      label: <Link to={"/blog"}>TIN TỨC</Link>,
      key: "blog",
    },
    {
      label: <Link to={"/voucher"}>GIẢM GIÁ</Link>,
      key: "voucher",
    },
    {
      label: <Link to={"/about"}>GIỚI THIỆU</Link>,
      key: "about",
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <TopMenu user={user} />
      <Row className="main_menu">
        <Col span={10}>
          <Link to="/">
            <img src={logo} alt="" style={{ width: "220px" }} />
          </Link>
        </Col>
        <Col span={10}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{ borderBottom: "none" }}
          />
        </Col>
        <Col span={4}>
          <Link to="/" type="text" onClick={() => console.log("Nhắn tin")}>
            <MessageOutlined className="style_icon" />
          </Link>
          <Link to="./shopcart">
            <Badge count={dataCart && dataCart.length} size="small">
              <ShoppingCartOutlined className="style_icon" />
            </Badge>
          </Link>
          <Link to="/login">
            <UserOutlined className="style_icon" />
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Header;
