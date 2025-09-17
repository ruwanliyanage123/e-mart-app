import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
    const res = await fetch("http://localhost:3000/api/products"); // Next.js API route
    const products = await res.json();

    return (
        <>
            <Navbar />
            <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p: any) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </main>
        </>
    );
}
