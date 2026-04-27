import handler from './dist/server/index.js';
const fn = handler.default || handler.fetch || handler;
const req = new Request('http://localhost/', { method: 'GET' });
const res = await (typeof fn === 'function' ? fn(req, {}, {}) : fn.fetch(req, {}, {}));
const html = await res.text();
process.stdout.write(html);
