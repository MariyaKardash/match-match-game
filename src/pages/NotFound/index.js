import { Header } from "../../components/Header";
import "./NotFound.css";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <h1>
          I'm so sorry, but we can't find this page. Please check your URL.
        </h1>
      </div>
    </>
  );
}
