module.exports = {

"[project]/.next-internal/server/app/backend/auth/login/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/util/types [external] (util/types, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util/types", () => require("util/types"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[project]/lib/paseto.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// lib/paseto.ts
__turbopack_context__.s({
    "generateToken": (()=>generateToken),
    "verifyToken": (()=>verifyToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$paseto$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/paseto/lib/index.js [app-route] (ecmascript)");
;
const privateKey = (()=>{
    const key = process.env.PASETO_PRIVATE_KEY;
    if (!key) throw new Error('PASETO_PRIVATE_KEY is missing from environment variables');
    console.log(key, key.length);
    const buffer = Buffer.from(key, 'base64');
    if (buffer.length !== 64) {
        console.error(`Private key length is ${buffer.length}, expected 64 bytes`);
        throw new Error('Invalid PASETO_PRIVATE_KEY length');
    }
    return buffer;
})();
const publicKey = (()=>{
    const key = process.env.PASETO_PUBLIC_KEY;
    if (!key) throw new Error('PASETO_PUBLIC_KEY is missing from environment variables');
    const buffer = Buffer.from(key, 'base64');
    if (buffer.length !== 32) {
        console.error(`Public key length is ${buffer.length}, expected 32 bytes`);
        throw new Error('Invalid PASETO_PUBLIC_KEY length');
    }
    return buffer;
})();
async function generateToken(payload) {
    try {
        const payloadObject = {
            ...payload
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$paseto$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["V4"].sign(payloadObject, privateKey, {
            expiresIn: '1h',
            audience: 'your-app',
            issuer: 'your-backend',
            subject: payload.username
        });
    } catch (error) {
        console.error('Failed to generate PASETO token:', error);
        throw new Error('Token generation failed');
    }
}
async function verifyToken(token) {
    try {
        const { payload } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$paseto$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["V4"].verify(token, publicKey, {
            audience: 'your-app',
            issuer: 'your-backend'
        });
        return payload;
    } catch (error) {
        console.warn('Failed to verify PASETO token:', error);
        return null;
    }
}
}}),
"[project]/app/backend/auth/login/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paseto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/paseto.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    const { username, password } = await req.json();
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (username !== adminUsername || password !== adminPassword) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Invalid credentials'
        }, {
            status: 401
        });
    }
    try {
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paseto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateToken"])({
            role: 'admin',
            username
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            token
        });
    } catch (error) {
        console.error('Failed to create token:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Token creation failed'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__00ff83dd._.js.map