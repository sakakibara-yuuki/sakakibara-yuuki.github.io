// import adapter from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
//           adapter: adapter({
//               // default options are shown. On some platforms
//               // these options are set automatically — see below
//               pages: 'build',
//               assets: 'build',
//               fallback: undefined,
//               precompress: false,
//               strict: true
//           })
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-static';
 
const dev = process.argv.includes('dev');
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    }
  }
};

export default config;
