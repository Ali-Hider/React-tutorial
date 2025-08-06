# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

In this project, we learned about react router. the first thing is outlet. with this we determined a layout where footer and header will alays be same but the outlet part will change.
   <Header/>
      <Outlet />
      <Footer/>
 u can use outlet any position u want to arrange the layout. the content of layout will be determined from the router element. like :     
    const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>//parent
      <Route path='' element={<Home />} />//child . all of them
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)
when child elemnt is home then outlet shows content ofthe home. now wrap it with react provider.
     <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
u will also find the navlink and link in the content pages. 
another thing is to take dynamic value from url.
    <Route path='user/:userid' element={<User />} />
 note down whatever written after /:. cause it will be used in the page where url will e fetched.   
 
    import { useParams } from 'react-router'
    function User() {
    const {userid} = useParams()
    return (
     <div className='bg-gray-500 w-full'>
      <div className='text-white text-3xl p-4 text-center max-w-screen-xl mx-auto'>
      User: {userid}
    </div>
    </div>
  )

for this u also use useParams.
last u can fetch data from another site . 
 <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />

this way to fetch the data .

function Github() {
 const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
        
    //     setData(data)
    //  })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

Here’s a summary of the key concepts, libraries, and their uses in your React Router project:

✅ Libraries Used
Library	  Purpose
React	- Base library to build UI using components.
React Router DOM (react-router-dom)	- Enables routing in React apps (SPA behavior).

✅ Core Concepts Used
Concept	    Use/Explanation
createBrowserRouter()	- Creates route config using object-based format (v6.4+). Supports loaders, nested routes, etc.
RouterProvider	- Injects router into the app and handles route rendering.
<Route>	- Defines a route with a path and corresponding component (element).
Nested Routes- Define children routes under a parent to support shared layouts.
<Outlet />	Acts as a placeholder inside layout to render matched child components.
useParams()	Access dynamic URL segments (e.g., /user/:id) inside a component.
useNavigate()	Programmatic navigation — lets you redirect using code (not used in your current code, but relevant).
<Link>	Navigation without full-page reload (better than <a> for SPAs).
<NavLink>	Like <Link>, but also provides isActive styling to show current page.
Loaders (loader function)	Pre-fetch data for a route before the component renders (used in your Github route).
useLoaderData()	Access the preloaded data in a component fetched by a loader.

✅ Project Features
Feature	How It Works in Your Project
Layout Component	Contains <Header />, <Outlet />, <Footer />. Shared across all pages.
Dynamic Routing	Route /user/:userid allows dynamic content based on the URL.
Data Fetching with Loaders	githubInfoLoader fetches GitHub data before rendering the Github component.
No Full Page Reload	Navigation via <Link> and <NavLink> ensures smooth SPA behavior.
Active Link Styling	NavLink dynamically styles menu items based on current URL.

✅ Sample Folder/Route Structure You Used
cpp
Copy
Edit
src/
│
├── App.jsx              // Root component
├── Layout.jsx           // Contains Header, Footer, and <Outlet />
├── index.js             // Entry point, wraps with <RouterProvider>
├── components/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Github.jsx       // Uses useLoaderData
│   └── User.jsx         // Uses useParams