import React from 'react'

class About extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Start Call Action Area --> */}
        <section className="hero-area">
          <div className="container">
            <div className="inner-content">
              <div className="row align-items-center hero-content">
                <div className="col-lg-6 col-md-7 col-12">
                  <div className="text">
                    <h2 className="wow fadeInUp">
                      GTO Gangster
                      <br /> <span>Lite version of CryptoLand.</span>
                    </h2>
                    {/* <p style="display: block;margin-top: 10px;"> */}
                    <p>
                      Please, purchase full version of the template to get all
                      pages, features and commercial license.{' '}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-12">
                  <div className="button">
                    <a href="#" className="btn">
                      Buy Pro Version
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Start Feature Area --> */}
        <div className="feature section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3 className="wow zoomIn" data-wow-delay=".2s">
                    Why choose us
                  </h3>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Our features
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="feature-box">
                  <div className="tumb">
                    <img
                      src="assets/images/features/feature-icon-1.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-title">Instant Exchage</h4>
                  <p>
                    Invest in Bitcoin on the regular or save with one of the
                    highest interest rates on the market.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="feature-box">
                  <div className="tumb">
                    <img
                      src="assets/images/features/feature-icon-2.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-title">Safe & Secure</h4>
                  <p>
                    Invest in Bitcoin on the regular or save with one of the
                    highest interest rates on the market.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="feature-box">
                  <div className="tumb">
                    <img
                      src="assets/images/features/feature-icon-3.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-title">Instant Trading</h4>
                  <p>
                    Invest in Bitcoin on the regular or save with one of the
                    highest interest rates on the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Features Area --> */}
      </>
    )
  }
}

export default About
