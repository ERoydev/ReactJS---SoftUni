import { Link, Routes, Route, Outlet } from 'react-router-dom'

export default function About() {
    return (
        <>
            <h3>About Page</h3>

            <nav>
                <Link to='us'>About Us</Link>
                <Link to='missions'>Mission</Link>
                <Link to='values'>Our Values</Link>
            </nav>

            <Outlet />
        </>
    );
}