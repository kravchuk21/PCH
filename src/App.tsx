import React from 'react';
import {Route, Routes} from "react-router-dom";
import {isMobile} from 'react-device-detect';
//pages
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Menu from './pages/Menu';
import Restaurants from "./pages/Restaurants";
import Vacancies from "./pages/Vacancies";
import Vacancy from "./pages/Vacancy";
import Main from "./pages/Main";
//redux
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/slices/appSlice";
import {RootState} from "./redux/store";
//components
import Loader from "./components/loaders/Loader";
//pages
import NotFoundPage from './pages/NotFoundPage';
import Support from "./pages/Support";

const Login = React.lazy(() => import('./pages/Auth/forms/Login'));
const Register = React.lazy(() => import('./pages/Auth/forms/Register'));
const Sepport = React.lazy(() => import('./pages/Auth/forms/Register'));


const LoginPage = () => (<React.Suspense fallback={<Loader/>}>
    <Login/>
</React.Suspense>)

const RegisterPage = () => (<React.Suspense fallback={<Loader/>}>
    <Register/>
</React.Suspense>)

const SupportPage = () => (<React.Suspense fallback={<Loader/>}>
    <Support/>
</React.Suspense>)

function App() {
    const dispatch = useDispatch()
    const initialized = useSelector((state: RootState) => state.app.initialized)
    const isAuth = useSelector((state: RootState) => state.user.isAuth)

    React.useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!initialized) {
        return <Loader/>
    }

    return (
        <div className="App">
            <Routes>
                <Route path={"product/:id"} element={<Product/>}/>
                <Route path={"cart"} element={isAuth ? <Cart/> : <Login/>}/>
                {isMobile && <Route path={"about"} element={<About/>}/>}
                {isMobile && <Route path={"restaurants"} element={<Restaurants/>}/>}
                <Route path={"vacancies"} element={<Vacancies/>}/>
                <Route path={"vacancies/:id"} element={<Vacancy/>}/>
                <Route path={"menu"} element={<Menu/>}/>
                <Route path={"auth"} element={<LoginPage/>}/>
                <Route path={"auth/login"} element={<LoginPage/>}/>
                <Route path={"auth/register"} element={<RegisterPage/>}/>
                <Route path={"support"} element={isAuth ? <SupportPage/> : <LoginPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
                <Route path={"/"} element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;
