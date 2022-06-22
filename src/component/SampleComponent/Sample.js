import React from "react";
import './sample.scss';
import like_icon from './../../asset/heart.png';
import edit_icon from './../../asset/edit-2.png';
import delete_icon from './../../asset/trash-2.png';
import button_image from './../../asset/PP_BTN.png'
import image from './../../asset/bannerImage.jpg';

class Sample extends React.Component{
    render(){
        return(
            <section className="cart-section">
                <div className="wrapper">
                <div className="cart-details">
                  <h2>Your Shopping Bag</h2>
                    <div className="cart-page-grid">
                        <div className="cart-product-detail-section">
                            <div className="cart-product-image-section">
                                <img src={image} className="cart-image" alt="Cart-Image"  />
                            </div>
                            <div className="product-details-section">
                                <label className="name">Electric Leggins</label>
                                <label className="size">Size:</label>
                                <label className="color">Color:</label>
                                <h4>$99.00</h4>
                            </div>
                        </div>
                        <div className="cart-product-quantity-section">
                            <div className="quantity-info">
                                <div className="quantity-section">
                                    <div className="minus-quantity">-</div>                                    
                                    <div className="number-block">1</div>
                                    <div className="add-quantity">+</div>
                                </div>
                            </div>
                        </div>
                        <div className="edit-details-section">
                          <div className="edit">
                            <img src={edit_icon} className="icon" alt="Edit Icon" />
                            <label className="icon-name">Edit</label>
                          </div>
                          <div className="remove">
                            <img src={delete_icon} className="icon" alt="Delete Icon" />
                            <label className="icon-name">Delete</label>
                          </div>
                          <div className="saveForLater">
                            <img src={like_icon} className="icon" alt="Like Icon" />
                            <label className="icon-name">Save for later</label>
                          </div>  
                        </div>
                        <div className="pricing-section">
                            <div className="price-summary">
                                <div className="price-header">Pricing Summary</div>
                                <div className="price-details">
                                    <div className="">Subtotal</div>
                                    <div className="">$388.00</div>
                                </div>
                                <div className="price-details">
                                    <div className="">Coupon</div>
                                    <div className="">-$77.00</div>
                                </div>
                                <div className="price-details">
                                    <div className="">Gift Card</div>
                                    <div className="">-$100</div>
                                </div>
                                <div className="price-details">
                                    <div className="">Estimated Tax</div>
                                    <div className="">-$23.28</div>
                                </div>
                                <div className="price-details">
                                    <div className="">Estimated Shipping</div>
                                    <div className="">FREE</div>
                                </div>
                                <div className="price-details">
                                    <div className="">Estimated Total</div>
                                    <div className="">$233.68</div>
                                </div>
                                <div className="">
                                    <div className="">
                                        <button class="button">Checkout</button>
                                    </div>
                                    <div className="">
                                    <img src={button_image} className="button-image" alt="Paypal-Image"  />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="estimation-block">
                        <div className="estimated-values-section">
                            <div className="est-flex">
                                <label>Estimate your shipping</label>
                                <label>Shipping to 911006</label>
                            </div>
                            <div className="est-flex">
                                <label>Enter a Coupon Code</label>
                                <label>20% discount applied</label>
                            </div>
                            <div className="est-flex">
                                <label>Apply a Gift Card</label>
                                <label></label>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>

                </div>
            </section>
        )
    }
}

export default Sample;