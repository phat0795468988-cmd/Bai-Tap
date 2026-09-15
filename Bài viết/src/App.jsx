import './App.css'
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header'
import HomePage from './components/Movies/Home';
import Content from './components/Movies/Content';
import SearchPage from './components/Movies/Search';
import ContentDetail from './components/Movies/ContentDetail';
function App() {
  return(
    <>
      <Header/>
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/detail' element ={<Content/>}/>
        <Route path='/search' element ={<SearchPage/>}/>
        <Route path='/detail/:id' element={<ContentDetail/>}/>
      </Routes>
      
    </>
  )
}

export default App
