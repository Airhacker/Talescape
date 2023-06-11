import Image from "next/image";
import backgroundImg from "../public/grid_0.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div>
        <Image
          className="object-cover -z-50"
          src={backgroundImg}
          fill={true}
          alt="Picture of the author"
        />
      </div>

      <div className="z-50">
        <h1 className="text-9xl text-white">Hello World</h1>
      </div>
    </main>
  );
}
