import React from 'react'

export default function Home(props) {
    return (
        <>
             <section id="home" className="hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="hero-content">
                            <h1 className="wow fadeInLeft" data-wow-delay=".4s">{props.data?props.data.ttl:"loading"}</h1>
                            <p className="wow fadeInLeft" data-wow-delay=".6s">{props.data?props.data.desc:"loading"}</p>
                            <div className="button wow fadeInLeft" data-wow-delay=".8s">
                                <a href="//#regin" className="btn"><i className="lni lni-apple"></i>{props.data?props.data.btn1:"loading"}</a>
                                <a href="//#regin" className="btn btn-alt"><i className="lni lni-play-store"></i>{props.data?props.data.btn2:"loading"}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                            <img src="assets/images/hero/phone.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
