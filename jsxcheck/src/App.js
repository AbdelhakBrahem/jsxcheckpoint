import myImage from './imageInSrc.jpg'
import './style.css';

function App() {
  return (
    <div className="app">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
<div className="mainTitle">
  
          <h1 className="titleRed">Abdelhak BRAHEM</h1>
</div>
        <br></br>
        <div className="head">
          <img src={myImage} alt='imageInSrc'></img>
          <br></br>
          <img src="/imageInPublic.jpg"></img>
        </div>
      </div>
<div className="vid">
  
        <video width="320" height="240" controls >
          <source src="./myVideo.mp4" type="video/mp4" />
        </video>
</div>
    </div>



  );
}

export default App;
