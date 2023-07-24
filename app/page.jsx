import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Write & Read
            <br className="max-md:hidden"/>
            <span className="orange_gradient text_center"> Inspire and be inspired!</span>
        </h1>
        <p className='desc text-center'>
        Write down important notes, a simple thought, or just brighten someone's day with a kind message
    </p>
    <Feed/>
    </section>
  )
}

export default Home