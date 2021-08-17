const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return 'homepage';
    },
  },
  {
    method: '*',
    path: '/',
    handler: (req, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (req, h) => {
      return 'about page';
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (req, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (req, h) => {
      return 'Halaman tidak ditemukan';
    },
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (req, h) => {
      const user = req.params.name || 'stranger';
      const { lang } = req.query;

      if (lang === 'id') {
        return `halo boss ${user}`;
      }
      return `Hello ${user}`;
    },
  },
];

module.exports = routes;
