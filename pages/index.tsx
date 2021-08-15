import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SEOList.pro: Colección de mejores prácticas SEO para tu web</title>
        <meta name="description" content="SEOList.pro es una colección de mejores prácticas SEO en formato «check» para comprobar paso a paso si has implementado correctamente todos los aspectos SEO que debe tener una web en 2021" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="SEOList.pro es una colección de mejores prácticas SEO en formato «check» para comprobar paso a paso si has implementado correctamente todos los aspectos SEO de tu web" />
        <meta name="twitter:image" content="https://manu-scholz.com/wp-content/uploads/2021/08/seolist-og.jpg" />

        <meta name="og:title" content="SEOList.pro: Colección de mejores prácticas SEO para tu web" />
        <meta name="og:description" content="SEOList.pro es una colección de mejores prácticas SEO en formato «check» para comprobar paso a paso si has implementado correctamente todos los aspectos SEO de tu web" />
        <meta property="og:image" content="https://manu-scholz.com/wp-content/uploads/2021/08/seolist-og.jpg" />
        <meta name="og:image" content="https://manu-scholz.com/wp-content/uploads/2021/08/seolist-og.jpg" />
        <meta property="og:url" content="https://seolist.pro/" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="row mb-5 pb-5">
        <div className="col-12 col-lg-6 pb-5">
          <div id={styles.hero} className="pt-5 text-dark">
            <p id={styles.heroTitle} className="fw-bold m-0">
              SEOList.
              <br />
              pro
            </p>
            <p className="mt-4 text-center-sd fs-5 mb-3">
              Una colección de mejores prácticas SEO para tu web
            </p>
            <p className="mt-3 text-center-sd fs-5 mb-4">
            Cumple todos los checks y completa todos los retos para conseguir posicionar
            </p>
            <Link href="seo" passHref>
              <a>
                <button id={styles.CTA}>Empieza por completar el SEO →</button>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img className="w-100" src="/images/hero-temp.jpg" />
        </div>
      </div>
      <div className="row justify-content-around my-5 py-5">
        <div className="col-4 col-md-2 d-flex flex-column align-items-center">
          <img src="images/seo.svg" className="w-50 mb-3 opacity-75" />
          <p className="fw-bold">SEO</p>
          <p className="text-center">
            Comprueba todos los aspectos SEO de tu web
          </p>
        </div>
        <div className="col-4 col-md-2 d-flex flex-column align-items-center">
          <img src="images/contenido.svg" className="w-50 mb-3 opacity-75" />
          <p className="fw-bold">Contenido</p>
          <p className="text-center">
            Consigue posicionar tus artículos siguiendo las mejores pautas
          </p>
        </div>
        <div className="col-4 col-md-2 d-flex flex-column align-items-center">
          <img src="images/link.svg" className="w-50 mb-3 opacity-75" />
          <p className="fw-bold">Enlaces</p>
          <p className="text-center">
            Completa cada uno de los checks para obtener backlinks fácilmente
          </p>
        </div>
        <div className="col-4 col-md-2 d-flex flex-column align-items-center">
          <img src="images/google.svg" className="w-50 mb-3 opacity-75" />
          <p className="fw-bold">Adsense</p>
          <p className="text-center">
            Incrementa el RPM por anuncio en Adsense al completar los checks
          </p>
        </div>
        <div className="col-4 col-md-2 d-flex flex-column align-items-center">
          <img src="images/ecommerce.svg" className="w-50 mb-3 opacity-75" />
          <p className="fw-bold">Ecommerce</p>
          <p className="text-center">
            Todos las pautas SEO que hay que tener en cuenta para un ecommerce
          </p>
        </div>
        <div className="col-4 col-md-2 d-flex flex-column align-items-center">
          <img src="images/metrics.svg" className="w-50 mb-3 opacity-75" />
          <p className="fw-bold">Métricas</p>
          <p className="text-center">
            Checks para mejorar las métricas de Pagespeed Insights
          </p>
        </div>
      </div>
      <div className="bg-dark p-5 border rounded shadow border-bottom-0">
        <p className="w-75 mx-auto fw-bold text-white text-center fs-1">
          ¿Tienes algún artículo o herramienta que quieras promocionar en SEOList.pro?
        </p>


        <div id={styles.AboutMe}>
          <div>
            <img src="/images/avatar.jpg" />
          </div>
          <div>
            <span>
              Hola, soy Manuel Scholz, fundador de SEOList.pro, puedes
              puedes ponerte en contacto conmigo en{" "}
              <a
                href="https://twitter.com/ImScholz"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#34d399", textDecoration: "underline" }}
              >
                mi Twitter
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
