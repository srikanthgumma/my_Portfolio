import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Wpic from './images/wew.jpg'
import MyPic from './images/sri.jpg';
import Tpic from './images/todo.jpeg'
import Lpic from './images/land.png'
import './App.css';

function App() {
  
  let PicStyle ={
    borderRadius:"50%",
    width:"250px" ,
    height:"250px",
    margin:"auto"
}

let CardStyle ={ 
    width: '100%',
    margin:"auto",
    marginTop:"5%",
    backgroundColor:"transparent",
    border:"none",
    textAlign:"center",
    color:"white" 
}

return (
    <div>
<Card style={CardStyle}>
  <Card.Img variant="top" src={MyPic} style={PicStyle} id='mpic'/>
  <Card.Body>
    <Card.Title><h1><b>SRIKANTH GUMMADI</b></h1></Card.Title>
    <Card.Text style={{fontSize:"15px",paddingTop:"3px"}}>
     <i><b> Front End Developer</b></i> and <i><b>Instagram Influencer</b></i>
    </Card.Text>
    <a href='https://github.com/srikanthgumma/' id='gPage'>GitHub Profile</a>
    <a href='https://www.linkedin.com/in/gummadi-srikanth/' id='gPage'>LinkedIn Profle</a>
    <a href='/' id='gPage' >Resume</a>


  </Card.Body>
</Card>

<div style={{display:"grid",gridTemplateColumns:"28% 28% 28%",justifyContent:"space-evenly", marginTop:"5%",gap:"65px"}} id='maind'>
<Card style={{border:"none"}} id='fcard'>
  <Card.Img variant="top" src={Wpic} style={{height:"250px"}}/>
  <Card.Body >
    <Card.Title>Weather App</Card.Title>
    <Card.Text>
      Enter any city name to check the weather deatils in that area..
    </Card.Text>
    <Button variant="primary" onClick={()=>{window.location.assign('/weather')}}>Go to Weather</Button>
  </Card.Body>
</Card>


<Card style={{border:"none"}} id='scard'>
  <Card.Img variant="top" src={Tpic} style={{height:"250px"}} />
  <Card.Body>
    <Card.Title>To-Do List App</Card.Title>
    <Card.Text>
      Type some text to perform To-Do actions like Editing the text or Deleting the text..
    </Card.Text>
    <a href='https://srikanthgumma.github.io/todo_Repo/' target='_self' id='todo' >Go to To-Do</a>
  </Card.Body>
</Card>



<Card style={{border:"none"}} id='tcard'>
  <Card.Img variant="top" src={Lpic}  style={{width:"100%",height:"250px"}}/>
  <Card.Body>
    <Card.Title>Landing Page</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary"  onClick={()=>{window.location.assign('/register')}}>Go to LandingPage</Button>
  </Card.Body>
</Card>

<Card style={{border:"none"}} id='frcard'>
  <Card.Img variant="top" src=""  style={{width:"100%",height:"250px"}}/>
  <Card.Body>
    <Card.Title>LiSongs Page</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary"  onClick={()=>{window.location.assign('/songs')}}>Go to LiSongs</Button>
  </Card.Body>
</Card>

<Card style={{border:"none"}} id='ficard'>
  <Card.Img variant="top" src=""  style={{width:"100%",height:"250px"}}/>
  <Card.Body>
    <Card.Title>Calculator</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary"  onClick={()=>{window.location.assign('/calculator')}}>Go to Calculator</Button>
  </Card.Body>
</Card>


</div>
        



    </div>
 

)
   

}

export default App;
