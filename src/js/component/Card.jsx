import React from "react";


const Card = () => {
	return (
		 <>
         
		     <div class="card d-inline-block mx-3 " style={{width: "18rem"}}>
            <img src="https://play-lh.googleusercontent.com/zrWQcunbWfU54jCcdYNoy898fgQIjIInu0QFJ2iQeeXmngfUPeiPgQdGPua9I-KcDyhP=w3840-h2160-rw" class="card-img-top" />
            <div class="card-body text-center">
           <h5 class="card-title">Card title</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <hr />
              <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
            </div>
		 </>
	);
};

export default Card;
