import { Cursor, useTypewriter } from 'react-simple-typewriter'
import gallery1 from '../assets/photoGallery/img1.avif'
import gallery2 from '../assets/photoGallery/img2.jpg'
import gallery3 from '../assets/photoGallery/img3.jpg'
import gallery4 from '../assets/photoGallery/img4.jpg'
import gallery5 from '../assets/photoGallery/img5.jpg'
import gallery6 from '../assets/photoGallery/img6.webp'
import gallery7 from '../assets/photoGallery/img7.jpg'
// import gallery8 from '../assets/photoGallery/img8.jpg'
import gallery9 from '../assets/photoGallery/img9.jpg'
import { Bounce,  Flip, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal'

const PhotoGallery = () => {
    const [text] = useTypewriter({
        words: [' Gallery'],
        loop: {},

    })
    return (
        <div className="md:px-10 lg:px-3  rounded-2xl mt-5">

            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-5">
                    <h1 className="text-4xl text-center font-extrabold">Our Photo
                        <span>{text}</span>
                        <Cursor cursorColor='blue' />
                    </h1>
                    <h3 className="text-xl text-center">Best of our Event portfolio Photos</h3>
                    <Flip duration={3000}><p className="text-center" >Discover the globes wonders through our World Tourism Photo Gallery. From serene beaches to towering mountains, <br /> embark on a visual journey spanning cultures and landscapes in 30 captivating images</p></Flip>
                </div>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">

                    <Zoom duration={3000}>
                        <img src={gallery1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" data-aos="fade-up" data-aos-duration="3000" />
                    </Zoom>

                    <Slide duration={3000}>
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery2} />
                    </Slide>
                    <Rotate duration={3000}>
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery3} />
                    </Rotate>
                    <Bounce duration={3000}>
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery4} />
                    </Bounce>
                    <Flip duration={3000}>
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery5} />
                    </Flip>

                    <Roll duration={3000}>
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery6} />
                    </Roll>
                    <Rotate duration={3000}>
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery7} />
                    </Rotate>

                    <Zoom duration={3000}>
                        <img src={gallery9} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                    </Zoom>
                </div>
            </section>
        </div>
    );
};

export default PhotoGallery;