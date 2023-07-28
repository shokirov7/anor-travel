import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout'
import Loader from '../components/loader/Loader'
import Router from './routes'



const appRoutes= (routes) => {
	return routes.map((route, key)=> (
		<React.Fragment key={key} >
			<Route path={route.path}
			 element={<Suspense fallback={<Loader/>}>{route.component}</Suspense>}
			 />
			{route.children && appRoutes(route.children)}
		</React.Fragment>
	))
}

const RoutesWrapper = () => {
	const isAuthenticated = true;

	return <Routes>
		<Route path='*' element={<h2 className='error-page'>Not Found 404</h2>}/>
		{isAuthenticated && <Route path='/' element={<Layout/>}>
			{appRoutes(Router.pages)}
		</Route>}
	</Routes>
}

export default RoutesWrapper