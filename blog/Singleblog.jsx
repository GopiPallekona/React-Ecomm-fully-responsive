import React, { useState } from 'react'
import bloglist from "../utilis/blogdata"
import { useParams } from 'react-router-dom';
import Pageheader from '../components/Pageheader';
import Tags from '../shop/Tags';
import Popularpost from '../shop/Popularpost';


const socialList = [
  {
      iconName: 'icofont-facebook',
      siteLink: '#',
      className: 'facebook',
  },
  {
      iconName: 'icofont-twitter',
      siteLink: '#',
      className: 'twitter',
  },
  {
      iconName: 'icofont-linkedin',
      siteLink: '#',
      className: 'linkedin',
  },
  {
      iconName: 'icofont-instagram',
      siteLink: '#',
      className: 'instagram',
  },
  {
      iconName: 'icofont-pinterest',
      siteLink: '#',
      className: 'pinterest',
  },
]


const Singleblog = () => {
  const [blog,setBlog]=useState(bloglist);
  const {id}=useParams();
 // console.log(id)
 const result =blog.filter((b)=>b.id===Number(id));
 //console.log(resul[0]);
  return (
    <div>
      <Pageheader  title={"Sigle Blog Pages"} curPage={"/Blog/Blog Details"}/>

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                         <div className="post-inner">
                          {
                            result.map((item)=>(
                              <div key={item.id}>
                                <div className="post-thumb">
                                  <img src={item.imgUrl} alt="" />
                                </div>
                                <div className="post-content">
                                  <h3>{item.title}</h3>
                                  <div className="meta-post">
                                    <ul className="lab-ul">
                                      {
                                        item.metaList.map((val,i)=>(
                                          <li key={i}><i className={val.iconName}> {val.text}</i></li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                  <div>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, repudiandae nihil dicta, vitae eaque blanditiis doloribus suscipit vel impedit ratione dignissimos? Velit quisquam nam maxime quia, magnam totam. Quaerat voluptatibus reiciendis quos sint modi rerum reprehenderit ut saepe temporibus perspiciatis. Aperiam aspernatur quod voluptatibus accusantium rem cupiditate! Natus, a iure laudantium quia nam illo. Dolorum perspiciatis nemo dolores iste sunt.
                                    </p>
                                    <blockquote>
                                      <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, hic omnis. Vero eum minima perferendis earum voluptatem nesciunt soluta culpa quod ad aperiam libero omnis, placeat esse quam illo? Esse!
                                      </p>
                                      <cite>
                                        <a href="#">...Melissa Hunter</a>
                                      </cite>
                                    </blockquote>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam nisi quidem ab sint excepturi in veritatis explicabo maxime, odit cupiditate culpa ipsa similique non tempora fugit voluptate officia pariatur numquam accusamus minus perspiciatis? Illum, nisi. Error eligendi rerum quasi, quia, velit quam nam unde corrupti consequuntur iure numquam dicta?</p>

                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci, consequuntur iste nulla similique velit, in nam quidem, nemo ut consequatur? Doloribus maxime error vitae, suscipit recusandae magni totam exercitationem minima assumenda maiores inventore beatae ullam modi vel quam quas veniam quasi facere. Dignissimos beatae sunt natus consectetur labore voluptatum rem ex, nisi earum aliquid itaque alias, dolorem est accusamus!</p>

                                    <div className="video-thumb">
                                      <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                      <a href="https://youtu.be/PGuKjkdGrEI?si=dKNEHWQ4rPoJ8Spw" className='video-button popup' target='blank'>
                                        <i className='icofont-ui-play'></i>
                                      </a>
                                    </div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur obcaecati repellendus expedita iste porro ea dignissimos distinctio? Dolor iusto dicta, accusantium natus quisquam deleniti, voluptates corporis aut tenetur, laborum animi non. Eius, impedit recusandae harum culpa optio, soluta sit consequuntur, fugit hic provident vitae enim fugiat placeat obcaecati quas.</p>
                                    <div className="tags-section">
                                      <ul className="tags lab-ul">
                                        <li>
                                          <a href="#">Agency</a>
                                          <a href="#">Business</a>
                                          <a href="#">Pesonal</a>
                                        </li>
                                      </ul>
                                      <ul className="lab-ul social-icons">
                                        {
                                           socialList.map((val,i)=>(
                                            <li key={i}>
                                              <a href="#" className={val.className}>
                                                <i className={val.iconName}></i>
                                              </a>
                                            </li>
                                           ))
                                        }
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                         </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className='prev'>
                          <i className='icofont-double-left'></i> Previous Blog
                        </a>
                        <a href="#" className='title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, assumenda?</a>
                      </div>
                      <div className="right">
                      <a href="#" className='next'>
                          <i className='icofont-double-right'></i> Next Blog
                        </a>
                        <a href="#" className='title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, assumenda?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>


            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <Popularpost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singleblog
