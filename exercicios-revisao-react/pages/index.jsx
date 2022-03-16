import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rafael de Carvalho Souza</title>
        <meta
          name='description'
          content='Estudos e testes usando NextJS e outros.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo aos meus projetos usando{' '}
          <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Feito por Rafael{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <ul>
              <h1>/basicos/...</h1>
              <li>
                <Link href='/basicos/componeteComFilhos'>
                  <a>/componeteComFilhos</a>
                </Link>
              </li>
              <li>
                <Link href='/basicos/fragment1'>
                  <a>/fragment1</a>
                </Link>
              </li>
              <li>
                <Link href='/basicos//jsx1'>
                  <a>/jsx1</a>
                </Link>
              </li>
              <li>
                <Link href='/basicos//jsx2'>
                  <a>/jsx2</a>
                </Link>
              </li>
              <li>
                <Link href='/basicos//jsx3'>
                  <a>/jsx3</a>
                </Link>
              </li>
              <li>
                <Link href='/basicos//jsx4'>
                  <a>/jsx4</a>
                </Link>
              </li>
              <li>
                <Link href='/basicos//lista1'>
                  <a>/lista1</a>
                </Link>
              </li>
              <li>
                <Link href='/basicos//primeiro'>
                  <a>/primeiro</a>
                </Link>
              </li>
              <li>
                <Link href='/basicos/propsSomenteLeitura'>
                  <a>/propsSomenteLeitura</a>
                </Link>
              </li>
              <li>
                <Link href='/basicos/usandoTitulo'>
                  <a>/usandoTitulo</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h1>/css/...</h1>
              <li>
                <Link href='/css/integracao1'>
                  <a>/integracao1</a>
                </Link>
              </li>
              <li>
                <Link href='/css/integracao2'>
                  <a>/integracao2</a>
                </Link>
              </li>
              <li>
                <Link href='/css/usandoEstilo'>
                  <a>/usandoEstilo</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h1>/render/...</h1>
              <li>
                <Link href='/render/condicional1'>
                  <a>/condicional1</a>
                </Link>
              </li>
              <li>
                <Link href='/render/condicional2'>
                  <a>/condicional2</a>
                </Link>
              </li>
              <li>
                <Link href='/render/repeticao1'>
                  <a>/repeticao1</a>
                </Link>
              </li>
              <li>
                <Link href='/render/repeticao2'>
                  <a>/repeticao2</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h1>/tabuleiro/...</h1>
              <li>
                <Link href='/tabuleiro'>
                  <a>/index</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        {/* 
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  );
}
