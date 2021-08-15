const SEO = [
    {
        id: 0, 
        title: "Habilitar la indexación en tu sitio web", 
        descr: "Desactiva la opción «Disuadir a los motores de búqueda de indexar este sitio» en Wordpress y/o evitar tener la regla «Disallow: *» y mantener «User-agent: » limpio en tu archivo robots.txt (Si lo tienes)",
    },
    {
        id: 1, 
        title: "Crear un sitemap", 
        descr: "Tener un sitemap en el directorio raíz de tu web le permitirá a Google conocer todas las URLs de tu sitio",
        tip: "⭐️ En Wordpress puedes instalar plugins como Yoast SEO o RankMath, también puedes analizar tu web y descargar un sitemap manualmente en https://www.xml-sitemaps.com/",
    },
    {
        id: 2, 
        title: "Activar Search Console en tu página web", 
        descr: "Search Console te permite analizar errores de tu web, estado de cobertura, indexación y gráficas de datos",
    },
    {
        id: 3,
        title: "Enviar sitemap a través de Search Console", 
        descr: "Envía la URL del sitemap de tu web en el apartado Sitemaps de Search Console",
        tip: "⭐️ La terminación siempre será: www.tusitioweb.com/sitemap.xml a no ser que le hayas cambiado el nombre al archivo",
    },
    {
        id: 4, 
        title: "Usar enlaces de URLs cortas, limpias y secuenciales", 
        descr: "Organiza una buena estructura de URLs no demasiado larga, limpia los «?=...» de querys a APIs y manten una secuencia donde la terminación tenga una fuerte relevancia con la categoría expuesta (Si es que la tiene)",
        tip: "⭐️ Puedes configurar el enlace permanente de Wordpress por defecto como «%category%%postname%» o usar constantes junto con una variable y declararlo en el <head /> de tu código ",
    },
    {
        id: 5, 
        title: "Redactar la política de cookies y politica de privacidad", 
        descr: "Redactar las políticas de tu web hará de tu web un sitio mas fiable y puede ayudarte a que te acepten mucho antes en Adsense (Si es que ese es tu objetivo)",
    },
    {
        id: 6, 
        title: "Implementar un schema en tu página web (Si es posible)", 
        descr: "Si tu página web cumple con algún schema definido en schema.org puedes dar uso de los datos estructurados para que aparezcan en la búsqueda de Google",
        tip: "⭐️ En Wordpress puedes utilizar el plugin «Schema & Structured Data for WP & AMP» para indicar un schema en tu web y poder definir tu mismo los metadatos en tus entradas",
    },
    {
        id: 7, 
        title: "Comprobar que no tienes enlaces rotos (404, 503...)", 
        descr: "Los enlaces internos o externos con una respuesta 40x o 50x pueden dar una mala imágen y una mala respuesta de cobertura ante Google: borralas, reparalas o crea una redirección",
        tip: "⭐️ Utiliza la extensión de Chrome «Check my Links» para escanear automáticamente uno a uno cada enlace de tu sitio web",
    },
    
]


export default SEO;