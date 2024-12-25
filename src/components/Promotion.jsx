import { FaTimes } from "react-icons/fa";
import { setGlobalState, useGlobalState } from "../store";

const Promotion = () => {
  const [openPromotion] = useGlobalState('openPromotion');

  return (
    <div className={openPromotion ? "opacity-100" : "opacity-0"}>
      <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-indigo-600 p-2 shadow-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-indigo-800 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    ></path>
                  </svg>
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="md:hidden">
                    Save 50% on any plan with Code 'LAUNCH'
                  </span>
                  <span className="hidden md:inline">
                    Launch Month! Use Code 'LAUNCH' to save 50% on any plan!
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                <button
                  type="button"
                  onClick={() => {
                    setGlobalState('openPromotion', false);
                  }}
                  className="border-0 bg-transparent focus:outline-none"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
