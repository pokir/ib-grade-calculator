import './App.css';
import Course from './components/course.jsx';
import Footer from './components/footer.jsx';

const App = () => {
  document.title = 'IB Grade Calculator';

  return (
    <div className="App">
      <Course />

      <Footer appName={process.env.REACT_APP_NAME} appVersion={process.env.REACT_APP_VERSION} />
    </div>
  );
}

export default App;
