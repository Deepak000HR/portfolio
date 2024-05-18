This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
```https://www.youtube.com/feeds/videos.xml?channel_id=UC5KwzlrKbG92nmOOUgCJdTQ 
# todo icon change
https://github.com/Deepak000HR/portfolio.git
```
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
```
ok i also have  a NavMobile , as if i change the responsive view of screen window from mobile to desktop with opened mobile NavMobile , it remains open in desktopmode too any suggestion in code => import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
  scrollToSection: (id: string) => void;
  activeSection: string;
}

const NavMobile = ({ closeNav, showNav, scrollToSection,activeSection }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>
      <ul
        className={`text-white ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}
      >
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("home");
            }}
            // href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("about");
            }}
            // href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("services");
            }}
            // href="#"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("blog");
            }}
            // href="#"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("contact");
            }}
            // href="#"
          >
            Contact
          </a>
        </li>
        <XMarkIcon
          onClick={closeNav}
          tabIndex={0}
          className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white x-icon"
        />
      </ul>
    </div>
  );
};

export default NavMobile;

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
