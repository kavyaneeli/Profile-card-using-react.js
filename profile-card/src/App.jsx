import ".//App.css";
function App(){
  return (
    <div className="container">
      <div className ="profile-card">
        <img src="https://via.placeholder.com/120" 
        alt ="Profile" 
        className ="profile-image"/>
        <h2>Kavya</h2>
        <p className ="role">Aspring React Developer</p>
        <p>I am a beginner React developer learning HTML,CSS,JavaScript and React.js.</p>
        <button>View Profile</button>
      </div>
    </div>
  );
}
export default App;