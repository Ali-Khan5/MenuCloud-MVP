import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-light ">
    <div className="container">
      <a className="navbar-brand" href="#">
       <img src="https://res.cloudinary.com/dcw1i97ph/image/upload/v1588466811/lobo-100h-100w_wzbabd.png" style={{height:'55px',width:'80px'}}/> MenuCloud
        
        </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
    <style jsx >{`
    .navbar.bg-light {
       
        
    }
   
    `}
    </style>
  </nav>
);

export default Navbar;