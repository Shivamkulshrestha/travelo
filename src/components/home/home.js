import React from "react";
import "../home/home.scss";
import Header from "../header";
import Button from "react-bootstrap/Button";
import Logo1 from "../../assests/images/home_page/logo1.svg";
import Logo2 from "../../assests/images/home_page/logo2.svg";
import Logo3 from "../../assests/images/home_page/logo3.svg";
import Logo4 from "../../assests/images/home_page/logo4.svg";
import Destination1 from "../../assests/images/home_page/Singapore.png";
import Destination2 from "../../assests/images/home_page/Thailand.png";
import Destination3 from "../../assests/images/home_page/Paris.png";
import Destination4 from "../../assests/images/home_page/New Zealand.png";
import Destination5 from "../../assests/images/home_page/Bora Bora.png";
import Destination6 from "../../assests/images/home_page/London.png";
import mountain1 from "../../assests/images/home_page/mountain.png";
import airplane1 from "../../assests/images/home_page/airplane.png";
import SearchLogo from "../../assests/images/home_page/search_icon.svg";

import { icons } from "../../icons/Icons";

export default function Home() {
  return (
    <div>
      <Header />

      <section>
        <div className="container">
          <div className="home_hero_section bg_property">
            <div className="hero_section_content">
              <h1 className="hero_main_heading">TRAVEL TO EXPLORE</h1>
              <p className="hero_main_para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                itaque eveniet ullam unde voluptates eaque cumque, perferendis
                culpa, voluptatem
              </p>
              <form>
                <div class="input">
                  <div class="row">
                    <div class="col-lg-3 border_line">
                      <h3 className="input_common_name">
                        Where You Want to go
                      </h3>
                      <div>
                        <img src={SearchLogo} alt="icon6" className="search_logo" />
                        <input
                          type="text"
                          placeholder="search your location"
                          className="input_field_common"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 border_line">
                      <h3 className="input_common_name ">Check In</h3>
                      <input
                        type="date"
                        className="input_field_common input_check"
                      />
                    </div>
                    <div class="col-lg-3">
                      <h3 className="input_common_name">Check Out</h3>
                      <input
                        type="date"
                        className="input_field_common input_check"
                      />
                    </div>
                    <div class="col-lg-3">
                      <Button variant="primary hero_btn">Explore Now</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="logo_div">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="logo_sub_div">
                  <figure>
                    <img src={Logo1} alt="Logo1" />
                  </figure>
                  <figcaption>
                    <h5 className="logo_div_heading">Get Best Prices</h5>
                    <p className="logo_div_para">
                      Pay through our application and save thousands and get
                      amazing rewards
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="logo_sub_div">
                  <figure>
                    <img src={Logo2} alt="Logo2" />
                  </figure>
                  <figcaption>
                    <h5 className="logo_div_heading">Covid Safe</h5>
                    <p className="logo_div_para">
                      We have all the curated hotels that have all the
                      precaution for a corvid safe environment
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="logo_sub_div">
                  <figure>
                    <img src={Logo3} alt="Logo3" />
                  </figure>
                  <figcaption>
                    <h5 className="logo_div_heading">Flexible Payment</h5>
                    <p className="logo_div_para">
                      Enjoy the flexible payment through our app and get rewards
                      on every payment
                    </p>
                  </figcaption>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="logo_sub_div">
                  <figure>
                    <img src={Logo4} alt="Logo4" />
                  </figure>
                  <figcaption>
                    <h5 className="logo_div_heading">Find The Best Near You</h5>
                    <p className="logo_div_para">
                      Find the best hotels and places to visit near you in a
                      single click
                    </p>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#d9ece14d" }}>
        <div className="container">
          <div className="recommended_destination">
            <h2 className="div_main_heading">Recommended Destination</h2>
            <div class="destination">
              <p class="p1">the Weekend break</p>
              <p>The package holiday</p>
              <p>group tour</p>
              <p>long term slow travel</p>
            </div>

            <div className="recommended_destination_sub">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="destination_main_list">
                    <figure>
                      <img src={Destination1} alt="Singapore" />
                    </figure>
                    <figcaption>
                      <h4 className="card_head">Singapore</h4>
                      <p className="card_para">
                        Singapore, officially the Republic of Singapore, is a
                        sovereign island city-state in maritime Southeast Asia.
                      </p>
                      <div class="icon div_icon">
                        <div className="logo_icon">
                          <a href="#">
                            <img src={icons.icon1} alt="icon1" />
                          </a>
                          <a href="#">
                            <img src={icons.icon2} alt="icon2" />
                          </a>
                          <a href="#">
                            <img src={icons.icon3} alt="icon3" />
                          </a>
                        </div>
                        <div className="rupee_icon">
                          <p>₹ 38,800</p>
                        </div>
                      </div>
                      <div class="icon">
                        <div className="time_icon">
                          <p>1000 Kms</p>
                        </div>
                        <div className="time_icon">
                          <p>Approx 2 night trip</p>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="destination_main_list">
                    <figure>
                      <img src={Destination2} alt="Thailand" />
                    </figure>
                    <figcaption>
                      <h4 className="card_head">Thailand</h4>
                      <p className="card_para">
                        Thailand is a Southeast Asian country. It's known for
                        tropical beaches, opulent royal palaces
                      </p>
                      <div class="icon div_icon">
                        <div className="logo_icon">
                          <a href="#">
                            <img src={icons.icon1} alt="icon1" />
                          </a>
                          <a href="#">
                            <img src={icons.icon2} alt="icon2" />
                          </a>
                          <a href="#">
                            <img src={icons.icon3} alt="icon3" />
                          </a>
                        </div>
                        <div className="rupee_icon">
                          <p>₹ 38,800</p>
                        </div>
                      </div>
                      <div class="icon">
                        <div className="time_icon">
                          <p>1000 Kms</p>
                        </div>
                        <div className="time_icon">
                          <p>Approx 2 night trip</p>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="destination_main_list">
                    <figure>
                      <img src={Destination3} alt="Paris" />
                    </figure>
                    <figcaption>
                      <h4 className="card_head">Paris</h4>
                      <p className="card_para">
                        Paris, France's capital, is a major European city and a
                        global center for art, fashion, gastronomy and culture.
                      </p>
                      <div class="icon div_icon">
                        <div className="logo_icon">
                          <a href="#">
                            <img src={icons.icon1} alt="icon1" />
                          </a>
                          <a href="#">
                            <img src={icons.icon2} alt="icon2" />
                          </a>
                          <a href="#">
                            <img src={icons.icon3} alt="icon3" />
                          </a>
                        </div>
                        <div className="rupee_icon">
                          <p>₹ 38,800</p>
                        </div>
                      </div>
                      <div class="icon">
                        <div className="time_icon">
                          <p>1000 Kms</p>
                        </div>
                        <div className="time_icon">
                          <p>Approx 2 night trip</p>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="destination_main_list">
                    <figure>
                      <img src={Destination4} alt="New Zealand" />
                    </figure>
                    <figcaption>
                      <h4 className="card_head">New Zealand</h4>
                      <p className="card_para">
                        New Zealand is an island country in the southwestern
                        Pacific Ocean. It consists of two main landmasses
                      </p>
                      <div class="icon div_icon">
                        <div className="logo_icon">
                          <a href="#">
                            <img src={icons.icon1} alt="icon1" />
                          </a>
                          <a href="#">
                            <img src={icons.icon2} alt="icon2" />
                          </a>
                          <a href="#">
                            <img src={icons.icon3} alt="icon3" />
                          </a>
                        </div>
                        <div className="rupee_icon">
                          <p>₹ 38,800</p>
                        </div>
                      </div>
                      <div class="icon">
                        <div className="time_icon">
                          <p>1000 Kms</p>
                        </div>
                        <div className="time_icon">
                          <p>Approx 2 night trip</p>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="destination_main_list">
                    <figure>
                      <img src={Destination5} alt="Bora Bora" />
                    </figure>
                    <figcaption>
                      <h4 className="card_head">Bora Bora</h4>
                      <p className="card_para">
                        Bora Bora is a small South Pacific island northwest of
                        Tahiti in French Polynesia. Surrounded by sand
                      </p>
                      <div class="icon div_icon">
                        <div className="logo_icon">
                          <a href="#">
                            <img src={icons.icon1} alt="icon1" />
                          </a>
                          <a href="#">
                            <img src={icons.icon2} alt="icon2" />
                          </a>
                          <a href="#">
                            <img src={icons.icon3} alt="icon3" />
                          </a>
                        </div>
                        <div className="rupee_icon">
                          <p>₹ 38,800</p>
                        </div>
                      </div>
                      <div class="icon">
                        <div className="time_icon">
                          <p>1000 Kms</p>
                        </div>
                        <div className="time_icon">
                          <p>Approx 2 night trip</p>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="destination_main_list">
                    <figure>
                      <img src={Destination6} alt="London" />
                    </figure>
                    <figcaption>
                      <h4 className="card_head">London</h4>
                      <p className="card_para">
                        London, the capital of England and the United Kingdom,
                        is a 21st-century city with history stretching
                      </p>
                      <div class="icon div_icon">
                        <div className="logo_icon">
                          <a href="#">
                            <img src={icons.icon1} alt="icon1" />
                          </a>
                          <a href="#">
                            <img src={icons.icon2} alt="icon2" />
                          </a>
                          <a href="#">
                            <img src={icons.icon3} alt="icon3" />
                          </a>
                        </div>
                        <div className="rupee_icon">
                          <p>₹ 38,800</p>
                        </div>
                      </div>
                      <div class="icon">
                        <div className="time_icon">
                          <p>1000 Kms</p>
                        </div>
                        <div className="time_icon">
                          <p>Approx 2 night trip</p>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="Blogs">
            <h2 className="div_main_heading">Blogs</h2>
            <div className="blogs_main">
              <div class="row">
                <div class="col-lg-6">
                  <div class="box_left">
                    <img
                      src={mountain1}
                      alt="Flying Kites"
                      class="img-fluid img1 opa"
                    />
                    <div class="text">
                      <h2>The Ultimate Guide to Climbing Mount Kilimanjaro</h2>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="blog_content2">
                    <div class="box_right">
                      <figure class="opa">
                        <img
                          src={airplane1}
                          alt="Flying Kites"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="text">
                        <h2>
                        12 Things I’d Tell Any New Traveler
                        </h2>
                      </div>
                    </div>

                    <div class="box_right">
                      <figure class="opa">
                        <img
                          src={airplane1}
                          alt="Flying Kites"
                          class="img-fluid"
                        />
                      </figure>
                      <div class="text">
                        <h2>
                        The Ultimate Packing List for Female Travelers
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="customer">
            <h2 className="div_main_heading">Happy Customers</h2>
            <div className="customer-main">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="customer_details">
                    <figure>
                      <img src={icons.icon4} alt="quotes" />
                    </figure>
                    <figcaption>
                      <p className="customer_para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ultricies mi eget mauris pharetra. Amet
                        risus nullam eget felis eget nunc lobortis.
                      </p>
                      <div className="customer_image mt-5">
                        <img src={icons.icon5} alt="no logo" />
                        <div className="customer_image_detail">
                          <h6>Shalini Singh</h6>
                          <p>Project Manger flyhigh</p>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-12">
                  <div className="customer_details">
                    <figure>
                      <img src={icons.icon4} alt="quotes" />
                    </figure>
                    <figcaption>
                      <p className="customer_para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ultricies mi eget mauris pharetra. Amet
                        risus nullam eget felis eget nunc lobortis.
                      </p>
                      <div className="customer_image mt-5">
                        <img src={icons.icon5} alt="no logo" />
                        <div className="customer_image_detail">
                          <h6>Shalini Singh</h6>
                          <p>Project Manger flyhigh</p>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="foot_main">
            <div className="row">
              <div className="col-lg-5 col-sm-12">
                <div className="footer_content">
                  <p>Copyright © 2020 Travelo. All rights reserved</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <ul className="footer_list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Places</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-12">
                <ul className="footer_logo">
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
