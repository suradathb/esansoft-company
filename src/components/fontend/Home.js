import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Start Hero Area --> */}
        <section className="hero-area">
          <img
            className="hero-shape"
            src="assets/images/hero/hero-shape.svg"
            alt="#"
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="hero-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".2s">
                  We produce & design & develop to make customers satisfied.
                  </h4>
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  Blockchain production <br />
                    <span>
                      <img
                        className="text-shape"
                        src="assets/images/hero/text-shape.svg"
                        alt="#"
                      />
                      For the benefit of customers.
                    </span>
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                  Produce blockchain research in order to give
                    <br /> our customers maximum benefit.
                  </p>
                  <div className="button wow fadeInUp" data-wow-delay=".8s">
                    <a href="about-us.html" className="btn ">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className="hero-image">
                  <img
                    className="main-image"
                    src="assets/images/hero/home2-bg.png"
                    alt="#"
                  />
                  <img
                    className="h2-move-1"
                    src="assets/images/hero/h2-bit-l.png"
                    // src="assets/images/logo/logo.svg"
                    alt="#"
                  />
                  <img
                    className="h2-move-2"
                    src="assets/images/hero/h2-bit-m.png"
                    alt="#"
                  />
                  <img
                    className="h2-move-3"
                    // src="assets/images/hero/h2-bit-s.png"
                    src="assets/images/logo/logo.svg"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Hero Area --> */}

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
                      src="assets/images/features/NFTBlack.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-title">NFT CowCert</h4>
                  <p>
                  Blockchain certificates for pedigree management : ระบบจัดการใบรับรองที่ใช้ประโยชน์จากบล็อกเชน เต็มรูปแบบ โดยไม่พึ่งพาดาต้าเบสภายนอก.
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
                      src="assets/images/features/Raspberry-Pi.png"
                      alt=""
                    />
                  </div>
                  <h4 className="text-title">Barter Trade On Block Chain</h4>
                  <p>
                  A pocket-sized computer that packs a big punch. Find out why Raspberry Pi is a lethal combination for IoT - and blockchain-based implementations.
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
                      src="assets/images/features/Tokenisation.jpeg"
                      alt=""
                    />
                  </div>
                  <h4 className="text-title">Industrial Blockchain</h4>
                  <p>
                  Blockchain was not created to produce BitCoin, but it does more than produce coins. We are passionate about blockchain because the industry needs it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Features Area --> */}

        {/* <!-- Start Call Action Area --> */}
        <section className="call-action">
          <div className="container">
            <div className="inner-content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 col-12">
                  <div className="text">
                    <h2>
                      You are using free
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
        {/* <!-- End Call Action Area --> */}
      </>
    )
  }
}

export default Home
