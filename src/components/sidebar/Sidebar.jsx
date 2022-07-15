import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
                //className="sideBarImage" 
                src="https://image.shutterstock.com/image-illustration/cute-little-blue-bird-tweet-260nw-107219297.jpg"
                alt=" "
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic aperiam et obcaecati repellat magni nobis eos incidunt. 
            </p>
        </div>
        
        <div className="sidebarItem"> 
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidelistItem">Trips</li>
                <li className="sidelistItem">Favorites</li>
                <li className="sidelistItem">Life</li>
                <li className="sidelistItem">Music</li>
            </ul>
        </div>
       
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sideIcon fa-brands fa-instagram"></i>
                <i class="sideIcon fa-brands fa-facebook"></i>         
                <i class="sideIcon fa-brands fa-twitter"></i>
                <i class="sideIcon fa-brands fa-pinterest"></i>
            </div>
        </div>

    </div>
  )
}
