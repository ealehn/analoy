import './App.css';
import TopSidePane from './components/topsidepane';
import BottomSidePane from './components/bottomsidepane';

function App() {

  return (
    <div className='app-pane'>

      <div className='left-right-container'>

        <TopSidePane/>

        <BottomSidePane/>

      </div>


    </div>
  );
}

export default App;
