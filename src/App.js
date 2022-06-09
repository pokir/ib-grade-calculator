import './App.css';
import Course from './components/course.jsx';

const App = () => {
  document.title = 'IB Grade Calculator';

  return (
    <div className="App">
      <Course />
    </div>
  );
}

export default App;
