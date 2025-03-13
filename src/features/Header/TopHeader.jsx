import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { Col, Row } from "antd";

const TopMenu = (props) => {
  let name = props.user && props.user.id ? `${props.user && props.user.firstName ? props.user.firstName : ''} ${props.user.lastName}` : ''

  let handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <>
      <Row
        align="middle"
        justify="center"
        style={{
          fontSize: "15px",
          textAlign: "center",
          background: "#f6f6f6",
        }}
      >
        <Col span={12}>
          <p>Điện thoại: 0388361203 | email: dangninh020@gail.com</p>
        </Col>
        <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
          <ul style={{ display: "flex", gap: "10px" }}>
            <li style={{ cursor: "pointer", display: "inline-block" }}>
              {props.user && props.user.id ? (
                <NavLink
                  exact
                  to={`/user/detail/${
                    props.user && props.user.id ? props.user.id : ""
                  }`}
                >
                  {name}
                </NavLink>
              ) : (
                <a href="/login" style={{ textDecoration: "none" }}>
                  Đăng nhập
                </a>
              )}
            </li>
            <li style={{ display: "inline-block" }}>|</li>
            <li style={{ cursor: "pointer", display: "inline-block" }}>
              {props.user && props.user.id ? (
                <a onClick={() => handleLogout()}>Đăng xuất</a>
              ) : (
                <a href="/login">Đăng ký</a>
              )}
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default TopMenu;
