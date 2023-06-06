import { lazy } from 'react'
const Home = lazy(() => import('./components/home/Home'))
const Resume =  lazy(() => import('./components/page/Resume'))
const Portfolio =  lazy(() => import('./components/page/Portfolio'))
const Blog = lazy(()=> import('./components/page/Blog'))
const Contact = lazy(()=> import('./components/page/Contact'))

export const routes = [
    {
        path: '/',
        element : Home,
        name: 'home'
    },
    {
        path: '/resume',
        element : Resume,
        name: 'resume',
        exact: true
    },
    {
        path: '/portfolio',
        element : Portfolio,
        name: 'protfolio',
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