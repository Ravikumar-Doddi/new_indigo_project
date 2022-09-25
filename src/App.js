import Header from './Header';
import Card1  from './Card1';
import './App.css';
import Acca from './Acca';
import WhyAcca from './WhyAcca';
import Eligibility from './Eligibility';
import Learn from './Learn';
import Placement from './Placement';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card1/>
      <div className='acca-cont'>
      <h1 className='what-is-acca'>What is ACCA?</h1>
      <div className='line'></div>
      </div>
      <div className='acca-main-cont'>
      <Acca/>
      </div>
        

      
      <div className='acca-cont'>
        <WhyAcca/>
      </div>
      <Eligibility/>
      <div className='acca-cont'>
      <Learn/>
      </div>
      <Placement/>
      
      
    </div>
  );
}

export default App;
