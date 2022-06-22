import React from "react";
import './sidebar.scss';
import ProductList from './../ProductListComponent/ProductList';

class Sidebar extends React.Component{
    render(){
        return(
           <section className="sidebar">
            <div className="sidebar-column">
                <div>
                    <div className="first-row">
                        <li className="sidebar-column-header filter-header">Filter</li>
                        <li className="sidebar-column-header attributes-header">Attributes</li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li>     
                        <li className="sidebar-column-header attributes-header border-line"><a href="#">Show More...</a></li>
                    </div>
                    <div className="second-row">
                        <li className="sidebar-column-header attributes-header">Attributes</li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li className="border-line">
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text ">Option</label><br></br> 
                        </li> 
                    </div>
                    <div class="third-row">
                        <li className="sidebar-column-header attributes-header">Color</li>
                        <div className="color-section border-line">
                            <div className="black-color color-block "></div>
                            <div className="color-block white-color"></div>
                            <div className="color-block teal-green"></div>
                            <div className="color-block mustard-color"></div>
                            <div className="color-block blue-color"></div>
                            <div className="color-block red-color"></div>
                            <div className="color-block lavender-color"></div>
                            <div className="color-block pink-color"></div>
                            <div className="color-block dark-yellow"></div>
                            <div className="color-block linear-gradient-color"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="fourth-row">
                    <li className="sidebar-column-header attributes-header ">Attributes</li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li> 
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li>
                        <li>
                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                            <label for="option1" className="option-text">Option</label><br></br> 
                        </li>
                    </div>
                    
                </div>

                <div>
                    {/* <ProductList />  */}
                </div>
            </div> 
              
           
           </section>
        )
    }
}

export default Sidebar;