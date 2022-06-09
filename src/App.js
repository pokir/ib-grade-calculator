import CoursesList from './components/coursesList.jsx';
import Footer from './components/footer.jsx';

const App = () => {
  document.title = 'IB Grade Calculator';

  return (
    <div>
      <CoursesList />

      <Footer appName={process.env.REACT_APP_NAME} appVersion={process.env.REACT_APP_VERSION} />
    </div>
  );
}

export default App;
