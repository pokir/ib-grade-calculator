import CoursesList from './components/coursesList';
import Header from './components/header';
import Footer from './components/footer';

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
