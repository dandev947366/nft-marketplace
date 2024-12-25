const Banner = () => {
    return (
      <>
        <div className="relative my-4 flex flex-col z-20 gap-4 lg:flex-row lg:items-center lg:justify-between min-h-[340px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid w-full m-auto -z-10 h-max md:grid-cols-2 gap-60 opacity-40"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary-500 to-purple-400"></div>
          </div>

          <div className="relative flex flex-col flex-shrink-0 w-full px-4 py-8 bg-white border border-gray-300 rounded-md shadow-md -z-10 dark:bg-gray-800 dark:border-gray-700 lg:w-1/2">
            <button
              title="Add this component to favorite list"
              className="absolute right-2 top-1 text-gray-600 dark:text-gray-400"
            >
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
                <span className="hidden md:block">Favorite</span>
              </span>
            </button>

            <h1 className="text-2xl font-bold md:text-3xl dark:text-gray-50">
              Promotional notification
            </h1>

            <div className="flex flex-col gap-4">
              <div>
                <p
                  id="c_description"
                  className="mt-2 text-lg text-gray-800 break-words dark:text-gray-100 line-clamp-4"
                >
                  Sticky bottom promotional banner
                </p>
              </div>

              <p className="pt-2 text-sm text-gray-700 dark:text-gray-300">
                This tailwind example is contributed by Laurits, on 12-Jan-2023.
                Component is made with Tailwind CSS v3. It is responsive.
              </p>

              <div className="flex flex-wrap items-center gap-2 py-3 text-gray-600 dark:text-gray-300">
                <a
                  href="https://tailwindflex.com/tag/banner"
                  className="font-semibold"
                >
                  Banner
                </a>
                <a
                  href="https://tailwindflex.com/tag/notification"
                  className="font-semibold"
                >
                  Notification
                </a>
              </div>
            </div>

            <div className="flex flex-col-reverse justify-between mt-4 lg:flex-row">
              <div className="flex gap-3">
                <a href="https://tailwindflex.com/@laurits">
                  <img
                    src="https://tailwindflex.com/storage/avatars/159.png?ver=1"
                    className="object-cover w-12 h-12 rounded-md"
                    alt="Laurits profile image"
                  />
                </a>

                <p className="flex flex-col text-gray-600 dark:text-gray-300">
                  <small>Author</small>
                  <a href="https://tailwindflex.com/@laurits">Laurits</a>
                </p>
              </div>

              <div className="flex items-center gap-2 mb-5 dark:text-gray-300 lg:mb-0">
                <div
                  title="Component is responsive"
                  className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    ></path>
                  </svg>
                </div>
                <div
                  title="Total views"
                  className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span>9k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Banner;
