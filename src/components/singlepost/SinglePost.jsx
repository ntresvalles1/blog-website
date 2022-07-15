import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost"> 
        <div className="singlePostwrap">
            <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" 
            alt="" 
            className="singlePostImage" />
            <h1 className="singlePostTitle">
                lion lion lions!
                <div className="singlePostedit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInf">
                <span className="singlePostAuthor">Author: <b>Nicole</b></span>
                <span className="Date">Author: <b>2 hours ago</b></span>
            </div>
            <p className="singlePostDescription">I see trees of green Red roses too I see them bloom For me and you And I think to 
                myself What a wonderful world I see skies of blue And clouds of white The bright 
                blessed day The dark sacred night And I think to myself What a wonderful world
                The colors of the rainbow So pretty in the sky Are also on the faces Of people 
                going by I see friends shaking hands Saying, "How do you do?" They're really 
                saying "I love you" I hear babies cry I watch them grow They'll learn much 
                more Than I'll never know And I think to myself What a wonderful world 
                Yes, I think to myself What a wonderful world
            </p>
        </div>
    </div>
  )
}
