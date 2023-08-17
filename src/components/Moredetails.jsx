
const Moredetails = ({name,username,website,phone,id,index,address,company,apiData}) => {
console.log(apiData);
  return (
    <>
      <div key={index} className="conatiner">
                    {/* <div className="card"> */}
                        <div className="card cardDet">
                            <div className="left-box">
                              <h3 style={styleHeader}>Personal Details..</h3>
                                <h5 className="card-title">Name:<i>{name}</i> </h5>
                            </div>
                            <div className="right">

                                <h5><b>UserName </b>: <i>{username}</i></h5>
                                <h5><b>Phone:</b> <i>{phone}</i></h5>
                                <h5><b>Website:</b> <i>{website}</i></h5>

                            </div>
                            <div>
                              <h3 style={styleHeader}>Comapny Details...</h3>
                              <div>
                                <h5><b>Company Name:</b> <i>{company.name}</i></h5>
                                <h5><b>About</b> : <i>{company.bs}</i></h5>
                              </div>
                            </div>
                            <div>
                              <h4 style={styleHeader}>Address...: </h4>
                              <h5><b>Street </b>: {address.street}</h5> 
                              <h5><b>City </b> : {address.city}</h5>
                              <h5><b>Zip Code </b> : {address.zipcode}</h5>
                            </div>
                            
                        </div>
                    </div>
    </>
  );
}
const styleHeader = {
  color:"grey",
}

export default Moredetails;