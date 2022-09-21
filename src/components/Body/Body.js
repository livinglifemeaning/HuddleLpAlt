import FlexSection from "./FlexSection/FlexSection"; 
import Button from "../Button/Button";
import sectionsData from "./sectionsData.json"
import classes from "./Body.module.css"; 

const Body = () => {
  return (
    <div className={classes.body}>
      <div className={classes.sectionsBox}> 
      {sectionsData.map(section => <FlexSection title={section.title} paragraph={section.paragraph} index={section.index} alt={section.alt}/>)}
      </div>
      <div className={classes.readyBox}>
        <h2>Ready to Build Your Community?</h2>
        <Button color="dark">Get Started For Free</Button>
      </div>
    </div>
  )
}

export default Body
