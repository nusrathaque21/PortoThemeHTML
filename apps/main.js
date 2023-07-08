const productArea = document.getElementById("mypro");

let allProduct = "";

productList.map((item, index) => {
  allProduct += `
  <div class="col-sm-6 col-lg-4">
                    <div class="product mb-0">
                      <div class="product-thumb-info border-0 mb-3">
                        <div class="product-thumb-info-badges-wrapper">
                          <span class="badge badge-ecommerce badge-success"
                            >NEW</span
                          ><span class="badge badge-ecommerce badge-danger"
                            >27% OFF</span
                          >
                        </div>
                        <div class="addtocart-btn-wrapper">
                          <a
                            href="shop-cart.html"
                            class="text-decoration-none addtocart-btn"
                            data-tooltip
                            data-original-title="Add to Cart"
                          >
                            <i class="icons icon-bag"></i>
                          </a>
                        </div>
                        <a
                          href="ajax/shop-product-quick-view.html"
                          class="quick-view text-uppercase font-weight-semibold text-2"
                        >
                          QUICK VIEW
                        </a>
                        <a href="shop-product-sidebar-left.html">
                          <div
                            class="product-thumb-info-image product-thumb-info-image-effect"
                          >
                            <img
                              alt=""
                              class="img-fluid"
                              src="${item.productImage}"
                            />
                            <img
                              alt=""
                              class="img-fluid"
                              src="${item.productImageTwo}"
                            />
                          </div>
                        </a>
                      </div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <a
                            href="#"
                            class="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1"
                            ></a
                          >${item.productCatagory}
                          <h3
                            class="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"
                          >
                            <a
                              href="shop-product-sidebar-right.html"
                              class="text-color-dark text-color-hover-primary"
                              >${item.productName}</a
                            >
                          </h3>
                        </div>
                        <a
                          href="#"
                          class="text-decoration-none text-color-default text-color-hover-dark text-4"
                          ><i class="far fa-heart"></i
                        ></a>
                      </div>
                      <div title="Rated 5 out of 5">
                        <input
                          type="text"
                          class="d-none"
                          value="5"
                          title=""
                          data-plugin-star-rating
                          data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"
                        />
                      </div>
                      <p class="price text-5 mb-3">
                        <span class="sale text-color-dark font-weight-semi-bold"
                          >$ ${item.productPrice}</span
                        >
                        <span class="amount">$ ${item.salePrice}</span>
                      </p>
                    </div>
                  </div>

    `;
});

productArea.innerHTML = allProduct;

console.log(productArea);

//other sidebar

const sideBar = document.getElementById("otherpro");

let sideProducts = "";

leftSide.map((item, index) => {
  sideProducts += `
  <div
  class="product row row-gutter-sm align-items-center mb-4"
>
  <div class="col-5 col-lg-5">
    <div class="product-thumb-info border-0">
      <a href="shop-product-sidebar-left.html">
        <div class="product-thumb-info-image">
          <img
            alt=""
            class="img-fluid"
            src="${item.productImage}"
          />
        </div>
      </a>
    </div>
  </div>
  <div class="col-7 col-lg-7 ml-md-0 ml-lg-0 pl-lg-1 pt-1">
    <a
      href="#"
      class="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-2"
      >${item.productCatagory}</a
    >
    <h3
      class="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"
    >
      <a
        href="shop-product-sidebar-right.html"
        class="text-color-dark text-color-hover-primary text-decoration-none"
        >${item.productName}</a
      >
    </h3>
    <div title="Rated 5 out of 5">
      <input
        type="text"
        class="d-none"
        value="5"
        title=""
        data-plugin-star-rating
        data-plugin-options="{'displayOnly': true, 'color': 'dark', 'size':'xs'}"
      />
    </div>
    <p class="price text-4 mb-0">
      <span
        class="sale text-color-dark font-weight-semi-bold"
        >$ ${item.productPrice}</span
      >
      <span class="amount">$ ${item.salePrice}</span>
    </p>
  </div>
</div>
    `;
});

sideBar.innerHTML = sideProducts;
