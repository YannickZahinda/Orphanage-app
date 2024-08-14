import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import Donate from '../components/Donate';
import HomePage from '../components/HomePage';
import OurWork from '../components/OurWork';
import MwabanaCenter from '../components/MwabanaCenter';
import OurChildren from '../components/OurChildren';
import AboutUs from '../components/AboutUs'

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {index: true, element: <HomePage />},
            {path: '/about-us', element: <AboutUs />}, 
            {path: '/our-work', element: <OurWork />},
            {path: '/mwabana-center', element: <MwabanaCenter />},
            {path: '/our-children', element: <OurChildren />},
            {path: '/blog', element: <Blog />},
            {path: '/donate', element: <Donate />},
        ],
    },

    
]);

export default router;