/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    logger: {
      warn: function (message) {
          console.warn(message)
      },
      debug: function (message) {
          console.log(message)
      }
    }
  }
}

module.exports = nextConfig
