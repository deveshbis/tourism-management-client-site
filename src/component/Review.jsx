import { Bounce, Slide } from 'react-awesome-reveal'
import clientImg1 from '../assets/client/client1.webp'
import clientImg2 from '../assets/client/client2.jpg'
import clientImg3 from '../assets/client/client3.jpg'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Review = () => {
    const [text] = useTypewriter({
        words: [' Say'],
        loop: {},

    })
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h2 className="text-center text-xl font-semibold mt-2">Our Testomonial</h2>
                <h1 className="text-center text-4xl font-bold mt-2" >What Client
                    <span>{text}</span>
                    <Cursor cursorColor='red' />

                </h1>
                <Bounce duration={3000}>
                    <p className="text-center mt-2 mb-3">Impeccable service and attention to detail! The tour exceeded all expectations, offering unique experiences and unforgettable memories. <br />Highly recommended for discerning travelers seeking exceptional adventures</p>
                </Bounce>

                <Slide duration={3000}><section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="p-8 border rounded-lg dark:border-gray-700">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “Unforgettable experience! Highly recommended for all travelers seeking adventure.An unforgettable adventure! Exceptional service and knowledgeable guides made our trip truly memorable”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={clientImg1} alt="" />

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border rounded-lg dark:border-gray-700">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “Exceptional service! Exceeded expectations in every way possible. Thank you! Absolutely stunning! The perfect blend of culture, relaxation, and adventure. Highly recommend for any traveler.”.
                        </p>
                        

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={clientImg2} alt="" />

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson</h1>
                                <span className="text-sm text-gray-500">CEO, Jeny Consultency</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border rounded-lg dark:border-gray-700">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “Amazing trip! Can not wait to book my next adventure with them. Incredible experience! Every detail was carefully planned, ensuring a seamless and enriching journey. Can nott wait to explore more destinations!”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={clientImg3} alt="" />

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                                <span className="text-sm text-gray-500">Marketing Manager at Stech</span>
                            </div>
                        </div>
                    </div>
                </section>
                </Slide>
            </div>
        </section>
    );
};

export default Review;

