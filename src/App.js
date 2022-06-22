// import logo from './logo.svg';
import './App.css';

import Header from './component/HeaderComponent/Header';
// 
import Footer from './component/FooterComponent/Footer';
import './_aem-grid-12.scss';
// import Menu from './component/MenuComponent/Menu';


function App(props) {
  return (
    <div className="App">
      
      <Header />
      {/* */}

      {props.children}
     
      <Footer />
      
      {/* <Menu /> */}
      
    </div>
  );
}

export default App;
