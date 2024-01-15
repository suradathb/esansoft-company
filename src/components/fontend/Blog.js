import React from 'react'

class Blog extends React.Component {
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
                      Blog Showing List
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
      </>
    )
  }
}

export default Blog
