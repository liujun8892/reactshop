let prodUrl="http://vueshop.glbuys.com";
let devUrl="/proxy";
let baseUrl=process.env.NODE_ENV==='development'?devUrl:prodUrl;
export default {
    baseUrl:baseUrl,
    path:"/",
    token:"1ec949a15fb709370f"
}