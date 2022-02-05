import React, { useEffect } from "react";
import classes from "./HomeScreen.module.css";
import { useDispatch, useSelector } from 'react-redux'
import bgImage from "../../images/BgImage.jpg";
import exprtbg1 from "../../images/bg_1.jpg";
import exprtbg2 from "../../images/bg_2.jpg";
import TrendingProducts from "../../components/TendingProducts/TrendingProducts";
import { listProducts } from "../../actions/productActions";

const HomeScreen = ({ history, match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;


  // const products = useSelector((state) => state.productList);
  // console.log("products*************", products)

  const dispatch = useDispatch();


  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, history]);

  return (
    <>
      <div className={classes.banner}>
        <img src={bgImage} className={classes.backgroundImg} />
        <div className={classes.centered}>
          <h2 className={classes.subtitle}>
            Effective Medicine Means Healthier Life
          </h2>
          <h1 className={classes.bannerHeading}>Welcome To Pharma</h1>
        </div>
      </div>

      <div className={classes.couponContainer}>
        <div className={classes.CopBox1}>
          <h5 className={classes.italic}>
            Sale Ends <br/>Tomorrow!!!
          </h5>
          <h6>Get flat 25% off</h6>
          <p>
            on Body and Skincare
          </p>
        </div>
        <div className={classes.CopBox2}>
          <h5 className={classes.italic}>
            Free <br />
            Delivery
          </h5>
          <h6>#Switch To Safety</h6>
          <p>
            No minimum order value!!!<br/>
            Same Day Delivery
          </p>
        </div>
        <div className={classes.CopBox3}>
          <h5 className={classes.italic}>
            StopThe<br/>Spread!!!
          </h5>
          <h6>Shop to stay protected</h6>
          <p>
            Get upto 90% off on Covid essentials
          </p>
        </div>
      </div>

      <h4>NEW PRODUCTS</h4>
      <div className={classes.pop_Prods}>
        {products && products.map((product) => (
          <div key={product._id}>
            <img src={product.image} style={{ maxWidth: "100%", margin: "auto" }} />
            <h5 className={classes.italic}>{product.name}</h5>
            <p>&#8377; {product.mrp}</p>
          </div>
        ))}

        {/* <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 80</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div>
        <div>
          <img src={product2} style={{ maxWidth: "100%", margin: "auto" }} />
          <h5 className={classes.italic}>Chanca Piedra</h5>
          <p>&#8377; 70</p>
        </div> */}
      </div>

      <TrendingProducts />
      <div className={classes.exprtContainer}>
        <div style={{ position: "relative" }}>
          <img src={exprtbg1} className={classes.exprt} />
          <h1 className={classes.pharmaHeading}>Pharma Products</h1>
          <p className={classes.pharmasubHeading}>
            We believe in highly effective and certified products only
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <img src={exprtbg2} className={classes.exprt} />
          <h1 className={classes.exprtHeading}>Rated by Experts</h1>
          <p className={classes.exprtsubHeading}>
            Your health is our priority. We only sell highly rated products.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
