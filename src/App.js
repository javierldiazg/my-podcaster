import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home";
import Podcast from "./components/pages/podcast";
import Episode from "./components/pages/episode";
import NoFound from './components/pages/noFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/podcast/:podcastId" element={<Podcast />} />
          <Route exact path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
