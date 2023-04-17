
import './App.css';
import Profile from './Profile/Profile'
import PropTypes from 'prop-types';
function App() {
  function handleName (fullname){
    alert(fullname)
  }
  Profile.defaultProps={
    fullname:"Assane Ndiaye",
    profession:"Mécanicien",
    bio:"21/08/1996"
  }
  Profile.propTypes ={
    fullname: PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string
  }
  return (
    <div>
      <Profile  bio="23/08/1997" profession="Développeur" handleName={handleName} />
      
    </div>
  );
}

export default App;
