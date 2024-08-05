
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      <Navbar />
      <main className="flex-grow">
        <Button className="mt-10">Haz me click</Button>

      </main>

      <Footer />
      {/* <Main /> */}
      {/* <Footer /> */}


    </main>
  );
}
