import React from 'react';
import '../styles/App.css';
import Header from "./Header/Header";
import Footer from "./Footer";
import MyRouter from "../Routers/MyRouter";

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <main className='main'>
                <MyRouter/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;