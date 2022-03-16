import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
const Layout = ({ children, title = 'Bilet Crypto Tracker' }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Link href='/crypto' passHref>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </Link>
      </header>
      <main style={{ width: '70vw' }}>{children}</main>
    </div>
  );
};
export default Layout;
