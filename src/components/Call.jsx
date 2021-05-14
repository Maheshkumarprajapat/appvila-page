import React from 'react'

export default function Call({ data }) {
    return (
        <>
            <section className="section call-action">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                            <div className="cta-content">
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">{data ? data.ttl1 : "loading"}<br/>{data ? data.ttl2 : "loading"}</h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">{data ? data.desc : "loading"}</p>
                                <div className="button wow fadeInUp" data-wow-delay=".6s">
                                    <a href="//#regin" className="btn">{data ? data.btn : "loading"}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
