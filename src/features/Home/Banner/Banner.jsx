import { Carousel } from "antd";
import React from "react";

const Banner = (props) => {
  const { dataBanner } = props;
  // console.log("dataBanner", dataBanner);

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Carousel autoplay>
        {dataBanner && dataBanner.length > 0 ? (
          dataBanner.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={`banner-${index}`}
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "50px" }}>
            Không có ảnh
          </div>
        )}
      </Carousel>
    </>
  );
};

export default Banner;
