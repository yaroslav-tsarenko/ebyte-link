import { Button } from "@mui/material";
import Post from "./Post";
import PropTypes from "prop-types";
import "./Posts.css";

const Posts = ({ className = "" }) => {
  return (
    <section className={`posts ${className}`}>
      <div className="title2">
        <div className="headings1">
          <div className="heading-2-selected-posts-parent">
            <h1 className="heading-28">Our Blogs</h1>
            <div className="heading-36">blog</div>
          </div>
          <div className="post-list">
            <Post
              image="/image-41@2x.png"
              theUltimateGuideToUsingEb="The Ultimate Guide to Using Ebytelink eSIM "
              march2023="4 March 2023"
              travelingInternationallyC="Traveling internationally can be daunting, especially when it comes to staying connected. Ebytelink eSIM offers a seamless solution for global travelers. In this guide, "
            />
            <Post
              image="/image-42@2x.png"
              theUltimateGuideToUsingEb="Top 5 Reasons to Switch to Ebytelink eSIM"
              march2023="12 January 2023"
              travelingInternationallyC="If you’re still using traditional SIM cards, it might be time to consider switching to an eSIM. Here are the top five reasons why Ebytelink eSIM should be your go-to for international connectivity."
            />
            <Post
              image="/image-43@2x.png"
              theUltimateGuideToUsingEb="A Traveler’s Review of Ebytelink eSIM"
              march2023="17 April 2023"
              travelingInternationallyC="As a frequent traveler, staying connected is crucial. I decided to try Ebytelink eSIM during my recent trip across Europe. Here’s my experience. The activation process was incredibly straightforward."
            />
          </div>
        </div>
        <Button
          className="link6"
          endIcon={<img width="22px" height="22px" src="/icon-20.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#36a83a",
            borderRadius: "25px",
            "&:hover": { background: "#36a83a" },
            width: 256.5,
            height: 46,
          }}
        >
          All blog posts
        </Button>
      </div>
    </section>
  );
};

Posts.propTypes = {
  className: PropTypes.string,
};

export default Posts;
