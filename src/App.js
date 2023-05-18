import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import ScrollToTop from './components/ScrollToTop';
import Scroller from './components/Scroller/Scroller';

function App() {
  return (
    <BrowserRouter>
      <Scroller />
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
