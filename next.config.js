module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: ['']
  },
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true
      },
      {
        source: '/old-blog/:id',
        destination: '/new-blog/:id',
        permanent: true
      }
    ]
  }
}