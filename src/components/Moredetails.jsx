
const Moredetails = ({name,username,website,phone,id,index}) => {

  return (
    <>
      <div key={index} className="conatiner">
                    {/* <div className="card"> */}
                        <div className="card cardDet">
                            <div className="left-box">
                                <h5 className="card-title">Name:{name} </h5>
                            </div>
                            <div className="right">
                                <h5>UserName : {username}</h5>
                                <h5>Phone: {phone}</h5>
                                <h5>Website: {website}</h5>
                                
                            </div>
                            
                        </div>
                    </div>
    </>
  );
}

export default Moredetails;