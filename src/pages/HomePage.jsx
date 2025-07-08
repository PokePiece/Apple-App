import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Model from '../components/Model';
import '../index.css';

function HomePage() {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <Highlights />
            <Model />
        </main>

    );
}

export default HomePage;