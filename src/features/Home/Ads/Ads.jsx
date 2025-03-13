import {
  CustomerServiceOutlined,
  DollarOutlined,
  SafetyOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";

const Ads = () => {
  const features = [
    {
      icon: <DollarOutlined style={{ fontSize: "24px" }} />,
      title: "MUA NHIỀU GIẢM NHIỀU",
      description: "Giảm giá lên tận 50%",
    },
    {
      icon: <TruckOutlined style={{ fontSize: "24px" }} />,
      title: "MIỄN PHÍ VẬN CHUYỂN",
      description: "Phạm vi trong khoảng 5km",
    },
    {
      icon: <CustomerServiceOutlined style={{ fontSize: "24px" }} />,
      title: "SẴN SÀNG HỖ TRỢ",
      description: "Chỉ cần liên hệ với chúng tôi",
    },
    {
      icon: <SafetyOutlined style={{ fontSize: "24px" }} />,
      title: "AN TOÀN THANH TOÁN",
      description: "Các cổng thanh toán uy tín",
    },
  ];
  return (
    <>
      <Row
        justify="center"
        style={{ marginTop: "50px", display: "flex", gap: "20px" }}
      >
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={5} key={index}>
            <Card variant="borderless" style={{ textAlign: "center" }}>
              {feature.icon}
              <h5 style={{ marginTop: "10px" }}>{feature.title}</h5>
              <p>{feature.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Ads;
