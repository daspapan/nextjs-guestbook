"use client";

import { useEffect, useState } from "react";

export default function GuestbookPage() {

    const fetchGuestbooks = async() => {
        const res = await fetch("http://localhost:3000/api/guestbooks");
        console.log(res)
        const guestbooks = await res.json();
        return guestbooks
    }

    const [guestbooks, setGuestbooks] = useState([])

    useEffect(()=>{
        fetchGuestbooks().then((guestbook) => {
            setGuestbooks(guestbook)
        })
    }, [])

    return (
        <section className="py-24">
        <div className="container">
            <h1 className="mt-4 bottom-5 text-3x1 font-bold"> Guest Book</h1>

            {guestbooks.map((guestbook: any) => (
                <div key={guestbook._id}>
                    <h2>Name: {guestbook.name}</h2>
                    <p>Comment: {guestbook.comment}</p>
                    <p>Rating: {guestbook.rating}</p>
                </div>
            ))}
        </div>
        </section>
    );
}
