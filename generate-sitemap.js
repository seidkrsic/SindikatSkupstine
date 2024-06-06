const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const sitemap = new SitemapStream({ hostname: 'https://sindikat.skupstina.me' });

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/search', changefreq: 'daily', priority: 0.8 },
  { url: '/aktuelnosti', changefreq: 'daily', priority: 0.8 },
  { url: '/aktuelnosti/predsjednik', changefreq: 'daily', priority: 0.8 },
  { url: '/aktuelnosti/generalni_sekretar', changefreq: 'daily', priority: 0.8 },
  { url: '/aktuelnosti/:id', changefreq: 'daily', priority: 0.8 },
  { url: '/zakoni/akti_sindikata', changefreq: 'monthly', priority: 0.7 },
  { url: '/zakoni/opsti_akti', changefreq: 'monthly', priority: 0.7 },
  { url: '/zakoni/formulari', changefreq: 'monthly', priority: 0.7 },
  { url: '/saziv/izvrsniodbor', changefreq: 'monthly', priority: 0.7 },
  { url: '/saziv/nadzorniodbor', changefreq: 'monthly', priority: 0.7 },
  { url: '/saziv/komisija', changefreq: 'monthly', priority: 0.7 },
  { url: '/saziv/predsjednici', changefreq: 'monthly', priority: 0.7 },
  { url: '/login', changefreq: 'monthly', priority: 0.6 },
  { url: '/documents', changefreq: 'monthly', priority: 0.6 },
  { url: '/racunovodstvo_odluke', changefreq: 'monthly', priority: 0.6 },
  { url: '/pogodnosti', changefreq: 'monthly', priority: 0.7 },
  { url: '/skupstina', changefreq: 'monthly', priority: 0.7 },
  { url: '/kontakt', changefreq: 'monthly', priority: 0.7 },
  { url: '/sjednice/skupstina', changefreq: 'monthly', priority: 0.7 },
  { url: '/sjednice/izvrsni_odbor', changefreq: 'monthly', priority: 0.7 },
  { url: '/sjednice/skupstina/:id', changefreq: 'monthly', priority: 0.7 },
  { url: '/sjednice/izvrsni_odbor/:id', changefreq: 'monthly', priority: 0.7 },
  { url: '/saziv/:id', changefreq: 'monthly', priority: 0.7 },
  { url: '/saziv/predsjednik', changefreq: 'monthly', priority: 0.7 },
  { url: '/saziv/generalni_sekretar', changefreq: 'monthly', priority: 0.7 },
  { url: '/saziv/zamjenik', changefreq: 'monthly', priority: 0.7 }
  // Dodajte sve vaše rute ovde
];

routes.forEach(route => sitemap.write(route));
sitemap.end();

streamToPromise(sitemap)
  .then(data => createWriteStream(resolve(__dirname, 'public/sitemap.xml')).write(data.toString()))
  .then(() => console.log('Sitemap generated!'))
  .catch(err => console.error(err));
