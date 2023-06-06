import { lazy } from 'react'
const Home = lazy(() => import('./components/Home'))
const About =  lazy(() => import('./components/About'))
const Services=  lazy(() => import('./components/Services'))
const Works =  lazy(() => import('./components/About'))
const Journey=  lazy(() => import('./components/Journey'))
const Blog = lazy(()=> import('./components/Blog'))
const Contact = lazy(()=> import('./components/Contact'))

export const routes = [
    {
        path: '/',
        element : Home,
        name: 'home'
    },
    {
        path: '/about',
        element : About,
        name: 'about',
        exact: true
    },
    {
        path: '/services',
        element : Services,
        name: 'services',
        exact: true
    },
    {
        path: '/works',
        element : Works,
        name: 'works',
        exact: true
    },
    {
        path: '/journey',
        element : Journey,
        name: 'journey',
        exact: true
    },
    {
        path: '/blog',
        element : Blog,
        name: 'blog',
        exact: true
    },
    {
        path: '/contact',
        element : Contact,
        name: 'contact',
        exact: true
    }
]