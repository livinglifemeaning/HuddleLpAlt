import Grow from "./illustration-grow-together.svg"; 
import Conversations from "./flowing.svg"; 
import Users from "./illustration-your-users.svg"; 
import classes from "./FlexSection.module.css"; 

const IMAGES = [Grow, Conversations, Users]
const FlexSection = ({title, paragraph, index, alt}) => {
  return (
    <div className={classes.section}>
      <div className={classes.textBox}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.desc}>{paragraph}</p>
      </div>
      <div className={classes.imageBox}>
        <img src={IMAGES[index]} alt={alt}/>
      </div>
    </div>
  )
}

export default FlexSection
