import React from 'react'

export default function Ourachievement({data}) {
    return (
        <>
            <section className="our-achievement section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
                            <div className="title">
                                <h2>{data ? data.ttl1 : "loading"}</h2>
                                <p>{data ? data.desc : "loading"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                       <div className="row">
                       {
                            data ? data.singleachievement.map((item,index) => (
                                
                                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                                            <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
                                                <h3 className="counter"><span id="secondo1" className="countup" cup-end="100">{item.ttl1} </span> {item.ttl2}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    
                            )):"loading"
                        }
                       </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
