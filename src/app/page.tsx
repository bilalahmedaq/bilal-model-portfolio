import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "#0c0c0c" }}>
      <Header />

      {/* Gallery section */}
      <div className="flex-1 py-10">
        <Gallery />
      </div>

      <Footer />
    </main>
  );
}
