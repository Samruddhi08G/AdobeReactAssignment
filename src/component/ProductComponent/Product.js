import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import like_icon from './../../asset/heart.png';
import './product.scss';


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderProductList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="productList-section">
                <div className="productList-grid1">
                    <div className="productList-items">
                        <Link to={`/product/${id}`}>
                            <div key={id} className="productList-image-section">
                                <img src={image} className="productListImage" alt={title} />
                            </div>
                        </Link>
                        <div className="productList-name-section">
                            <label>{title}</label>
                            <div className="productList-price">
                                <label>{price}</label>
                            </div>
                            <img src={like_icon} className="" alt="Like Icon" />

                        </div>
                    </div>

                </div>

            </div>
        );
    });
    return <div className="productList-grid">{renderProductList}

    </div>;


};

export default ProductComponent;


