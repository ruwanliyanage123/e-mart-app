import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <>
        <Navbar />
        <main className="p-8 text-center">
          <h1 className="text-4xl font-bold">Welcome to E-Mart</h1>
          <p className="mt-4 text-gray-600">The best place to shop online</p>
        </main>
      </>
  );
}
