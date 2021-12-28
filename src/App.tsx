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
import Register from './pages/Auth/forms/Register';
import Login from './pages/Auth/forms/Login';
import NotFoundPage from './pages/NotFoundPage';
import Support from "./pages/Support";
//components
import Loader from "./components/loaders/Loader";
//redux
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/slices/appSlice";
import {RootState} from "./redux/store";

function App() {
    const dispatch = useDispatch()
    const initialized = useSelector((state: RootState) => state.app.initialized)

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
                <Route path={"cart"} element={<Cart/>}/>
                {isMobile && <Route path={"about"} element={<About/>}/>}
                {isMobile && <Route path={"restaurants"} element={<Restaurants/>}/>}
                <Route path={"vacancies"} element={<Vacancies/>}/>
                <Route path={"vacancies/:id"} element={<Vacancy/>}/>
                <Route path={"menu"} element={<Menu/>}/>
                <Route path={"auth"} element={<Login/>}/>
                <Route path={"auth/login"} element={<Login/>}/>
                <Route path={"auth/register"} element={<Register/>}/>
                <Route path={"support"} element={<Support/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
                <Route path={"/"} element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;
