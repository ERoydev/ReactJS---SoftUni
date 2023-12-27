export default function MobileApp() {
  return (
     <section className="app_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <h2>Our Powerful app to connect it all</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam
                </p>
                <div className="download_box">
                  <h5>Download Now</h5>
                  <div className="btn-box">
                    <a href="">
                      <img src="images/app-store.png" alt="" />
                    </a>
                    <a href="">
                      <img src="images/play-store.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/slider-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}