import "./navbar.css"

export default function navbar() {
  return (
    <div className='nav'>
        <div className="topleft">
            <i className="topIcon fa-brands fa-instagram"></i>
            <i class="topIcon fa-brands fa-facebook"></i>         
            <i class="topIcon fa-brands fa-twitter"></i>
            <i class="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistitem">HOME</li>
                <li className="toplistitem">ABOUT</li>
                <li className="toplistitem">WRITE</li>
                <li className="toplistitem">CONTACT</li>
                <li className="toplistitem">LOG-OUT</li>
            </ul>
        </div>
        <div className="topright">
            <img className="topImage"
                src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg"
            />
            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
