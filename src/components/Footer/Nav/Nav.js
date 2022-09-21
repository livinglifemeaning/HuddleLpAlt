import classes from "./Nav.module.css"; 

const Nav = () => {
  return (
    <ul className={classes.nav}>
      <span>
      <li className={classes.link}>About Us</li>
      <li className={classes.link}>What We Do</li>
      <li className={classes.link}>FAQ</li>
      </span>
      <span>
      <li className={classes.link}>Career</li>
      <li className={classes.link}>Blog</li>
      <li className={classes.link}>Contact Us</li>
      </span>
    </ul>
  )
}

export default Nav
