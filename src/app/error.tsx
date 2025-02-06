'use client';

export default function ErrorPage () {
    return (
        <div className="container h-screen flex items-center justify-center">
    <h2 className="text-center to-blue-950 font-bold ">Oops! We have technical difficulties.</h2>
    <ul className="my-24 mx-28 to-blue-700">
     <li className="text-center">We are already working on this issue.</li>
     <li className="text-center">Please refresh the page or check back later.</li>
     <li className="text-center">Thank you for your patience!</li>
     </ul>
     <div className="container">
     <button type='button' className="" onClick={() => window.location.reload()}>Refresh the page</button>
    </div>
        </div>
    )
}