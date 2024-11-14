import { useState } from "react";

const Asking = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <>
    <section className="bg-white dark:bg-[#111928]">
     <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4 mt-12">
          <div className="mx-auto mb-16 max-w-[520px] text-center">
            <span className="block mb-2 text-lg font-semibold text-blue-600">FAQ</span>
            <h2 className="text-dark dark:text-white mb-4 text-3xl font-bold sm:text-[40px]">Any Questions? Look Here</h2>
            <p className="text-base text-gray-400 dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="w-full px-4 lg:w-1/2 mb-8">
            <div className="p-4 bg-white dark:bg-[#1a2230] dark:border-200 border-0 rounded-lg shadow sm:p-8">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full text-left items-center"
              >
                <div className="bg-gray-100 dark:bg-white/5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                  <svg
                    className={`${openFaq === index ? "rotate-180" : ""} transition-transform`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="#ffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                      fill="blue"
                    />
                  </svg>
                </div>
                <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                  How long we deliver your first blog post?
                </h4>
              </button>

              {/* Dropdown content */}
              <div
                className={`faq-content transition-opacity duration-200 ease-in-out overflow-hidden ${
                  openFaq === index ? "opacity-100 h-auto" : "opacity-0 h-0"
                }`}
              >
                <p className="pl-[62px] py-3 text-base leading-relaxed text-gray-400 dark:text-dark-6">
                  It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your first blog post, Ipsum available.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    </>
  )
}

export default Asking