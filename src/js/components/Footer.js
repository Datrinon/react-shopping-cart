import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import "../../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-icons">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
      </div>
      <div className="directories">
        <section className="directory">
          <h2 className="subdirectory-header">Company</h2>
          <a className="footer-link" href="">About Us</a>
          <a className="footer-link" href="">Contact Us</a>
          <a className="footer-link" href="">Blog</a>
        </section>
        <section className="directory">
          <h2 className="subdirectory-header">Shop</h2>
          <a className="footer-link" href="/products/ebikes">eBikes</a>
          <a className="footer-link" href="/products/accessories">Accessories</a>
          <a className="footer-link" href="">Showroom</a>
        </section>
        <section className="directory">
          <h2 className="subdirectory-header">Support</h2>
          <a className="footer-link" href="">Help Docs</a>
          <a className="footer-link" href="">Return Policy</a>
          <a className="footer-link" href="">Shipping Policy</a>
          <a className="footer-link" href="">Warranty & Terms</a>
        </section>
      </div>
    </footer>
  )
}

export default Footer;