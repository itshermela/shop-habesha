import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const HomePage = () => {
  return (
  <>
    <Head>
    <title>Habeshan Clothes Shop | Home</title>
    </Head>
    <div className={styles.container}>
    <div className={styles.sectionone}>
      <h4 className={styles.title}>
      Home of elegant, stylish and affordable habeshan outfits
      </h4>
      <Link href="/shop">
      <button className={styles.button}>
        Shop Now
      </button>
      </Link>
    </div>
    <div className={styles.sectiontwo}>
      <Image
      className={styles.image}
      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1685360563/habeshan-clothes/Ethiopian-Traditional-Dress-1-6_a9w0tt.jpg`}
      alt="couch"
      layout='fill'
      />
    </div>
    </div>
  </>
  )
}
export default HomePage