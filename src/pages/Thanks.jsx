import { Link } from "react-router-dom";
import { HiOutlineCheckCircle } from "react-icons/hi";

function Thanks() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6 pt-24">
      <div
        className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-xl"
        data-aos="fade-up"
      >
        <HiOutlineCheckCircle className="mx-auto mb-4 text-5xl text-green-500" />
        <h1 className="mb-2 text-3xl font-bold text-indigo-600">Thank You!</h1>
        <p className="mb-6 text-lg text-gray-700">
          Your message has been sent successfully. I'll get back to you as soon
          as I can.
        </p>
        <Link
          to="/"
          className="inline-block rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

export default Thanks;
