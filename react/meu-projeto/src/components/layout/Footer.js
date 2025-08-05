import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer(){
  return (
    <footer>
      <h3>Nossas redes sociais</h3>
      <ul className={styles.social_list}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
    </footer>
  )
}

export default Footer