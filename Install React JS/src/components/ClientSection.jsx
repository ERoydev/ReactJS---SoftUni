export default function ClientSection() {
  return (
    <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Testimonial</h2>
          </div>
          <div className="box">
            <div className="b-1">
              <div className="client_id">
                <div className="img-box">
                  <img src="images/client-1.jpg" alt="" />
                </div>
                <div className="name">
                  <h5>Readable</h5>
                  <h6>Content of a page</h6>
                </div>
              </div>
            </div>
            <div className="client_detail">
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The point
                of using Lorem
              </p>
            </div>
          </div>
          <div className="box">
            <div className="client_id">
              <div className="img-box">
                <img src="images/client-2.jpg" alt="" />
              </div>
              <div className="name">
                <h5>Readable</h5>
                <h6>Content of a page</h6>
              </div>
            </div>
            <div className="client_detail">
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The point
                of using Lorem
              </p>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>
  )
}