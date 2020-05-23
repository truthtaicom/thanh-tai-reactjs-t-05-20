import React from 'react'


function Content() {
  return (
    <div className="col-xl-9 col-lg-8">
      {/* tab filter */}
      <div className="row mb-10">
        <div className="col-xl-5 col-lg-6 col-md-6">
          <div className="product-showing mb-40">
            <p>Showing 1–22 of 32 results</p>
          </div>
        </div>
      </div>
      {/* tab content */}
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="row">
            {/* ProductItem */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro1.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro2.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /ProductItem */}
            {/* ProductItem */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro2.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro3.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                  <div className="sale-tag">
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /ProductItem */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro3.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro4.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro4.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro5.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro5.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro6.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro6.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro7.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro7.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro8.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro8.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro9.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                  <div className="sale-tag">
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro9.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro1.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro9.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro1.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro11.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro12.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                  <a href="#">
                    <img src="./assets/pro10.jpg" alt="" />
                    <img className="secondary-img" src="./assets/pro11.jpg" alt="" />
                  </a>
                  <div className="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                      <i className="fas fa-shopping-cart" />
                    </a>
                    <a href="#" title="Quick View">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                  <div className="sale-tag">
                    <span className="sale">sale</span>
                  </div>
                </div>
                <div className="product-content pr-0">
                  <div className="pro-cat mb-10">
                    <a href="#">furniture</a>
                  </div>
                  <h4>
                    <a href="#">Minimal Deco Furniture</a>
                  </h4>
                  <div className="product-meta">
                    <div className="pro-price">
                      <span>$119.00 USD</span>
                      <span className="old-price">$230.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content
