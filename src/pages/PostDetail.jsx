import React from 'react';
import PostAuthor from '../components/PostAuthor';
import { Link } from 'react-router-dom';
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
   return (
      <section className="post-detail">
         <div className="container post-detail--container">
            <div className="post-detail--header">
               <PostAuthor />
               <div className="post-detail--buttons">
                  <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
                  <Link to={`/posts/werwer/edit`} className='btn sm danger'>Delete</Link>
               </div>
            </div>

            <h1>This is the post title</h1>

            <div className="post-detail--thumbnail">
               <img src={Thumbnail} alt="" />
            </div>

            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nobis. Sapiente quae asperiores, impedit hic soluta nobis, qui velit officia optio cum officiis atque sed reiciendis corporis neque cumque accusantium iste reprehenderit ut, a consequatur nihil? Voluptates, provident. Ex, culpa.
            </p>

            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur temporibus illo aperiam rerum doloribus ullam omnis, obcaecati quasi voluptatem sint! Velit, eligendi, animi omnis doloremque neque ad, molestias laudantium facere temporibus minima consequatur explicabo perspiciatis atque accusantium! Libero itaque omnis illo dolor est hic numquam expedita cum maxime laboriosam. Ab perspiciatis nesciunt quod sunt consectetur?
            </p>

            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sint velit dolorum nam laborum maiores iusto dignissimos, earum dicta possimus officiis odit eius perspiciatis nemo illo! Aspernatur quod cum eum sed aliquam impedit est repellendus quidem blanditiis error labore, excepturi eligendi consequuntur nobis veniam ducimus officiis magnam. Voluptatum, hic tempora repudiandae vero minima quasi voluptatem provident consequatur neque numquam natus aperiam, mollitia obcaecati distinctio quos perferendis, quae doloremque exercitationem adipisci maiores molestiae atque. Illo quam, nostrum nulla quo facilis asperiores dolore porro, voluptas ratione ipsa, consequatur sit cumque aut necessitatibus? Accusantium quae nesciunt qui quaerat, voluptate sed repellat a, rerum voluptates libero ratione alias doloremque, aspernatur quas maiores beatae dolorum? Numquam.
            </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum iure consequuntur suscipit esse totam nobis veniam modi rerum? A.
            </p>

            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi praesentium illo architecto fugiat expedita quibusdam delectus veritatis sed earum officiis soluta, totam iusto? Error quaerat minima dolor odit odio optio consectetur, ad hic maxime, unde minus rerum autem cumque? Alias officia eveniet vel eum, voluptate recusandae aliquam quas ipsa molestias ullam rem iste laudantium temporibus sit distinctio fuga et, animi totam nostrum, amet ipsam consequatur adipisci? Quod adipisci magnam reiciendis laudantium est culpa id omnis eveniet, facilis officia fugit aut eum voluptatibus nemo repellendus! Quisquam facilis dolore beatae minima, porro at earum architecto molestiae dignissimos nostrum vel, illo doloremque natus ipsum qui corporis ab, debitis dolorum. Distinctio veniam ex laboriosam officiis necessitatibus iste sit id ullam voluptates, accusamus consectetur ea iusto natus sequi soluta fugiat ducimus culpa tempora dignissimos! Tenetur, doloremque. Officia explicabo incidunt blanditiis nostrum animi ut, sint harum laudantium deleniti ipsa, porro ullam rerum at commodi, optio non ratione. Ea illum ipsam fuga repellat similique eveniet incidunt veritatis nihil corporis quaerat aut enim nisi minima delectus eaque exercitationem earum doloremque culpa, ducimus dolorum? Ipsam explicabo commodi, mollitia necessitatibus voluptates quas veritatis soluta nostrum provident repellendus quibusdam labore sint obcaecati officiis fugiat officia, repudiandae, quisquam magnam sequi aliquam at.
            </p>
         </div>
      </section>
   );
}

export default PostDetail;
