import React from 'react'

export default function Pricing({ data }) {
    return (
        <>
            <section id="pricing" className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">{data ? data.ttl1 : "loading"}</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">{data ? data.ttl2 : "loading"}</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">{data ? data.desc : "loading"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data ? data.singletable.map((item, index) => (
                                <div class="col-lg-3 col-md-6 col-12">
                                    <div class="single-table wow fadeInUp" data-wow-delay=".4s">
                                        <div class="table-head">
                                            <h4 class="title">{item.ttl1}</h4>
                                            <p>{item.desc}</p>
                                            <div class="price">
                                                <h2 class="amount">{item.ttl2}<span class="duration">{item.ttl3}</span></h2>
                                            </div>
                                            <div class="button">
                                                <a href="javascript:void(0)" class="btn">{item.link}</a>
                                            </div>
                                        </div>
                                        <div class="table-content">
                                            <h4 class="middle-title">{item.ttl4}</h4>
                                            <ul class="table-list">
                                                <li><i class={item.icon1}></i> {item.iconttl1}</li>
                                                <li><i class={item.icon2}></i> {item.iconttl2}</li>
                                                <li><i class={item.icon3}></i> {item.iconttl3}</li>
                                                <li><i class={item.icon4}></i> {item.iconttl4}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )) : "loading"
                        }
                    </div></div></section>

        </>
    )
}
