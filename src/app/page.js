import Header from "./components/Header";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="hero-section section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Responsive left-aligned hero with image</h1>
            <p>
              A responsive navigation header, including support for branding,
              navigation, and more. Here’s an example of all the sub-components
              included in a responsive light-themed navbar that automatically
              collapses at the lg (large) breakpoint.
            </p>
            <button className="btn btn-danger mx-2">Primary</button>
            <button className="btn btn-outline-secondary mx-2">
              Secondary
            </button>
          </div>
          <div className="col-lg-6">
            <Image src="/wa.jpg" width={476} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
