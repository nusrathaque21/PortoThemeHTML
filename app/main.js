const fullSlider = document.querySelector(".owl-stage-outer");

let slideList = "";

slides.map((item, index) => {
  slideList += `<div class="owl-stage">
  <div
    class="owl-item position-relative"
    style="
      background-image: url(https://static-cse.canva.com/blob/571910/PerfectWebBannerAdfeaturedimage1.jpg);
      background-color: #2e3136;
      background-size: cover;
      background-position: center;
    "
  >
    <div class="container position-relative z-index-1 h-100">
      <div
        class="d-flex flex-column align-items-center justify-content-center h-100"
      >
        <h3
          class="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
          data-appear-animation="fadeInDownShorter"
          data-plugin-options="{'minWindowWidth': 0}"
        >
          <span
            class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3"
          >
            <img
              src="img/slides/slide-title-border.png"
              class="w-auto appear-animation"
              data-appear-animation="fadeInLeftShorter"
              data-appear-animation-delay="250"
              data-plugin-options="{'minWindowWidth': 0}"
              alt=""
            />
          </span>
          ${item.heading1}
          <span class="position-relative"
            >NEW
            <span
              class="position-absolute left-50pct transform3dx-n50 top-0 mt-4"
              ><img
                src="img/slides/slide-blue-line.png"
                class="w-auto appear-animation"
                data-appear-animation="fadeInLeftShorterPlus"
                data-appear-animation-delay="1000"
                data-plugin-options="{'minWindowWidth': 0}"
                alt="" /></span
          ></span>
          <span
            class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3"
          >
            <img
              src="img/slides/slide-title-border.png"
              class="w-auto appear-animation"
              data-appear-animation="fadeInRightShorter"
              data-appear-animation-delay="250"
              data-plugin-options="{'minWindowWidth': 0}"
              alt=""
            />
          </span>
        </h3>
        <h1
          class="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
          data-appear-animation="blurIn"
          data-appear-animation-delay="500"
          data-plugin-options="{'minWindowWidth': 0}"
        >
          ${item.heading2}
        </h1>
        <p
          class="text-4 text-color-light font-weight-light opacity-7 mb-0"
          data-plugin-animated-letters
          data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0}"
        >
          ${item.text}
        </p>
      </div>
    </div>
  </div>

  <div
    class="owl-item position-relative overlay overlay-show overlay-op-8 lazyload"
    data-bg-src="img/slides/slide-bg-2.jpg"
    style="background-size: cover; background-position: center"
  >
    <div class="container position-relative z-index-3 h-100">
      <div
        class="row justify-content-center align-items-center h-100"
      >
        <div class="col-lg-6">
          <div class="d-flex flex-column align-items-center">
            <h3
              class="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
              data-appear-animation="fadeInDownShorter"
              data-plugin-options="{'minWindowWidth': 0}"
            >
              <span
                class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3"
              >
                <img
                  src="img/lazy.png"
                  data-src="img/slides/slide-title-border.png"
                  class="w-auto appear-animation lazyload"
                  data-appear-animation="fadeInLeftShorter"
                  data-appear-animation-delay="250"
                  data-plugin-options="{'imgFluid': false, 'minWindowWidth': 0}"
                  alt=""
                />
              </span>
              WE WORK HARD AND PORTO HAS
              <span
                class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3"
              >
                <img
                  src="img/lazy.png"
                  data-src="img/slides/slide-title-border.png"
                  class="w-auto appear-animation lazyload"
                  data-appear-animation="fadeInRightShorter"
                  data-appear-animation-delay="250"
                  data-plugin-options="{'imgFluid': false, 'minWindowWidth': 0}"
                  alt=""
                />
              </span>
            </h3>
            <h2
              class="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
              data-appear-animation="blurIn"
              data-appear-animation-delay="500"
              data-plugin-options="{'minWindowWidth': 0}"
            >
              THE BEST DESIGN
            </h2>
            <p
              class="text-4 text-color-light font-weight-light opacity-7 text-center mb-0"
              data-plugin-animated-letters
              data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 30}"
            >
              Trusted by over
              <strong class="text-color-light">40,000</strong>
              satisfied users, Porto is a huge success in the one of
              largest world's MarketPlace
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="owl-item position-relative overlay overlay-color-primary overlay-show overlay-op-8 lazyload"
    data-bg-src="img/slides/slide-bg-6.jpg"
    style="background-size: cover; background-position: center"
  >
    <div class="container position-relative z-index-3 h-100">
      <div
        class="row justify-content-center align-items-center h-100"
      >
        <div class="col-lg-6">
          <div class="d-flex flex-column align-items-center">
            <h3
              class="position-relative text-color-light text-4 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
              data-appear-animation="fadeInDownShorter"
              data-plugin-options="{'minWindowWidth': 0}"
            >
              <span
                class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3"
              >
                <img
                  src="img/lazy.png"
                  data-src="img/slides/slide-title-border.png"
                  class="w-auto appear-animation lazyload"
                  data-appear-animation="fadeInLeftShorter"
                  data-appear-animation-delay="250"
                  data-plugin-options="{'imgFluid': false, 'minWindowWidth': 0}"
                  alt=""
                />
              </span>
              WE CREATE DESIGNS, WE ARE
              <span
                class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3"
              >
                <img
                  src="img/lazy.png"
                  data-src="img/slides/slide-title-border.png"
                  class="w-auto appear-animation lazyload"
                  data-appear-animation="fadeInRightShorter"
                  data-appear-animation-delay="250"
                  data-plugin-options="{'imgFluid': false, 'minWindowWidth': 0}"
                  alt=""
                />
              </span>
            </h3>
            <h2
              class="porto-big-title text-color-light font-weight-extra-bold mb-3"
              data-plugin-animated-letters
              data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 300, 'animationName': 'fadeInRightShorterOpacity', 'letterClass': 'd-inline-block'}"
            >
              PORTO
            </h2>
            <p
              class="text-4 text-color-light font-weight-light text-center mb-0"
              data-plugin-animated-letters
              data-plugin-options="{'startDelay': 2000, 'minWindowWidth': 0}"
            >
              The best choice for your new website
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
});

fullSlider.innerHTML = slideList;

//starting client part

const clientArea = document.getElementById("clientslider");
let clientlogo = "";
clients.map((item, index) => {
  clientlogo += `
  <div>
                <img class="img-fluid" src="${item.image}" alt="" />
              </div>
  `;
});

clientArea.innerHTML = clientlogo;

console.log(clientArea);

//feature part

const reviewArea = document.getElementById("houseofgucci");

let dateReview = "";

features.map((item, index) => {
  dateReview += `
  <div class="row">
    <div class="col-lg-6 mb-4 mb-lg-0" >
                          <article>
                         <div class="row">
                              <div class="col-auto pr-0">
                                <div class="date">
                                  <span class="day font-weight-extra-bold"
                                    >${item.date}</span
                                  >
                                  <!- <span class="month text-1">${item.month}</span> 
                                </div>
                              </div>
                              <div class="col pl-1">
                                <h4 class="text-primary text-4">
                                  <a class="d-block" href="blog-post.html"
                                    >${item.mainheading}</a
                                  >
                                </h4>
                                <p class="pr-4 mb-0">
                                ${item.textcontent}
                                </p>
                                <a
                                  href="https://www.okler.net/"
                                  class="read-more text-color-dark font-weight-semibold text-2"
                                  >read more
                                  <i
                                    class="fas fa-angle-right position-relative top-1 ml-1"
                                  ></i
                                ></a>
                              </div>
                            </div> 
                          </article>
                        </div>
                        <div class="col-lg-6">
                        <article>
                        <div class="row">
                           <div class="col-auto pr-0">
                             <div class="date">
                               <span class="day font-weight-extra-bold"
                                 >${item.date}</span
                               >
                               <span class="month text-1">${item.month}</span>
                             </div>
                           </div>
                           <div class="col pl-1">
                             <h4 class="text-primary text-4">
                               <a class="d-block" href="blog-post.html"
                                 >${item.mainheading}</a
                               >
                             </h4>
                             <p class="pr-4 mb-0">
                             ${item.textcontent}
                             </p>
                             <a
                               href="https://www.okler.net/"
                               class="read-more text-color-dark font-weight-semibold text-2"
                               >read more
                               <i
                                 class="fas fa-angle-right position-relative top-1 ml-1"
                               ></i
                             ></a>
                           </div>
                         </div> 
                       </article>
                        </div>
                      </div>
                            
  `;
});

reviewArea.innerHTML = dateReview;

//testimonial part

const testimonialArea = document.getElementById("all-test");

let testReview = "";

testimonial.map((item, index) => {
  testReview += `
<div>
<div class="col">
  <div class="testimonial testimonial-primary">
    <blockquote>
      <p class="mb-0">
        ${item.comment}
      </p>
    </blockquote>
    <div class="testimonial-arrow-down"></div>
    <div class="testimonial-author">
      <div class="testimonial-author-thumbnail">
        <img
          src="${item.authorImage}"
          class="rounded-circle"
          alt=""
        />
      </div>
      <p><strong>${item.authorName}</strong><span>${item.authorCompany}</span></p>
    </div>
  </div>
</div>
</div>

  `;
});

testimonialArea.innerHTML = testReview;

//accordeon area

const accordionArea = document.getElementById("accordion");

let accordionSection = "";

accordion.map((item, index) => {
  accordionSection += `
  <div class="card card-default">
  <div class="card-header">
    <h4 class="card-title m-0">
      <a
        class="accordion-toggle text-color-dark font-weight-bold"
        data-toggle="collapse"
        data-parent="#accordion"
        href="#collapseOne"
      >
        <i class="icons icon-diamond text-color-primary"></i>
        ${item.accorTitle}
      </a>
    </h4>
  </div>
  <div id="collapseOne" class="collapse show">
    <div class="card-body text-2">
      <p>
      ${item.accorText}
      </p>
      <p class="mb-0">
        Adipiscing elit phasellus blanit ma...
        <a
          href="#"
          class="d-block text-color-dark font-weight-semibold pt-4"
          >${item.accorButton}
          <i
            class="fas fa-angle-right position-relative top-1 ml-1"
          ></i
        ></a>
      </p>
    </div>
  </div>
</div>

  `;
});

accordionArea.innerHTML = accordionSection;

console.log(accordionArea);
