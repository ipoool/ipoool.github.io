import Head from "next/head";
import { HeartIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="select-none">
      <Head>
        <title>IPOOOL</title>
        <meta name="title" content="ipoool personal website" />
        <meta name="description" content="welcome to my personal website" />
      </Head>
      <main className="h-full">
        <section className="h-full p-6">
          <div className="container-1 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:flex-1 order-last md:order-first">
                <div className="space-y-2 md:space-y-4">
                  <p className="text-base md:text-2xl">Hi, thereee!</p>
                  <h1 className="text-5xl md:text-8xl font-bold text-gray-700">
                    I'm Ipul
                  </h1>
                  <p className="text-base md:text-2xl text-gray-500">
                    Senior Software Engineer @{" "}
                    <span className="text-green-700 font-bold">Grab</span>
                  </p>
                </div>
                <div className="py-2 md:py-4 rounded-xl mt-6 flex flex-row space-x-6">
                  <div className="cursor-pointer">
                    <a
                      href="https://www.instagram.com/ipoool_/"
                      target="_blank"
                      title="Folow and see random posts from me"
                    >
                      <i className="fab fa-instagram text-2xl md:text-4xl text-gray-300 hover:text-purple-400 animate-bounce md:animate-none hover:animate-bounce"></i>
                    </a>
                  </div>
                  <div className="cursor-pointer">
                    <a
                      href="https://twitter.com/ipoool_"
                      title="Follow and you can ask anything with me"
                      target="_blank"
                    >
                      <i className="fab fa-twitter text-2xl md:text-4xl text-gray-300 hover:text-blue-400 animate-bounce md:animate-none hover:animate-bounce"></i>
                    </a>
                  </div>
                  <div className="cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/asep-saepulloh-86a5935a/"
                      target="_blank"
                      title="I'm a Professional :)"
                    >
                      <i className="fab fa-linkedin text-2xl md:text-4xl text-gray-300 hover:text-blue-800 animate-bounce md:animate-none hover:animate-bounce"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative order-first md:order-last">
                <img
                  src="https://storage.googleapis.com/ipoool_site/its-mee.GIF"
                  alt="Ssstt... the real one better than it"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-6">
        <div className="flex flex-row items-center justify-center space-x-2">
          <div className="text-gray-400 text-base md:text-lg font-bold">
            made with
          </div>
          <div>
            <HeartIcon width={25} height={25} className="text-red-300" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mt-2">
          <div className="text-gray-400 text-base md:text-lg font-bold">
            Powered by NextJS &amp; Tailwindcss
          </div>
        </div>
      </footer>
    </div>
  );
}
