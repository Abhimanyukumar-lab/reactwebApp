import React from 'react'

export default function Home() {
  return (
    <div>

<div>
  {/* coding area */}
  {/* start of navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/"><h1>Einstein Technology!</h1></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" tabIndex={-1} aria-disabled="true">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* end of navbar */}
  {/* header section */}
  <header className="header">
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-md-12 text-center">
          <h1>Welcome to Einstein Technology!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic est
            quis et iure tempora minima similique amet cum commodi id rerum,
            in non doloremque veniam accusamus distinctio, at animi ea
            ducimus, ad eveniet ipsam esse beatae molestias! Tempore, officia,
            vero, unde distinctio tempora natus blanditiis inventore earum ex
            officiis excepturi!
          </p>
          <button className="btn btn-primary">Start Learning !</button>
        </div>
      </div>
    </div>
  </header>
  {/* end of header section */}
  {/* start of message section */}
  <section className="message py-5">
    <div className="container text-center">
      <h1>We've got what you need!</h1>
      <p>
        Start Bootstrap has everything you need to get your new website up and
        running in no time! Choose one of our open source, free to download,
        and easy to use themes! No strings attached!
      </p>
      <button className="btn btn-primary">Check it out!</button>
    </div>
  </section>
  {/* end of message section */}
  {/* services section */}
  <section className="services">
    <div className="container text-center py-5">
      <h1>About our services</h1>
      <div className="row">
        <div className="col-md-4">
          {/* first col */}
          <div className="card">
            <div className="card-body">
              <i className="fa fa-bar-chart myicon" />
              <h1>Best Explanation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit in molestias similique et, perferendis, officiis
                labore harum sequi deleniti itaque rem ea? Labore repellat
                doloribus, beatae perferendis placeat recusandae nam!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <i className="fa fa-bell-o myicon" />
              <h1>Best Explanation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit in molestias similique et, perferendis, officiis
                labore harum sequi deleniti itaque rem ea? Labore repellat
                doloribus, beatae perferendis placeat recusandae nam!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <i className="fa fa-braille myicon" />
              <h1>Best Explanation</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit in molestias similique et, perferendis, officiis
                labore harum sequi deleniti itaque rem ea? Labore repellat
                doloribus, beatae perferendis placeat recusandae nam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End of services section */}
  {/* download section */}
  <section className="message py-5">
    <div className="container text-center">
      <h1>Donwlaod and start !!</h1>
      <p>
        Start Bootstrap has everything you need to get your new website up and
        running in no time! Choose one of our open source, free to download,
        and easy to use themes! No strings attached!
      </p>
      <button className="btn btn-primary">Download</button>
    </div>
  </section>
  {/* end download section */}
  {/* contact section */}
  <section className="contact">
    <div className="container text-center py-5">
      <h1>Let's Get In Touch!</h1>
      <p>
        Ready to start your next project with us? Give us a call or send us an
        email and we will get back to you as soon as possible!
      </p>
      <i className="fa fa-phone myicon text-warning" />
      <i className="fa fa-heart myicon text-danger" />
      <p>+919534944195</p>
      <p>www.einsteintechnologyblogspot.com</p>
    </div>
  </section>
  {/* end of contact section */}
  {/* links section */}
  <section className="message py-5">
    <div className="container text-center">
      <h1>Importants Links</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Google</p>
            <p>Twitter</p>
          </div>
          <div className="col-md-6">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Google</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
      <button className="btn btn-primary">Thanks</button>
    </div>
  </section>
  {/* end of links section */}
  {/* footer section */}
  <section className="footer bg-dark">
    <div className="container py-5 text-white text-center">
      <p>Copyright © 2022 - Einstein Technology!</p>
    </div>
  </section>
  {/* end of footer section */}
  {/* end of coding area */}
  {/* Optional JavaScript */}
  {/* jQuery first, then Popper.js, then Bootstrap JS */}
</div>




    </div>
  )
}
