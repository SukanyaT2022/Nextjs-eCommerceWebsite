import "@/styles/globals.css";
import Navbar from '../components/Navbar'
import Navbar2 from "@/components/Navbar2";

export default function App({ Component, pageProps }) {
  return(
    <div>
      {/* <Navbar/> */}
      <Navbar2/>
      <Component {...pageProps} />
    </div>
)}
