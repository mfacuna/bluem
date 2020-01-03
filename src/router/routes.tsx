import Home from '../components/home/home'
import About from '../components/about/about'
import Link from '../components/link/link'

const ROUTES = [
    {
        menu: 'Home',
        path: '/',
        component: Home
    },
    {
        menu: 'Link',
        path: '/Link',
        component: Link
    },
    {
        menu: 'About',
        path: '/About',
        component: About
    },
]

export default ROUTES;