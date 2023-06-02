import { XataClient } from '../../src/xata'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Product } from '../../components/Product'
import ProductSample from '../../components/ProductSample'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const HomePage = ({products}) => {
  return (
    <>
      <header className='header'>
        <div className='header-left-side'>
          <div className='header-content'>
            <h1>Shop Online Habesha</h1>
            <p>Home of elegant, stylish and affordable habeshan outfits.</p>
            <Link href='/products'>
                <button className='btn' type='button'>Shop Now</button>
            </Link>
          </div>
        </div>

        <div className='header-right-side'>
          <div className='header-circle'>
            <Image 
              className='header-img' 
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1685360563/habeshan-clothes/IMG_1586-min-1229x1536_fu1izi.jpg`}
              width={400} 
              height={350} 
              alt='header image' 
              />
            <Image 
              className='header-img' 
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1685360563/habeshan-clothes/IMG_1309-min-1138x1536_ldzrnz.jpg`}
              width={400} 
              height={350} 
              alt='header image' 
            />
                  
          </div>
        </div>
      </header>
      <div className='products-outer-container'>
        <div className='subtitle'>
          <span>PRODUCTS</span>
          <h2>Check What We Have</h2>
        </div>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 100
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            1260: {
              slidesPerView: 3,
              spaceBetween: 0
            }
          }}
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
        >
          <div className='products-container'>
            {products?.map(product => (
              <SwiperSlide>
                <Product 
                  id={product.id}
                  url={product.image_url}
                  name={product.name}
                  price={product.price}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <ProductSample />
    </>
  )
}
const xata = new XataClient()
export const getServerSideProps = async () => {
    const response = await xata.db.product.select(["*", "category.*"]).getAll()
    return {
    props: {
    products: response
    }
    }
}

export default HomePage