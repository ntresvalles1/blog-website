import "./blogpost.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";

export default function blogPost() {
  return (
    <div className="blogPost">
       {/* post */}
       <SinglePost/>
       <Sidebar/>
    </div>
  )
}
