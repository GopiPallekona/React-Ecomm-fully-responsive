import React, { useState } from 'react'
import Rating from '../components/Rating';

const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

  

const Review = () => {
    const [reviewData, setReviewData] = useState(true);
  return (
    <>
      <ul className={`review-nav lab-ul ${reviewData ? "RevActive" :"DescActive"}`}>
        <li className='desc' onClick={()=>setReviewData(!reviewData)}>Description</li>
        <li className='rev' onClick={()=>setReviewData(!reviewData)}>Reviews 4</li>
      </ul>
      {/* desc & review content */}
      <div className={`review-content ${reviewData ? "review-content-show" : "description-show"}`}>
        <div className="review-showing">
          <ul className="content lab-ul">
            {
              ReviewList.map((review,i)=>(
                <li key={i}>
                  <div className='post-thumb'>
                    <img src={review.imgUrl} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <div className='posted-on'>
                        <a href="#">{review.name}</a>
                        <p>| {review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
          {/* add review field */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
              <form action="action" className='row'>
                <div className="col-md-4 col-12">
                  <input type="text" name='name' id='name' placeholder='Full Name*' />
                </div>
                <div className="col-md-4 col-12">
                  <input type="email" name='email' id='name' placeholder='Your Email*' />
                </div>
                <div className="col-md-4 col-12">
                 <div className="rating">
                  <span className='me-1'>Your Rating:</span>
                  <Rating />
                 </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea name="message" id="message"  rows="8" placeholder='Type here message'></textarea>
                </div>
                <div className='col-12'>
                  <button type='submit' className='default-button'>
                    <span>Submit  Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum magnam iure tempora, tempore explicabo voluptatem vel ab impedit rerum quam ea alias dolor laudantium? A rerum id officiis corporis deserunt illo dolore temporibus dicta doloremque qui consequatur, nisi nam veniam voluptas molestiae nihil cupiditate eaque eos provident omnis reprehenderit.</p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className='lab-ul'>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, nostrum.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, nostrum.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, nostrum.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, nostrum.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, nostrum.</li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, nostrum.</li>
              </ul>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, aperiam, iusto molestiae atque pariatur necessitatibus a totam magnam debitis eos ad non molestias? Perspiciatis dolore aut rerum vel voluptatibus doloremque facere, possimus qui assumenda nesciunt ab. Ab dolore aperiam explicabo sit eligendi natus aliquid quis odio quam. Hic, temporibus nobis!</p>
        </div>
      </div>
    </>
  )
}

export default Review
