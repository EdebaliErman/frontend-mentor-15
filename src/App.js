import './App.css';
import TextBar from './Components/TextBar/TextBar';

function App() {
  return (
    <div className='App'>
      <img className="bg-desktop" src={process.env.PUBLIC_URL + "assets/bg-desktop.svg"} alt='desktop' />
      <header>
        <img className="hunddle" src={process.env.PUBLIC_URL + "assets/logo.svg"} alt='desktop' />
      </header>
      <article>
        <img className="mockups" src={process.env.PUBLIC_URL + "assets/illustration-mockups.svg"} alt='mockups' />
        <TextBar />
      </article>
    </div>
  );

}

export default App;
