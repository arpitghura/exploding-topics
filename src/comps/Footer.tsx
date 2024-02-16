import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

const FooterSec = () => {
  return (
    <Fragment>
      <Separator className=" my-20" />
      <footer className="px-2 md:px-6 lg:px-12 xl:px-24 py-6">
        <div className="flex flex-wrap justify-evenly">
          <div className="footer_left w-3/5">
            <Link href="/">
              <svg
                width="236"
                height="16"
                viewBox="0 0 236 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.5366 16.0551V0.327654H44.8076V3.1018H37.5086V6.46572H43.4964V9.23987H37.5086V13.2809H44.8076V16.0551H34.5366Z"
                  fill="#121737"
                ></path>
                <path
                  d="M45.6783 16.0551L50.9667 8.104L45.8312 0.327654H49.4807L52.8242 5.57013L56.124 0.327654H59.7953L54.6599 8.104L59.9265 16.0551H56.277L52.8242 10.6379L49.3496 16.0551H45.6783Z"
                  fill="#121737"
                ></path>
                <path
                  d="M61.2349 16.0551V0.327654H67.8782C68.0312 0.327654 68.2352 0.334936 68.4901 0.349498C68.7524 0.35678 68.9855 0.378623 69.1894 0.415029C70.1291 0.560654 70.8976 0.870105 71.4949 1.34338C72.0995 1.81666 72.5439 2.41372 72.8279 3.13456C73.112 3.84812 73.2541 4.64542 73.2541 5.52645C73.2541 6.40747 73.1084 7.20841 72.817 7.92925C72.5329 8.64281 72.0886 9.23623 71.484 9.70951C70.8867 10.1828 70.1218 10.4922 69.1894 10.6379C68.9855 10.667 68.7524 10.6888 68.4901 10.7034C68.2279 10.718 68.0239 10.7252 67.8782 10.7252H64.2069V16.0551H61.2349ZM64.2069 7.95109H67.7471C67.9001 7.95109 68.0676 7.94381 68.2497 7.92925C68.4318 7.91469 68.5994 7.88556 68.7524 7.84187C69.153 7.73266 69.4626 7.55063 69.6811 7.29578C69.8996 7.03366 70.049 6.74605 70.1291 6.43296C70.2165 6.11258 70.2602 5.81041 70.2602 5.52645C70.2602 5.24248 70.2165 4.94395 70.1291 4.63086C70.049 4.31048 69.8996 4.02287 69.6811 3.76803C69.4626 3.50591 69.153 3.32024 68.7524 3.21102C68.5994 3.16733 68.4318 3.13821 68.2497 3.12364C68.0676 3.10908 67.9001 3.1018 67.7471 3.1018H64.2069V7.95109Z"
                  fill="#121737"
                ></path>
                <path
                  d="M75.2294 16.0551V0.327654H78.2014V13.2809H84.9759V16.0551H75.2294Z"
                  fill="#121737"
                ></path>
                <path
                  d="M92.7224 16.3827C91.149 16.3827 89.7905 16.0405 88.6468 15.3561C87.5105 14.6717 86.6327 13.7142 86.0135 12.4837C85.4016 11.2531 85.0957 9.82236 85.0957 8.19137C85.0957 6.56038 85.4016 5.12962 86.0135 3.89909C86.6327 2.66857 87.5105 1.71109 88.6468 1.02665C89.7905 0.342217 91.149 0 92.7224 0C94.2958 0 95.6507 0.342217 96.7871 1.02665C97.9307 1.71109 98.8085 2.66857 99.4204 3.89909C100.04 5.12962 100.349 6.56038 100.349 8.19137C100.349 9.82236 100.04 11.2531 99.4204 12.4837C98.8085 13.7142 97.9307 14.6717 96.7871 15.3561C95.6507 16.0405 94.2958 16.3827 92.7224 16.3827ZM92.7224 13.5868C93.7204 13.6013 94.5508 13.3865 95.2137 12.9424C95.8765 12.4982 96.3719 11.8684 96.6997 11.0529C97.0348 10.2374 97.2023 9.28356 97.2023 8.19137C97.2023 7.09919 97.0348 6.15263 96.6997 5.3517C96.3719 4.55076 95.8765 3.92822 95.2137 3.48406C94.5508 3.03991 93.7204 2.81055 92.7224 2.79599C91.7245 2.78143 90.8941 2.99622 90.2312 3.44038C89.5683 3.88453 89.0693 4.51436 88.7342 5.32985C88.4064 6.14535 88.2425 7.09919 88.2425 8.19137C88.2425 9.28356 88.4064 10.2301 88.7342 11.031C89.0693 11.832 89.5683 12.4545 90.2312 12.8987C90.8941 13.3428 91.7245 13.5722 92.7224 13.5868Z"
                  fill="#121737"
                ></path>
                <path
                  d="M102.093 16.0551V0.327654H107.185C107.309 0.327654 107.564 0.331295 107.95 0.338577C108.336 0.345858 108.707 0.371342 109.064 0.415029C110.332 0.567935 111.406 1.00845 112.288 1.73657C113.169 2.46469 113.839 3.38941 114.298 4.51072C114.757 5.63202 114.987 6.85891 114.987 8.19137C114.987 9.52384 114.757 10.7507 114.298 11.872C113.839 12.9933 113.169 13.9181 112.288 14.6462C111.406 15.3743 110.332 15.8148 109.064 15.9677C108.707 16.0114 108.336 16.0369 107.95 16.0442C107.564 16.0514 107.309 16.0551 107.185 16.0551H102.093ZM105.109 13.2591H107.185C107.382 13.2591 107.648 13.2555 107.983 13.2482C108.318 13.2336 108.62 13.2009 108.89 13.1499C109.574 13.0115 110.132 12.6912 110.561 12.1888C110.998 11.6864 111.319 11.082 111.523 10.3757C111.734 9.66946 111.84 8.94134 111.84 8.19137C111.84 7.405 111.73 6.65867 111.512 5.9524C111.301 5.24612 110.977 4.64906 110.539 4.16122C110.102 3.67338 109.552 3.36392 108.89 3.23286C108.62 3.17461 108.318 3.14185 107.983 3.13456C107.648 3.12728 107.382 3.12364 107.185 3.12364H105.109V13.2591Z"
                  fill="#121737"
                ></path>
                <path
                  d="M117.39 16.0551V0.327654H120.362V16.0551H117.39Z"
                  fill="#121737"
                ></path>
                <path
                  d="M123.2 16.0551V0.327654H126.216L133.056 10.8126V0.327654H136.072V16.0551H133.056L126.216 5.57013V16.0551H123.2Z"
                  fill="#121737"
                ></path>
                <path
                  d="M145.239 16.3827C144.249 16.3827 143.305 16.208 142.409 15.8585C141.513 15.5017 140.719 14.9775 140.027 14.2858C139.343 13.594 138.8 12.7385 138.399 11.7191C138.006 10.6998 137.809 9.52384 137.809 8.19137C137.809 6.45116 138.141 4.97307 138.804 3.75711C139.474 2.53386 140.37 1.60187 141.492 0.96112C142.621 0.320374 143.87 0 145.239 0C147.264 0 148.856 0.469639 150.014 1.40892C151.173 2.34819 151.948 3.67702 152.342 5.39538L149.304 5.83226C149.02 4.91482 148.554 4.18306 147.905 3.63697C147.264 3.0836 146.441 2.80327 145.436 2.79599C144.438 2.78143 143.608 2.99622 142.945 3.44038C142.282 3.88453 141.783 4.51436 141.448 5.32985C141.12 6.14535 140.956 7.09919 140.956 8.19137C140.956 9.28356 141.12 10.2301 141.448 11.031C141.783 11.832 142.282 12.4545 142.945 12.8987C143.608 13.3428 144.438 13.5722 145.436 13.5868C146.114 13.6013 146.725 13.4848 147.272 13.2373C147.825 12.9897 148.292 12.6002 148.67 12.0686C149.049 11.5371 149.319 10.8563 149.479 10.0262H146.988V7.73266H152.648C152.662 7.82731 152.673 7.99478 152.68 8.23506C152.688 8.47534 152.691 8.61368 152.691 8.65009C152.691 10.1573 152.385 11.4934 151.773 12.6584C151.162 13.8234 150.298 14.7372 149.184 15.3998C148.069 16.0551 146.755 16.3827 145.239 16.3827Z"
                  fill="#121737"
                ></path>
                <path
                  d="M162.031 16.0551V3.1018H157.071V0.327654H169.964V3.1018H165.003V16.0551H162.031Z"
                  fill="#121737"
                ></path>
                <path
                  d="M178.036 16.3827C176.462 16.3827 175.104 16.0405 173.96 15.3561C172.824 14.6717 171.946 13.7142 171.327 12.4837C170.715 11.2531 170.409 9.82236 170.409 8.19137C170.409 6.56038 170.715 5.12962 171.327 3.89909C171.946 2.66857 172.824 1.71109 173.96 1.02665C175.104 0.342217 176.462 0 178.036 0C179.609 0 180.964 0.342217 182.1 1.02665C183.244 1.71109 184.122 2.66857 184.734 3.89909C185.353 5.12962 185.662 6.56038 185.662 8.19137C185.662 9.82236 185.353 11.2531 184.734 12.4837C184.122 13.7142 183.244 14.6717 182.1 15.3561C180.964 16.0405 179.609 16.3827 178.036 16.3827ZM178.036 13.5868C179.034 13.6013 179.864 13.3865 180.527 12.9424C181.19 12.4982 181.685 11.8684 182.013 11.0529C182.348 10.2374 182.515 9.28356 182.515 8.19137C182.515 7.09919 182.348 6.15263 182.013 5.3517C181.685 4.55076 181.19 3.92822 180.527 3.48406C179.864 3.03991 179.034 2.81055 178.036 2.79599C177.038 2.78143 176.207 2.99622 175.544 3.44038C174.881 3.88453 174.382 4.51436 174.047 5.32985C173.72 6.14535 173.556 7.09919 173.556 8.19137C173.556 9.28356 173.72 10.2301 174.047 11.031C174.382 11.832 174.881 12.4545 175.544 12.8987C176.207 13.3428 177.038 13.5722 178.036 13.5868Z"
                  fill="#121737"
                ></path>
                <path
                  d="M187.406 16.0551V0.327654H194.05C194.203 0.327654 194.407 0.334936 194.662 0.349498C194.924 0.35678 195.157 0.378623 195.361 0.415029C196.301 0.560654 197.069 0.870105 197.666 1.34338C198.271 1.81666 198.715 2.41372 198.999 3.13456C199.284 3.84812 199.426 4.64542 199.426 5.52645C199.426 6.40747 199.28 7.20841 198.989 7.92925C198.704 8.64281 198.26 9.23623 197.655 9.70951C197.058 10.1828 196.293 10.4922 195.361 10.6379C195.157 10.667 194.924 10.6888 194.662 10.7034C194.399 10.718 194.195 10.7252 194.05 10.7252H190.378V16.0551H187.406ZM190.378 7.95109H193.919C194.072 7.95109 194.239 7.94381 194.421 7.92925C194.603 7.91469 194.771 7.88556 194.924 7.84187C195.324 7.73266 195.634 7.55063 195.853 7.29578C196.071 7.03366 196.22 6.74605 196.301 6.43296C196.388 6.11258 196.432 5.81041 196.432 5.52645C196.432 5.24248 196.388 4.94395 196.301 4.63086C196.22 4.31048 196.071 4.02287 195.853 3.76803C195.634 3.50591 195.324 3.32024 194.924 3.21102C194.771 3.16733 194.603 3.13821 194.421 3.12364C194.239 3.10908 194.072 3.1018 193.919 3.1018H190.378V7.95109Z"
                  fill="#121737"
                ></path>
                <path
                  d="M201.401 16.0551V0.327654H204.373V16.0551H201.401Z"
                  fill="#121737"
                ></path>
                <path
                  d="M213.964 16.3827C212.391 16.3827 211.032 16.0405 209.889 15.3561C208.752 14.6717 207.874 13.7142 207.255 12.4837C206.643 11.2531 206.337 9.82236 206.337 8.19137C206.337 6.56038 206.643 5.12962 207.255 3.89909C207.874 2.66857 208.752 1.71109 209.889 1.02665C211.032 0.342217 212.391 0 213.964 0C215.771 0 217.286 0.447795 218.51 1.34338C219.741 2.23897 220.607 3.4513 221.11 4.98035L218.116 5.81041C217.825 4.85657 217.333 4.11753 216.641 3.59328C215.949 3.06175 215.057 2.79599 213.964 2.79599C212.966 2.79599 212.132 3.01806 211.462 3.46222C210.799 3.90637 210.3 4.53256 209.965 5.34077C209.63 6.14899 209.462 7.09919 209.462 8.19137C209.462 9.28356 209.63 10.2338 209.965 11.042C210.3 11.8502 210.799 12.4764 211.462 12.9205C212.132 13.3647 212.966 13.5868 213.964 13.5868C215.057 13.5868 215.949 13.321 216.641 12.7895C217.333 12.2579 217.825 11.5189 218.116 10.5723L221.11 11.4024C220.607 12.9314 219.741 14.1438 218.51 15.0394C217.286 15.9349 215.771 16.3827 213.964 16.3827Z"
                  fill="#121737"
                ></path>
                <path
                  d="M229.685 16.3827C228.519 16.3827 227.466 16.1789 226.527 15.7711C225.594 15.3561 224.826 14.7663 224.221 14.0018C223.624 13.23 223.245 12.3125 223.085 11.2495L226.188 10.7908C226.407 11.6936 226.858 12.389 227.543 12.8768C228.228 13.3647 229.007 13.6086 229.881 13.6086C230.369 13.6086 230.843 13.5321 231.302 13.3792C231.761 13.2263 232.136 13.0006 232.427 12.7021C232.726 12.4036 232.875 12.0359 232.875 11.599C232.875 11.4388 232.85 11.2859 232.799 11.1403C232.755 10.9874 232.678 10.8454 232.569 10.7143C232.46 10.5833 232.303 10.4595 232.099 10.343C231.903 10.2265 231.651 10.1209 231.345 10.0262L227.259 8.82484C226.953 8.73746 226.596 8.61368 226.188 8.4535C225.787 8.29331 225.398 8.06395 225.019 7.76542C224.64 7.46689 224.323 7.0737 224.068 6.58586C223.821 6.09074 223.697 5.4682 223.697 4.71823C223.697 3.66245 223.963 2.78507 224.494 2.08607C225.026 1.38707 225.736 0.866464 226.625 0.524248C227.514 0.18203 228.497 0.0145618 229.575 0.0218433C230.661 0.0364056 231.629 0.222077 232.482 0.578857C233.334 0.935637 234.048 1.45624 234.623 2.14068C235.199 2.81783 235.614 3.64789 235.869 4.63086L232.657 5.17695C232.54 4.66726 232.325 4.23767 232.012 3.88817C231.699 3.53867 231.324 3.27291 230.886 3.09088C230.457 2.90885 230.005 2.81055 229.532 2.79599C229.065 2.78143 228.625 2.84696 228.209 2.99258C227.802 3.13092 227.466 3.3348 227.204 3.6042C226.949 3.87361 226.822 4.19398 226.822 4.56532C226.822 4.90754 226.927 5.18787 227.139 5.40631C227.35 5.61746 227.616 5.78857 227.936 5.91963C228.257 6.05069 228.585 6.15991 228.92 6.24729L231.651 6.98997C232.059 7.09919 232.511 7.24481 233.006 7.42684C233.502 7.60159 233.975 7.84915 234.427 8.16953C234.886 8.48262 235.261 8.89765 235.552 9.41462C235.851 9.93158 236 10.5869 236 11.3805C236 12.2252 235.822 12.9642 235.465 13.5977C235.115 14.2239 234.642 14.7445 234.044 15.1595C233.447 15.5672 232.769 15.8731 232.012 16.0769C231.262 16.2808 230.486 16.3827 229.685 16.3827Z"
                  fill="#121737"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.3222 0.442871H17.2187V3.54231H26.0829L17.2187 12.5841L9.99176 5.2124L0 15.3864H4.34418L9.98982 9.6378L17.2187 17.0115L28.2227 5.78704V15.9619H31.3222V0.442871Z"
                  fill="url(#paint0_linear_571_44)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_571_44"
                    x1="1.30906e-08"
                    y1="0.715381"
                    x2="13.6963"
                    y2="26.6076"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2E5CE5"></stop>
                    <stop offset="1" stopColor="#348FEB"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="w-full flex menu-group flex-row justify-between">
            <div className="footer_block f_menu_block">
              <h6 className="font-bold text-base text-secondary-foreground">
                Explore
              </h6>
              <ul className="footer_menu">
                <li className=" my-6">
                  <Link
                    className="border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
                    href="#new"
                  >
                    Add a Topic
                  </Link>
                </li>
                <li className=" my-6">
                  <Link
                    className="border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
                    href="#newsletter"
                  >
                    Newsletter
                  </Link>
                </li>
                <li className=" my-6">
                  <Link
                    className="border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
                    href="#blog/library"
                  >
                    Blog
                  </Link>
                </li>
                <li className=" my-6">
                  <Link
                    className="border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
                    href="#affiliate"
                  >
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_block f_menu_block">
              <h6 className="font-bold text-base text-secondary-foreground">
                Company
              </h6>
              <ul className="footer_menu">
                <li className=" my-6">
                  <Link
                    className="border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className=" my-6">
                  <Link
                    className="border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li className=" my-6">
                  <Link
                    className="border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_block f_address_block">
              <h6 className="font-bold text-base text-secondary-foreground">
                Connect
              </h6>
              <p className="text-sm text-secondary my-6">
                548 Market St. Suite 95149 <br />
                San Francisco, California
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end my-10">
          <div className="privacy-terms-group px-4 justify-start w-1/2">
            <Link
              className="mr-4 border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
              href="#privacy"
            >
              Privacy Notice
            </Link>
            <Link
              className="mx-4 border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
              href="#terms"
            >
              Terms of Service
            </Link>
          </div>
          <p className=" min-w-fit copyright_text text-sm text-secondary">
            &copy; 2024
            <Link
              href="/"
              className="mx-2 border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
            >
              Exploding Topics
            </Link>
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterSec;
