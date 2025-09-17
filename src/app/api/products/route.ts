import { NextResponse } from "next/server";

export async function GET() {
    const products = [
        { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/300x200" },
        { id: 2, name: "Phone", price: 800, image: "https://via.placeholder.com/300x200" },
        { id: 3, name: "Headphones", price: 150, image: "https://via.placeholder.com/300x200" },
    ];
    return NextResponse.json(products);
}
