import React, { useEffect } from "react";
import { intersectingAnimation } from "../../lib/helpers";
import HowWeWorkItem from "./HowWeWorkItem";

const HowWeWork = () => {
  useEffect(() => {
    intersectingAnimation();
  }, []);

  const how_we_work_items = [
    {
      url: "/services-details",
      count: "01",
      delay: "0.2",
      title: "Find Us Fast Now",
      desc: `Lorem ipsum is simply free text dolor adipi ensure everyone.`,
      icon: (
        <>
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.0152 25.7332C28.7273 24.6165 29.1319 23.2732 29.1319 21.8489C29.1319 17.8028 25.895 14.566 21.8489 14.566C17.8028 14.566 14.566 17.8028 14.566 21.8489C14.566 25.895 17.8028 29.1319 21.8489 29.1319C23.257 29.1319 24.5841 28.7273 25.7008 28.0314L30.7504 33L33 30.7504L28.0152 25.7332ZM21.8489 25.895C20.7759 25.895 19.7467 25.4688 18.9879 24.71C18.2291 23.9512 17.8028 22.922 17.8028 21.8489C17.8028 20.7759 18.2291 19.7467 18.9879 18.9879C19.7467 18.2291 20.7759 17.8028 21.8489 17.8028C22.922 17.8028 23.9512 18.2291 24.71 18.9879C25.4688 19.7467 25.895 20.7759 25.895 21.8489C25.895 22.922 25.4688 23.9512 24.71 24.71C23.9512 25.4688 22.922 25.895 21.8489 25.895ZM4.85532 27.5135V14.566H0L16.1844 0L32.3688 14.566H29.4232C28.0291 13.1065 26.2412 12.0832 24.2766 11.6204L16.1844 4.35361L8.0922 11.6366V24.2766H11.6204C11.8955 25.4419 12.3649 26.5262 12.9961 27.5135H4.85532Z"
              fill="currentcolor"
            />
          </svg>
        </>
      ),
    },
    {
      url: "/services-details",
      count: "02",
      delay: "0.4",
      title: "Choose Services",
      desc: `Lorem ipsum is simply free text dolor adipi ensure everyone.`,
      icon: (
        <>
          <svg
            width="39"
            height="37"
            viewBox="0 0 39 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.7119 12.95L28.6859 8.51L24.2656 6.475L28.6859 4.44L30.7119 0L32.7379 4.44L37.1582 6.475L32.7379 8.51L30.7119 12.95ZM34.3955 25.9L32.9221 22.755L29.791 21.275L32.9221 19.795L34.3955 16.65L35.8689 19.795L39 21.275L35.8689 22.755L34.3955 25.9ZM10.4522 37L9.89965 32.6525C9.65407 32.56 9.41648 32.4367 9.18687 32.2825C8.95603 32.1283 8.76387 31.9742 8.61039 31.82L4.55844 33.5775L0 25.53L3.45336 22.94V21.46L0 18.87L4.55844 10.8225L8.61039 12.58C8.76387 12.4258 8.95603 12.2717 9.18687 12.1175C9.41648 11.9633 9.65407 11.84 9.89965 11.7475L10.4522 7.4H19.6612L20.2137 11.7475C20.4593 11.84 20.6975 11.9633 20.9283 12.1175C21.1579 12.2717 21.3495 12.4258 21.503 12.58L25.5549 10.8225L30.1133 18.87L26.66 21.46V22.94L30.1133 25.53L25.5549 33.5775L21.503 31.82C21.3495 31.9742 21.1579 32.1283 20.9283 32.2825C20.6975 32.4367 20.4593 32.56 20.2137 32.6525L19.6612 37H10.4522ZM15.0567 27.75C16.5915 27.75 17.8961 27.2104 18.9705 26.1313C20.0449 25.0521 20.5821 23.7417 20.5821 22.2C20.5821 20.6583 20.0449 19.3479 18.9705 18.2688C17.8961 17.1896 16.5915 16.65 15.0567 16.65C13.5218 16.65 12.2172 17.1896 11.1429 18.2688C10.0685 19.3479 9.53129 20.6583 9.53129 22.2C9.53129 23.7417 10.0685 25.0521 11.1429 26.1313C12.2172 27.2104 13.5218 27.75 15.0567 27.75ZM15.0567 24.05C14.5348 24.05 14.0971 23.8724 13.7435 23.5172C13.3911 23.1632 13.2149 22.7242 13.2149 22.2C13.2149 21.6758 13.3911 21.2361 13.7435 20.8809C14.0971 20.527 14.5348 20.35 15.0567 20.35C15.5785 20.35 16.0162 20.527 16.3699 20.8809C16.7223 21.2361 16.8985 21.6758 16.8985 22.2C16.8985 22.7242 16.7223 23.1632 16.3699 23.5172C16.0162 23.8724 15.5785 24.05 15.0567 24.05ZM13.6753 33.3H16.438L16.8064 29.97C17.6966 29.7233 18.4566 29.4076 19.0865 29.0228C19.7152 28.6368 20.3365 28.12 20.9504 27.4725L23.9894 28.86L25.2786 26.5475L22.608 24.5125C22.8536 23.8033 22.9764 23.0325 22.9764 22.2C22.9764 21.3675 22.8536 20.5967 22.608 19.8875L25.2786 17.8525L23.9894 15.54L20.9504 16.9275C20.3365 16.28 19.7152 15.7632 19.0865 15.3772C18.4566 14.9924 17.6966 14.6767 16.8064 14.43L16.438 11.1H13.6753L13.307 14.43C12.4168 14.6767 11.6573 14.9924 11.0287 15.3772C10.3988 15.7632 9.77686 16.28 9.16293 16.9275L6.12397 15.54L4.83471 17.8525L7.50531 19.8875C7.25974 20.5967 7.12959 21.3675 7.11485 22.2C7.09889 23.0325 7.22904 23.8033 7.50531 24.5125L4.83471 26.5475L6.12397 28.86L9.16293 27.4725C9.77686 28.12 10.3988 28.6368 11.0287 29.0228C11.6573 29.4076 12.4168 29.7233 13.307 29.97L13.6753 33.3Z"
              fill="currentcolor"
            />
          </svg>
        </>
      ),
    },
    {
      url: "/services-details",
      count: "03",
      delay: "0.6",
      title: "Book Appointment",
      desc: `Lorem ipsum is simply free text dolor adipi ensure everyone.`,
      icon: (
        <>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.2 3.86667H26.1C26.8691 3.86667 27.6068 4.1722 28.1506 4.71606C28.6945 5.25991 29 5.99754 29 6.76667V26.1C29 26.8691 28.6945 27.6068 28.1506 28.1506C27.6068 28.6945 26.8691 29 26.1 29H2.9C2.13087 29 1.39325 28.6945 0.84939 28.1506C0.305535 27.6068 0 26.8691 0 26.1L0 6.76667C0 5.99754 0.305535 5.25991 0.84939 4.71606C1.39325 4.1722 2.13087 3.86667 2.9 3.86667H5.8V0H7.73333V3.86667H21.2667V0H23.2V3.86667ZM11.6 15.4667H5.8V13.5333H11.6V15.4667ZM23.2 13.5333H17.4V15.4667H23.2V13.5333ZM11.6 21.2667H5.8V19.3333H11.6V21.2667ZM17.4 21.2667H23.2V19.3333H17.4V21.2667Z"
              fill="currentcolor"
            />
          </svg>
        </>
      ),
    },
  ];

  return (
    <section className="work-area has-animation pt-125 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two text-center mb-90 tg-heading-subheading animation-style1">
              <span className="sub-title">How we Work</span>
              <h2 className="title tg-element-title">How Can We Works!</h2>
            </div>
          </div>
        </div>

        <div className="work-item-wrap">
          <div className="work-line-shape">
            <svg viewBox="0 0 1173 212" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke-width="2">
                <path
                  className="dashed1"
                  stroke="rgba(199 199 199)"
                  d="M1 1C81 80.5 310.5 248.5 484 159.5L674.5 81C807 34 922.5 91.4 1172.5 211"
                />
                <path
                  className="dashed2"
                  stroke="white"
                  d="M1 1C81 80.5 310.5 248.5 484 159.5L674.5 81C807 34 922.5 91.4 1172.5 211"
                />
              </g>
            </svg>
          </div>

          <div className="row justify-content-center">
            {how_we_work_items.map((x, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-8">
                <HowWeWorkItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
