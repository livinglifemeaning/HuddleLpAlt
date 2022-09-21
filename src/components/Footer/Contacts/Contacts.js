import Location from "./icon-location.svg";
import Phone from "./icon-phone.svg";
import Email from "./icon-email.svg";
import classes from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={classes.contacts}>

      <div className={classes.contactBox}>
        <img src={Location} alt="" />
        <p>8673 Williams Street Vista, CA 92083</p>
      </div>

      <div className={classes.contactBox}>
        <img src={Phone} alt="" />
        <p>+1-543-123-4567</p>
      </div>

      <div className={classes.contactBox}>
        <img src={Email} alt="" />
        <p>example@huddle.com</p>
      </div>

    </div>
  );
};

export default Contacts;
