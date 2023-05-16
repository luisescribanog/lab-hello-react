
import './App.css';
import Button from './componentes/Button';
import Card from './componentes/Card';
import Icons from './componentes/Icons';
import Page from './componentes/Page';
import Logo from './images/icon1.png'
import Logo2 from './images/icon2.png'
import Logo3 from './images/icon3.png'
import Logo4 from './images/icon4.png'




function App() {
  return (
    <div className="App container" >
      <Icons className="pruebas"  />
      <Page mode="primary" text="Awasome"/>
      <div className='cards'>
        <Card>
          <img src={Logo} alt="" />
          <h5 className="card-title">Declarative</h5>
          <p className="card-text">React makes it <br />
          painless to create interactive Uis
          </p>
        </Card>
        <Card>
          <img src={Logo2} alt="" />
          <h5 className="card-title">Components</h5>
          <p className="card-text">Build encapsulated <br />
          components that 
          manage their state
          </p>
        </Card>
        <Card>
          <img src={Logo3} alt="" />
          <h5 className="card-title">Single-Way</h5>
          <p className="card-text">A set of inmutable <br />
          values are passer to <br/> 
          the component`s`
          </p>
        </Card>
        <Card>
          <img src={Logo4} alt="" />
          <h5 className="card-title">JSX</h5>
          <p className="card-text">Statically-typed <br />
          designed to run on modern browsers<br/> 
          </p>
        </Card>
      </div>
      


      
    </div>
  );
}

export default App;
 