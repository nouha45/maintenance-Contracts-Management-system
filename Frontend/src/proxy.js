const { createProxyMiddleware } = require('http-proxy-middleware');
    
    module.exports = function(app) {
    
        app.use(
        '/getDetails', //this is your api
        createProxyMiddleware({
          target:'http://localhost:8080/api/v1//equipementDetails', //this is your whole endpoint link
          changeOrigin: true,
        })
      );


    app.use(
        '/getproducts', //this is your api
        createProxyMiddleware({
          target:'http://10.0.0.20:9000/getproducts', //this is your whole endpoint link
          changeOrigin: true,
        })
      );
      
    };