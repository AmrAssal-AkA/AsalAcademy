import './App.css'
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import HomePage from './Pages/Home';
import Courses from './Pages/Courses';
import Resources from './Pages/Resources';
import About from './Pages/About';
import Header from './component/Header';
import Footer from './component/Footer';
import LoginForm from './Pages/loginForm';
import RegisterForm from './Pages/RegisterForm';
import IntroInReact from './Pages/courses/IntroInReact';
import AdvJs from './Pages/courses/AdvJs';


function App() {

  return (
  <>

  <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses'  element={<Courses />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/about' element={ <About /> } />
        <Route path='/login' element={<LoginForm />} /> 
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/introinReact' element={<IntroInReact />} />
        <Route path='/advancedJavaScript' element={<AdvJs />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>

    </>
  )
}

export default App
