import Contacts from "./Contacts/Contacts"; 
import Nav from "./Nav/Nav"; 
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar"; 
import Logo from "./footerLogo.svg"; 
import classes from "./Footer.module.css"; 

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img className={classes.logo} src={Logo} alt="Huddle website logo" /> 
      <div className={classes.infoBox}>
        <Contacts/>
        <Nav/>
        <SocialMediaBar/>
      </div>
      <p className={classes.copyright}>&copy; Copyright 2022 Huddle. All rights reserved.</p>
    </div>
  )
}

export default Footer
