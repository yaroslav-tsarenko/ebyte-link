import Post from "./Post";
import PropTypes from "prop-types";
import "./BlogPosts.css";

const BlogPosts = ({ className = "" }) => {
  return (
    <div className={`blog-posts ${className}`}>
      <div className="blog-title-parent">
        <div className="blog-title">
          <div className="blog-heading">
            <div className="heading-212">Our Blogs</div>
            <div className="heading-316">blog</div>
          </div>
          <div className="blog-list">
            <Post
              image="/image186@2x.png"
              theUltimateGuideToUsingEb="The Ultimate Guide to Using Ebytelink eSIM "
              march2023="4 March 2023"
              travelingInternationallyC="Traveling internationally can be daunting, especially when it comes to staying connected. Ebytelink eSIM offers a seamless solution for global travelers. In this guide, "
            />
            <Post
              image="/image187@2x.png"
              theUltimateGuideToUsingEb="Top 5 Reasons to Switch to Ebytelink eSIM"
              march2023="12 January 2023"
              travelingInternationallyC="If you’re still using traditional SIM cards, it might be time to consider switching to an eSIM. Here are the top five reasons why Ebytelink eSIM should be your go-to for international connectivity."
            />
            <Post
              image="/image188@2x.png"
              theUltimateGuideToUsingEb="A Traveler’s Review of Ebytelink eSIM"
              march2023="17 April 2023"
              travelingInternationallyC="As a frequent traveler, staying connected is crucial. I decided to try Ebytelink eSIM during my recent trip across Europe. Here’s my experience. The activation process was incredibly straightforward."
            />
          </div>
        </div>
        <div className="link22">
          <div className="blog-link">
            <div className="all-blog-posts">All blog posts</div>
            <img className="icon21" alt="" src="/icon11.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPosts.propTypes = {
  className: PropTypes.string,
};

export default BlogPosts;
