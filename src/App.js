import CoursesList from './components/coursesList.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

const App = () => {
  document.title = 'IB Grade Calculator';

  return (
    <div>
      <Header />

      <CoursesList />

      <Footer
        appName={process.env.REACT_APP_NAME}
        appVersion={process.env.REACT_APP_VERSION}
        appSourceCodeUrl='https://github.com/pokir/ib-grade-calculator'
      />
    </div>
  );
}

export default App;
