import { defineNuxtPlugin } from 'nuxt/app';
import { rest, setupWorker } from 'msw';
import { handlers } from '../mocks/handlers';

export default defineNuxtPlugin((nuxtApp) => {
  // const worker = setupWorker(...handlers);
  // worker.start();
  // console.log( worker.printHandlers());
});
