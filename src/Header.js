import React from "react";
import "./Header.css";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {  
  return (
    <div className="header">
      
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <ManageSearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">FashGram</span>
        </div>

        
          <div className="header__optionBasket">
             <ShoppingBasketIcon /> 
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;