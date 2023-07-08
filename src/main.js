const teamArea = document.getElementById("myteamallmem");

let teamAll = "";

teamMembers.map((item, index) => {
  teamAll += `
  <div class="col-12 col-sm-6 col-lg-3 isotope-item marketing">
  <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
    <span class="thumb-info-wrapper">
      <a href="about-me.html">
        <img
          src="${item.memberImage}"
          class="img-fluid"
          alt=""
        />
        <span class="thumb-info-title">
          <span class="thumb-info-inner">${item.memberName}</span>
          <span class="thumb-info-type">${item.memberPosition}</span>
        </span>
      </a>
    </span>
    <span class="thumb-info-caption">
      <span class="thumb-info-caption-text"
        >${item.memberText}</span
      >
      <span class="thumb-info-social-icons mb-4">
        <a href="https://www.twitter.com/"
          ><i class="fab fa-twitter"></i><span>Twitter</span></a
        >
        <a href="http://www.linkedin.com/"
          ><i class="fab fa-linkedin-in"></i
          ><span>Linkedin</span></a
        >
      </span>
    </span>
  </span>
</div>

    
    `;
});

teamArea.innerHTML = teamAll;

console.log(teamArea);

//product Section

// const productArea = document.getElementById("mypro");

// let allProduct = "";

// productList.map((item, index) => {
//   allProduct += `
//   <div class="col-sm-6 col-lg-4">
//                     <div class="product mb-0">
//                       <div class="product-thumb-info border-0 mb-3">
//                         <div class="product-thumb-info-badges-wrapper">
//                           <span class="badge badge-ecommerce badge-success"
//                             >NEW</span
//                           ><span class="badge badge-ecommerce badge-danger"
//                             >27% OFF</span
//                           >
//                         </div>
//                         <div class="addtocart-btn-wrapper">
//                           <a
//                             href="shop-cart.html"
//                             class="text-decoration-none addtocart-btn"
//                             data-tooltip
//                             data-original-title="Add to Cart"
//                           >
//                             <i class="icons icon-bag"></i>
//                           </a>
//                         </div>
//                         <a
//                           href="ajax/shop-product-quick-view.html"
//                           class="quick-view text-uppercase font-weight-semibold text-2"
//                         >
//                           QUICK VIEW
//                         </a>
//                         <a href="shop-product-sidebar-left.html">
//                           <div
//                             class="product-thumb-info-image product-thumb-info-image-effect"
//                           >
//                             <img
//                               alt=""
//                               class="img-fluid"
//                               src="img/products/product-grey-7.jpg"
//                             />
//                             <img
//                               alt=""
//                               class="img-fluid"
//                               src="img/products/product-grey-7-2.jpg"
//                             />
//                           </div>
//                         </a>
//                       </div>
//                       <div class="d-flex justify-content-between">
//                         <div>
//                           <a
//                             href="#"
//                             class="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1"
//                             >accessories</a
//                           >
//                           <h3
//                             class="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"
//                           >
//                             <a
//                               href="shop-product-sidebar-right.html"
//                               class="text-color-dark text-color-hover-primary"
//                               >Porto Headphone</a
//                             >
//                           </h3>
//                         </div>
//                         <a
//                           href="#"
//                           class="text-decoration-none text-color-default text-color-hover-dark text-4"
//                           ><i class="far fa-heart"></i
//                         ></a>
//                       </div>
//                       <div title="Rated 5 out of 5">
//                         <input
//                           type="text"
//                           class="d-none"
//                           value="5"
//                           title=""
//                           data-plugin-star-rating
//                           data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"
//                         />
//                       </div>
//                       <p class="price text-5 mb-3">
//                         <span class="sale text-color-dark font-weight-semi-bold"
//                           >$199,00</span
//                         >
//                         <span class="amount">$99,00</span>
//                       </p>
//                     </div>
//                   </div>

//     `;
// });

// productArea.innerHTML = allProduct;
