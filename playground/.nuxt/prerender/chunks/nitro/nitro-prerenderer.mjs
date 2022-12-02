import 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/node-fetch-native/dist/polyfill.mjs';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, getQuery, getCookie, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/node_modules/hookable/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/scule/dist/index.mjs';
import { hash } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/ohash/dist/index.mjs';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash, isRelative } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/unstorage/dist/drivers/fs.mjs';
import defu from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/node_modules/radix3/dist/index.mjs';
import { extname, join } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/pathe/dist/index.mjs';
import { unified } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/unified/index.js';
import { toString } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/mdast-util-to-string/index.js';
import { preprocess } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/micromark/lib/preprocess.js';
import { postprocess } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/micromark/lib/postprocess.js';
import { stringifyPosition } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/micromark-util-character/index.js';
import { push, splice } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/micromark-util-chunked/index.js';
import { resolveAll } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/micromark-util-resolve-all/index.js';
import remarkEmoji from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/remark-emoji/index.js';
import rehypeSlug from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/rehype-slug/index.js';
import remarkSqueezeParagraphs from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/remark-squeeze-paragraphs/index.js';
import rehypeExternalLinks from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/rehype-external-links/index.js';
import remarkGfm from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/remark-gfm/index.js';
import rehypeSortAttributeValues from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/rehype-raw/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/remark-mdc/dist/index.mjs';
import remarkParse from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/remark-rehype/index.js';
import { all } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/mdast-util-to-hast/index.js';
import { detab } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/detab/index.js';
import { u } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/unist-builder/index.js';
import { encode } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/mdurl/index.js';
import slugify from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/slugify/slugify.js';
import { position } from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/unist-util-position/index.js';
import htmlTags from 'file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/html-tags/index.js';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"content":{"clientDB":{"isSPA":false,"integrity":1669997063159},"navigation":{"fields":[]},"base":"_content","tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":false,"wsUrl":"","documentDriven":false,"anchorLinks":{"depth":4,"exclude":[1]}}},"content":{"cacheVersion":2,"cacheIntegrity":"kc4UzpZUjI","transformers":[],"base":"_content","watch":{"ws":{"port":4000,"hostname":"localhost","showURL":false}},"sources":{},"ignores":["\\.","-"],"locales":[],"highlight":false,"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"anchorLinks":{"depth":4,"exclude":[1]},"remarkPlugins":{},"rehypePlugins":{}},"yaml":{},"csv":{"delimeter":",","json":true},"navigation":{"fields":[]},"documentDriven":false,"experimental":{"clientDB":false}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject$1(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject$1(obj[key])) {
      if (isObject$1(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const serverAssets = [{"baseName":"server","dir":"/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets);

storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/.nuxt/content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/playground/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    $not: (item, condition) => !match(item, condition),
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    $type: (item, condition) => typeof item === String(condition),
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    $lt: (item, condition) => {
      return item < condition;
    },
    $lte: (item, condition) => {
      return item <= condition;
    },
    $gt: (item, condition) => {
      return item > condition;
    },
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    (data, params) => params.surround ? surround(data, params.surround) : data,
    (data, params) => params.skip ? data.slice(params.skip) : data,
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    (data, params) => apply(withoutKeys(params.without))(data),
    (data, params) => apply(withKeys(params.only))(data)
  ];
  return async (query) => {
    const data = await getContentsList();
    const params = query.params();
    const filteredData = pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
    if (params.first) {
      return filteredData[0];
    }
    return filteredData;
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? handleListOfConstructs(constructs) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      code
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"));
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}
function normalizeLink(link2) {
  if (link2.endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(/\.md$/, ""), { forceLeadingSlash: false });
  } else {
    return link2;
  }
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file:///Users/lucassimines/FMCX/FMCX%20Modules/nuxt-float-label/playground/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)] || {};
    return cur.transform(next, transformOptions);
  }, Promise.resolve(parsed));
  return result;
}

const isPreview = (event) => {
  const previewToken = getQuery(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await serverQueryContent(event).find();
    contentIndex = data.reduce((acc, item) => {
      if (!acc[item._path]) {
        acc[item._path] = item._id;
      } else if (item._id.startsWith("content:")) {
        acc[item._path] = item._id;
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).map((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map(
  (p) => typeof p === "string" ? new RegExp(`^${p}|:${p}`) : p
);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || contentIgnores.some((prefix) => prefix.test(key))) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event, path) => (query) => {
  if (path) {
    if (query.params().first) {
      query.where({ _path: withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!query.params().sort?.length) {
    query.sort({ _file: 1, $numeric: true });
  }
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, path, ...pathParts) {
  if (typeof path === "string") {
    path = withLeadingSlash(joinURL(path, ...pathParts));
    return createQuery(createServerQueryFetch(event, path));
  }
  return createQuery(createServerQueryFetch(event), path || {});
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const memory = {};
const getContentQuery = (event) => {
  const qid = event.context.params.qid?.replace(/.json$/, "");
  const query = getQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseQueryParams(query._params);
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseQueryParams(query._params);
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = query.sort.split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _OlnIzS = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (query.first) {
    const content = await serverQueryContent(event, query).findOne();
    const path = content?._path || query.where?.find((w) => w._path)?._path;
    if (path) {
      const _dir = await serverQueryContent(event).where({ _path: join(path, "_dir") }).without("_").findOne();
      if (!Array.isArray(_dir)) {
        return {
          _path: path,
          ...content || {},
          _dir
        };
      }
    }
    if (!content) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  const contents = await serverQueryContent(event, query).find();
  return contents;
});

const _eu0WOd = defineEventHandler(async (event) => {
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch("/api/_content/navigation");
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _TDSpEZ = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    _partial: false,
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _lazy_wYNVnw = () => import('../renderer.mjs');

const handlers = [
  { route: '/api/_content/query/:qid', handler: _OlnIzS, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _OlnIzS, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.json', handler: _eu0WOd, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _TDSpEZ, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _TDSpEZ, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_wYNVnw, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}

export { useRuntimeConfig as a, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
