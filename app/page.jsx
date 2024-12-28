

import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and share
        <br  className="max-md:hidden"/>
        <span className="orange_gradient text-center ">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        <span className="">Explore a vast library of AI-powered prompts, carefully curated to
          <br  className="max-md:hidden"/>
          inspire creativity and spark new ideas.</span>
          

      </p>
      <Feed/>
    </section>
  )
}

export default Home
