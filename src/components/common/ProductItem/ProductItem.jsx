import React from 'react';

function ProductItem() {
  return (
    
    <div className="product-item rounded-lg shadow-md p-4">
      <div className=" product-img relative">
        <img
          src="https://bizweb.dktcdn.net/100/347/923/products/568497c-6.jpg?v=1597673112317" />
        <span className="product-note absolute top-2 right-2 bg-custom-red text-white px-2 py-1 text-xs font-bold rounded">New</span>
      </div>

      <div className="product-info mt-4">
        <h3 className="product-name text-lg font-semibold">Balance Running Arishi</h3>
        <div className="product-rate text-yellow-400 my-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div className="product-detail flex justify-between mt-2">
          <div className="product-price text-xl font-bold mt-1">1.199.999đ</div>
          <div className="product-icons space-x-2  ">
            <button className=" bg-light-gray hover:bg-red-600 hover:text-white transition-colors p-2 rounded-full ">
            <i class="fa-solid fa-heart fa-xl"></i>
            </button>
            <button className=" bg-light-gray hover:bg-blue-600 hover:text-white transition-colors p-2 rounded-full ">
              <i className="fa-solid fa-cart-shopping fa-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
