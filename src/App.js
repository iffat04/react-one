import logo from './logo.svg';
import './App.css';

function App() { 

  /*
  const num1 =  100;
//object
  const singer = {
    name: 'mahfuz',
    roll:101,
    job:'singing'
  }

  const singerStyle = {
    color:'white',
    backgroundColor: 'green',
    padding : '20px',
    margin: '10px'
  }*/
   
  const nayoks = ['rubel','sunny','lammo','dakku'];
  const items =['amm', 'jam', 'kathal', 'pore add kora fruits:','peyara','malta']

  //array of objects
  const movies = [
    {movie:'harry potter', actor:'danny', actress:'emma'},
    {movie:'highway', actor:'ranveer hhuda', actress:'alia'},
    {movie:'titanic', actor:'Leo', actress:'kate'},
    {movie:'beder meye josna', actor:'jasim', actress:'goblin'}
  ];


  return (
    <div className="App">


    {/*dynamic array show*/}
    <Person name={nayoks[0]}></Person>

    <Showmovie movieName={movies[0].movie}></Showmovie>
  

    {movies.map(movie =><Showmovie movieName={movie.movie} actor={movie.actor} actress={movie.actress}></Showmovie>)}

    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
    {/* dynamically - update with array changing */}
    <ul>
      {items.map(item=> <li> {item} </li>)}
    </ul>





    <Person name="koli" job="nai nai"></Person>
    <Person name="donki" kaj="halum"></Person>
    <Person name={nayoks[2]}></Person>
    <Person></Person>
    <Friend></Friend>

      {/*
      <header className="App-header">
        <h3>heloow mama</h3>
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className="container">
        <p>happy react </p>
        <p>happy react </p>
        <p>num1 + 10 = {num1+10}</p>
        </div>    

        <div style = {singerStyle}>
         <h3>singer: {singer.name}</h3>
         <p>his job is {singer.job} and id is {singer.roll}</p>
        </div>

        <div style = {{backgroundColor:'goldenrod', padding:'10px',borderRadius: '5px'}}>
         <h3>singer: {singer.name}</h3>
         <p>his job is {singer.job} and id is {singer.roll}</p>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}

    </div>
  );
}


//creating new html tag
function Showmovie(props){
  console.log(props)
  const divstyle={
    backgroundColor:'blue',
    padding:'20px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems : 'center',
    margin:'10px'
  }
  return(
   
   <div style= {divstyle}>
     <h1>Movie Name: {props.movieName}</h1>
     <h3>actor: {props.actor}</h3>
     <h3>actress: {props.actress}</h3>
   </div>
  );
}


function Person(props){
  console.log(props)
  const playerStyle = {
    backgroundColor: 'skyblue',
    padding : '10px',
    margin: '10px',
    border: '5px solid green',
    borderRadious:'10px'
  }


  return (
   <div style={playerStyle}>
    <h1>name:{props.name}</h1>
    <p>profession : {props?.job ?? props.kaj}</p>
   </div>
  );
}

function Friend(){
  return(
    <div style = {{backgroundColor:'yellow', padding:'10px'}}>
      <h3>phone no:</h3>
    </div>
  )
}

export default App;
