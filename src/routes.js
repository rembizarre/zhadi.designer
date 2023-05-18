import Main from './pages/Main';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Gallery from './pages/Gallery';

// Indicating pages for AppRouter
const publicRoutes = [
  {
    path: '/',
    Component: Main,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/contacts',
    Component: Contacts,
  },
  {
    path: '/portfolio',
    Component: Portfolio,
  },
  {
    path: '/portfolio/:id',
    Component: Gallery,
  },
  {
    path: '/services',
    Component: Services,
  },
];

export default publicRoutes;
