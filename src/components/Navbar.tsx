'use client';

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <Link href="/" className="font-bold text-xl">E-Mart</Link>
            <div className="space-x-4">
                <Link href="/cart">Cart</Link>
            </div>
        </nav>
    );
}
