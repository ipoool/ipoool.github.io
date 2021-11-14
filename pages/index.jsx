import Head from "next/head";

import Hadeeth from "../components/hadeeth";

export default function Home() {
  return (
    <div className="select-none">
      <Head>
        <title>Hi! ಠ_ಠ</title>
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
                  <div className="relative">
                    <h1 className="text-6xl md:text-8xl font-bold text-gray-700">
                      I'm Ipul
                    </h1>
                    <span className="absolute text-xs md:text-sm text-gray-400 -top-3 md:-top-5 right-3 md:right-1/4 hover:text-gray-600">
                      (read: ˈɪpʌl)
                    </span>
                  </div>
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
                      <i className="fab fa-instagram text-2xl md:text-3xl text-gray-400 hover:text-purple-400 animate-bounce md:animate-none hover:animate-bounce"></i>
                    </a>
                  </div>
                  <div className="cursor-pointer">
                    <a
                      href="https://twitter.com/ipoool_"
                      title="Follow and you can ask anything with me"
                      target="_blank"
                    >
                      <i className="fab fa-twitter text-2xl md:text-3xl text-gray-400 hover:text-blue-400 animate-bounce md:animate-none hover:animate-bounce"></i>
                    </a>
                  </div>
                  <div className="cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/asep-saepulloh-86a5935a/"
                      target="_blank"
                      title="I'm a Professional :)"
                    >
                      <i className="fab fa-linkedin text-2xl md:text-3xl text-gray-400 hover:text-blue-800 animate-bounce md:animate-none hover:animate-bounce"></i>
                    </a>
                  </div>
                  <div className="cursor-pointer">
                    <a
                      href="https://medium.com/@ipoool"
                      target="_blank"
                      title="I will sharing anything what i know"
                    >
                      <i className="fab fa-medium text-2xl md:text-3xl text-gray-400 hover:text-black animate-bounce md:animate-none hover:animate-bounce"></i>
                    </a>
                  </div>
                  <div className="cursor-pointer">
                    <a
                      href="https://jofisa.tumblr.com"
                      target="_blank"
                      title="the real about me"
                    >
                      <i className="fab fa-tumblr text-2xl md:text-3xl text-gray-400 hover:text-blue-900 animate-bounce md:animate-none hover:animate-bounce"></i>
                    </a>
                  </div>
                  <div className="cursor-pointer">
                    <a
                      href="https://wa.me/6281291006534"
                      target="_blank"
                      title="contact me"
                    >
                      <i className="fab fa-whatsapp text-2xl md:text-3xl text-gray-400 hover:text-green-500 animate-bounce md:animate-none hover:animate-bounce"></i>
                    </a>
                  </div>
                </div>

                <div className="mt-2">
                  <Hadeeth delay={10000} />
                </div>
              </div>
              <div className="relative order-first md:order-last">
                <img
                  src="https://storage.googleapis.com/ipoool_site/its-mee.GIF"
                  alt="Hmmm... your connection not stable. that's why you can see this text"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
