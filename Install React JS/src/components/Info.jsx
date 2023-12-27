export default function Info() {
  return (
    <section className="info_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <div className="info_logo">
                  <a href="index.html">
                    <span>Cryptop</span>
                  </a>
                </div>
                <h5>Contact Us</h5>
                <div>
                  <div className="img-box">
                    <img src="images/location.png" width="18px" alt="" />
                  </div>
                  <p>Page when looking at its layou</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src="images/phone.png" width="18px" alt="" />
                  </div>
                  <p>+01 1234567890</p>
                </div>
                <div>
                  <div className="img-box">
                    <img src="images/envelope.png" width="18px" alt="" />
                  </div>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Invest Money</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour,
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_links">
                <h5>Useful Links</h5>
                <ul>
                  <li>
                    <a href="">There are many</a>
                  </li>
                  <li>
                    <a href="">variations of</a>
                  </li>
                  <li>
                    <a href="">passages of</a>
                  </li>
                  <li>
                    <a href="">Lorem Ipsum</a>
                  </li>
                  <li>
                    <a href="">available, but the</a>
                  </li>
                  <li>
                    <a href="">majority have</a>
                  </li>
                  <li>
                    <a href="">suffered</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form ">
                <h5>Newsletter</h5>
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}