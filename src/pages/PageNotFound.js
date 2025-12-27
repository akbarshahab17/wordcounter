import { Link } from "react-router-dom";
import oops from "../assets/oops.jpg";

export const PageNotFound = () => {
  return (
    <main>
        <section className="section-border">
            <div>
                <h1 className="text-7xl text-gray-700 font-bold my-10 dark:text-white text-center">Oops - Page Not Found!</h1>
                <div className="max-w-xs">
                    <img className="" src={oops} alt="Page Not Found" />
                </div>
            </div>
            <div className="flex justify-center my-4">
                <Link to="/">
                    <button type="button" className="button2">Back To Word Counter</button>
                </Link>
            </div>
        </section>
    </main>
  )
}