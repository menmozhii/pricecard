import React from 'react'

function Price({data})
 {
  
  return <>
  
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.Plan}</h5>
            <h6 className="card-price text-center">$<span className="period">{data.price}</span></h6>
            <hr />
            <ul className="fa-ul">
              <li className= {data.isuser?"":"text-muted"}><span className="fa-li"><i className={data.isuser?"fas fa-check":"fas fa-times"}></i></span>{data.user}</li>
              <li  className={data.isStorage?"":"text-muted"}><span className="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.Storage}</li>
              <li className={data.isPublicproject?"":"text-muted"}><span className="fa-li"><i className={data.isPublicproject?"fas fa-check":"fas fa-times"}></i></span>{data.Publicproject}</li>
              <li className={data.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className={data.isCommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{data.CommunityAccess}</li>
              <li className= {data.isprivateproject?"":"text-muted"}><span className="fa-li"><i className={data.isprivateproject?"fas fa-check":"fas fa-times"}></i></span>{data.privateproject}
                </li>
              <li className={data.issupport?"":"text-muted"}><span className="fa-li"><i className={data.issupport?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li className={data.issubDomain?"":"text-muted"}><span className="fa-li"><i className={data.issubDomain? "fas fa-check":"fas fa-times"}></i></span>{data.subDomain}
              </li>
              <li className={data.isreports?"":"text-muted"}><span className="fa-li"><i className={data.isreports? "fas fa-check":"fas fa-times"}></i></span>{data.reports}
                </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
     
   
</>
    
  
}


export default Price
