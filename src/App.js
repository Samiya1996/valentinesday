import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProposalPage from './component/proposal';
import Caution from './component/caution';
import GiftPage from './component/lastPage';
import { BrowserRouter as Switch, Router, Route, Routes,Link } from 'react-router-dom';
import ReplyOnNegetiveResponse from './component/negetiveResponse';
import PositiveResponse from './component/positive';


function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" exact element={<Caution/>} />
      <Route path="/prop"  element={<ProposalPage/>} />
      <Route path="/gift"  element={<GiftPage/>} />
      <Route path="/killed"  element={<ReplyOnNegetiveResponse/>} />
      <Route path="/endofstory"  element={<PositiveResponse/>
    } />
    </Routes>
    
    </>
  );
}

export default App;
