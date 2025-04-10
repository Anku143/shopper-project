import React from "react";
import "./NewsLetter.css";
import news_letter from "../../assets/newsletter.png";

const NewsLetter = () => {
  return (
    <div className="news-main">
      <div className="container">
        <div className="news">
          <div className="news-letter">
            <div className="newsletter text-center">
              <h2 className="text-[40px] font-[500]">Join Our Newsletter</h2>
              <p className="newspara text-[18px] font-[400]">
                Big discounts right to your inbox.
              </p>

              <form action="" className="news-form">
                <label for="email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.07577 6.53075C4.23201 6.01858 4.70828 5.646 5.27156 5.646H19.2716C19.8349 5.646 20.3111 6.01858 20.4674 6.53075L12.2716 11.9946L4.07577 6.53075ZM2.5216 6.88226C2.52146 6.89026 2.52145 6.89826 2.52156 6.90625V16.896C2.52156 18.4148 3.75278 19.646 5.27156 19.646H19.2716C20.7903 19.646 22.0216 18.4148 22.0216 16.896V6.90622M20.5216 8.29738V16.896C20.5216 17.5864 19.9619 18.146 19.2716 18.146H5.27156C4.58121 18.146 4.02156 17.5864 4.02156 16.896V8.29738L11.8555 13.52C12.1075 13.688 12.4357 13.688 12.6876 13.52L20.5216 8.29738ZM22.0215 6.88229C22.0141 5.36981 20.7858 4.146 19.2716 4.146H5.27156C3.75736 4.146 2.52899 5.3698 2.5216 6.88226"
                      fill="#121212"
                    />
                  </svg>
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="newsemail"
                />
                <button type="submit" className="color-black fw-500 newsbtn">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
          <div className="news-letter-img">
            <img src={news_letter} alt="newsletter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
