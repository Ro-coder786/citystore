import Image from "next/image";
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
      <div>
          <Navbar/>
          <ProductList></ProductList>
      </div>
  );
}
