import React from "react";
import { Routes, Route } from "react-router-dom";
import ProposalPage from "./component/proposal";
import Caution from "./component/caution";
import GiftPage from "./component/lastPage";
import ReplyOnNegetiveResponse from "./component/negetiveResponse";
import PositiveResponse from "./component/positive";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Caution />} />
      <Route path="/prop" element={<ProposalPage />} />
      <Route path="/gift" element={<GiftPage />} />
      <Route path="/killed" element={<ReplyOnNegetiveResponse />} />
      <Route path="/endofstory" element={<PositiveResponse />} />
      {/* fallback */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
