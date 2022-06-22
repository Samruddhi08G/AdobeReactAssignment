import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct, removeSelectedProduct,} from "../../redux/actions/productsActions";
import './productdetails.scss';
import color1 from './../../asset/Swatch 01.png';
import color2 from './../../asset/Swatch 02.png';
import color3 from './../../asset/Swatch 03.png';
import color4 from './../../asset/Swatch 04.png';
import like_icon from './../../asset/heart.png';
import share_icon from './../../asset/share-2.png';
import ProductDescription from './../ProductDescription/ProductDescription';
import { useNavigate } from "react-router-dom";



const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/cart/:productId`; 
    navigate(path);
  }
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <section className="productDetails-section">
      <div className="wrapper">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : ( 
            <div className="productDetails">
              <div>
              <div class="prodcutDetails-grid">
                <div className="productDetails-column1">
                    <div className="column1-image">
                      <img src={image} className="image1" alt="Image1"  />
                      <img src={image} className="image1" alt="Image1"  />
                      <img src={image} className="image1" alt="Image1"  />
                      <img src={image} className="image1" alt="Image1"  />
                      <img src={image} className="image1" alt="Image1"  />
                    </div>
                </div>
                <div className="productDetails-column2">
                  <img src={image} className="image2" alt="Image2" />
                </div>
                <div className="productDetails-column3">
                  <div className="product-info">
                      <label className="productdetails-breadcrumb">Clothing/ Women's/ outerwear</label>
                      <h2>{title}</h2>
                      <h4>${price}</h4>
                      <p className="dummy-text">{description}</p>
                   </div>
                   <div className="color-info">
                       <h4>Color</h4>
                        <div className="triangle-color-section">
                           <div className="blue-triangle">
                              <img src={color1} className="color-div" alt="Blue-color-triangle" /> 
                           </div>
                           <div className="pink-triangle">
                              <img src={color2} className="color-div" alt="Pink-color-triangle" /> 
                           </div>
                           <div className="black-triangle">
                              <img src={color3} className="color-div" alt="Black-color-triangle" /> 
                           </div>
                           <div className="grey-triangle">
                              <img src={color4} className="color-div" alt="Grey-color-triangle" /> 
                           </div>
                        </div>
                    </div>
                    <div className="size-buttons">
                      <h4>Size</h4>
                      <div className="size-section">
                          <div className="size-block">XS</div>
                          <div className="size-block">S</div>  
                          <div className="size-block">M</div>
                          <div className="size-block">L</div>
                          <div className="size-block">XL</div>
                      </div>
                   </div>
                   <div className="quantity-info">
                      <h4>Quantity</h4>
                      <div className="quantity-section-product-details">
                        <div className="minus-quantity">-</div>                                    
                          <div className="number-block">1</div>
                          <div className="add-quantity">+</div>
                      </div>
                  </div>
                  <div class="buttons-icon-section">
                    
                      <button class="pd-button" onClick={routeChange}>Add to Cart</button>
                    
                    <div className="like-icon-section">
                        <img src={like_icon} className="icon" alt="Like Icon" />
                        <label className="icons">Save</label>
                        <img src={share_icon} className="icon" alt="Share Icon" />
                        <label className="icons">Share</label>
                    </div>
                  </div>

                </div>

              </div>
            </div>
            </div>
          )}
          <div>
            <ProductDescription />
          </div>
      </div>
       
    </section>
    
  );
};

export default ProductDetails;




































