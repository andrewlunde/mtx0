module.exports = (service) => {
  service.on('UPDATE', 'tenant', async (req, next) => {
    const res = await next();     // first call default implementation which is doing the HDI container creation
    // conciletime-dev-mtx-srv.cfapps.us10.hana.ondemand.com/admin
    //let url = 'mtx-${space}-dev.cfapps.us10.hana.ondemand.com/admin';
    let url = 'conciletime-dev-mtx-app.cfapps.us10.hana.ondemand.com/admin';
    console.log('[INFO ][ON_UPDATE_TENANT] ' + 'Application URL is ' + url);
    return url;
  } );
}
