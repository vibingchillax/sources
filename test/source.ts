import { targets, makeSimpleProxyFetcher, makeSources, makeStandardFetcher } from "../src/index";

const proxyBase = 'https://simple-proxy-pnor.onrender.com';
const proxyBase2 = 'http://localhost:1234'
const fetcher = makeStandardFetcher(fetch);
const proxiedFetcher = makeSimpleProxyFetcher(proxyBase2, fetch);
export const sources = makeSources({
  fetcher,
  proxiedFetcher,
  target: targets.ANY,
});


export const availableSources = sources.listSources();