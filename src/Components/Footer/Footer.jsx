import { Container } from "react-bootstrap";
import "./Footer.css";
import Apple_store from "../../assets/Apple-Store.webp";
import Google_store from "../../assets/Google Play.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="f-logo">
          <Link to="/">
            <span>Tripo Games</span>
          </Link>
        </div>
        <div className="footer-top">
          <p>An Immersive Gaming Experience</p>
        </div>
        <hr />
        <div className="footer-mid">
          <div className="f-contact">
            <h4>Contact</h4>
            <ul>
              <li>Info@mysite.com</li>
              <li>Tel: 123-456-7890</li>
              <li>
                500 Terry Francine St
                <br />
                San Francisco, CA 94158
              </li>
            </ul>
          </div>
          <div className="f-navigation">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="">Games</a>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <Link to="Privacy_Policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="Terms_&_Conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="f-social">
            <h4>Social</h4>
            <li>
              <a href="">Discord</a>
            </li>
            <li>
              <a href="">Twitch</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Youtube</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </div>
          <div className="f-find">
            <h4>Find Us On</h4>
            <div className="find-media">
              <a href="">
                <img src={Apple_store} alt="" />
              </a>
              <a href="">
                <img src={Google_store} alt="" />
              </a>
            </div>
          </div>
        </div>
        <hr className="seperator" />
        <div className="footer-btm">
          <p>© 2023 by Tripo. Powered and secured by Tripo</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
