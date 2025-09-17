import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
    const query = `
    query {
      products {
        id
        name
        price
        stockCount
      }
    }
  `;

    const res = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        cache: "no-store", // disable caching in Next.js server components
    });
    const { data } = await res.json();

    return (
        <>
            <Navbar />
            <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.products.map((p: any) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </main>
        </>
    );
}
