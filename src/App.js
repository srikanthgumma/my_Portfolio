import Card from 'react-bootstrap/Card';
import Wpic from './images/wew.jpg'
import MyPic from './images/sri.jpg';
import Tpic from './images/todo.jpeg'
import Lpic from './images/land.png';
import counter from './images/counter.png'
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
<Card style={CardStyle} id='mypage'>
  <Card.Img variant="top" src={MyPic} style={PicStyle} id='mpic'/>
  <Card.Body>
    <Card.Title><h1><b>SRIKANTH GUMMADI</b></h1></Card.Title>
    <Card.Text  id='skills'>
     <i><b> Front End Developer</b></i> and <i><b>Instagram Influencer</b></i>
    </Card.Text>
   <div id='navchilds'>
   <a href='https://github.com/srikanthgumma/' id='gPage' title='Go to My GitHub Profile'>GitHub</a>
    <a href='https://www.linkedin.com/in/gummadi-srikanth/' id='gPage' title='Go to My LinkedIn Profile'>LinkedIn</a>
    <a href='https://srikanthgumma.github.io/react_myresume/' id='gPage' title='Go to My Resume Profile'>My Profile</a>
    {/* <a href='https://srikanthgumma.github.io/react_myresume/' id='gPage' title='Go to My InternShip Project'>InternShip Project<sup> <span class="badge" >***</span></sup></a> */}
   </div>
  </Card.Body>
</Card>
<div id='myprojects'>
  <h1>MY PROJECTS <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></h1>
</div>
<div  id='maind'>

<Card style={{border:"none"}} id='fcard'>
  <Card.Img variant="top" src={Wpic} style={{height:"250px"}}/>
  <Card.Body >
    <Card.Title>Weather App</Card.Title>
    <Card.Text>
      Enter any city name to check the weather deatils in that area..
    </Card.Text>
    <a href='https://srikanthgumma.github.io/react_weather_app/' target='_self' id='weather' >Go to Weather App</a>
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
      It is an Intgram Grwoth E-Book webpage where you can view it's benefits and how this e-book can help you grow your followers on IG and make some real money. It is made Responsive on different screens.(Mobile,Desktop,Tab etc..)
    </Card.Text>
    <a href='https://srikanthgumma.github.io/react_responsive_landingpage/' target='_self' id='landingpage' >Go to Landing Page</a>
  </Card.Body>
</Card>

<Card style={{border:"none"}} id='frcard'>
  <Card.Img variant="top" src={counter}  style={{width:"100%",height:"250px"}}/>
  <Card.Body>
    <Card.Title>Counter App</Card.Title>
    <Card.Text>
      It is an Application where you can increment the number by 1 and decrement it by 1 and also you can reset the number to ZERO.
    </Card.Text>
   
    <a href=' https://srikanthgumma.github.io/react-counter-app/' target='_self' id='counterapp' >Go to Counter Page</a>
  </Card.Body>
</Card>



</div>
        



    </div>
 

)
   

}

export default App;
