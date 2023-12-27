export default function Header() {
  return (
    <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>Cryptop</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="about.html">
                        {" "}
                        About{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="how.html">
                        {" "}
                        How{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>Wallet</span> <img src="images/wallet.png" alt="" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        {" "}
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        {" "}
                        Sign Up
                      </a>
                    </li>
                  </ul>
                  <div className="user_option">
                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className=" slider_section position-relative">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              <li data-target="#carouselExampleIndicators" data-slide-to={3} />
              <li data-target="#carouselExampleIndicators" data-slide-to={4} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="box">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <div>
                            <h1>Digital Currency</h1>
                            <h2>The Future of Trading.</h2>
                            <div className="">
                              <a href="">Get Started</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="box">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <div>
                            <h1>Digital Currency</h1>
                            <h2>The Future of Trading.</h2>
                            <div className="">
                              <a href="">Get Started</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="box">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <div>
                            <h1>Digital Currency</h1>
                            <h2>The Future of Trading.</h2>
                            <div className="">
                              <a href="">Get Started</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="box">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <div>
                            <h1>Digital Currency</h1>
                            <h2>The Future of Trading.</h2>
                            <div className="">
                              <a href="">Get Started</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="box">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <div>
                            <h1>Digital Currency</h1>
                            <h2>The Future of Trading.</h2>
                            <div className="">
                              <a href="">Get Started</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
  )
}