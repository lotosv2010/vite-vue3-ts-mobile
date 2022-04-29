import { ServerOptions } from 'vite';
import { VITE_APP_PORT, VITE_APP_OPEN, VITE_APP_HOST } from '../index';

const createServer = (): ServerOptions => ({
  host: true,
  port: VITE_APP_PORT,
  open: VITE_APP_OPEN,
  proxy: {
    '/api': {
      target: VITE_APP_HOST,
      changeOrigin: true,
      rewrite: (path: any) => path.replace(/^\/api/, ''),
    },
  },
});

export default createServer;
