'use client';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart
            </button>
        </div>
    );
}
