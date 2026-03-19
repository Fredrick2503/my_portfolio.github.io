"use client";
import { useEffect, useState } from "react";

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-wrapper ${loading ? "" : "hidden"}`} id="loader">
            <div className="loader"></div>
            <div className="loader-text">Loading</div>
        </div>
    );
}
