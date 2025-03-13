import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Ads from "../Ads/Ads";
import LatestProducts from "../LatestProducts/LatestProducts";
import LatestBlogs from "../LatestBlogs/LatestBlogs";
import Footer from "../../Footer/Footer";
import { fetchAllBannerApi } from "../../../services/bannerService";
import { getProductNew } from "../../../services/productService";

const HomePage = () => {
  const [dataBanner, setDataBanner] = useState([]);
  const [dataNewProduct, setNewProduct] = useState([]);

  useEffect(() => {
    fetchDataBrand();
    fetchProductNew();
  }, []);

  let fetchDataBrand = async () => {
    let res = await fetchAllBannerApi({
      limit: 6,
      page: 1,
      keyword: "",
    });
    console.log(res);
    if (res && res.errCode === 0) {
      setDataBanner(res.data);
    }
  };

  let fetchProductNew = async () => {
    let res = await getProductNew(8);
    if (res && res.errCode === 0) {
      setNewProduct(res.data);
    }
  };
  return (
    <div>
      <Banner dataBanner={dataBanner} />;
      <Ads />
      <LatestProducts dataNewProduct={dataNewProduct} />
      <LatestBlogs />
    </div>
  );
};

export default HomePage;
