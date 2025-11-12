import { targets, makeSimpleProxyFetcher, makeSources, makeStandardFetcher } from "../src/index";

export const proxyBase = 'https://simple-proxy-pnor.onrender.com';
export const proxyBase2 = 'http://localhost:1234'
export const fetcher = makeStandardFetcher(fetch);
export const proxiedFetcher = makeSimpleProxyFetcher(proxyBase2, fetch);
export const sources = makeSources({
  fetcher,
  proxiedFetcher,
  target: targets.ANY,
});


export const availableSources = sources.listSources();