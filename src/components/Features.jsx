import React from 'react'

export default function Features({ data }) {
    return (
        <>
            <section id="features" className="features section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">{data ? data.ttl1 : "loading"}</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">{data ? data.ttl2 : "loading"}</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">{data ? data.desc : "loading"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data ? data.Featuresbox.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                        <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                                            <i className={item.icon}></i>
                                            <h3>{item.ttl1}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                            )) : "loading"
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
