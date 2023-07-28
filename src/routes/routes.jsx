import { lazy } from 'react'

// const {Posts, SinglePost} = PageComp

const Home = lazy(()=> import('../pages/home/Home'))
const Posts = lazy(()=> import('../pages/post/posts'));
const About = lazy(()=> import('../pages/about/About'));
const SinglePost = lazy(()=> import('../pages/post/singlePost'))
const Adventures = lazy(()=> import('../pages/adventures'))

const pages = [
	{
		path:'/',
		component: <Home/>
	},
	{
		path: '/posts',
		component: <Posts />,
	},
	{
		path: '/posts/:id',
		component: <SinglePost />,
	},
	{
		path: "/adventures/:id",
		component: <Adventures />
	},
	{
		path: "/about",
		component: <About />
	}
]
export default {pages}