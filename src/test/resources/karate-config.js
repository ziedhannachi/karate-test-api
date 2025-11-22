function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);

  var config = {
    env: env,
    pstBaseUrl : "https://pst-v2-prep.prj.onecaas.vpodg1np.carrefour.com",

    ldap: {
        url: "https://preprod.np.apimx.carrefour.com/retail/v3/access_management/authenticate",
        clientId: "zCol80AhsBVu2UtbrMYJmrGXg549Ks002tATRzKLdDo8xdfQ",
        clientSecret: "pycWqlBSzGxGjARnrGCvi1pUxo6iHGHT5YgDqIYOYZX4IHFtfJOdlCKIDST2eHeF",
        user: "fr_bff_ucare",
        password: "Carrefour123$"
    },

    apimx: {
        url: "https://preprod.np.apimx.carrefour.com"
    },
    pst: {
      baseUrl: "https://pst-v2-prep.prj.onecaas.vpodg1np.carrefour.com"
    }
  }

  karate.configure('ssl', true);
//  karate.configure('proxy', { uri: 'http://webfile.carrefour.com:8080', username: 'openid_eol', password: 'MhK1X7password' });


  return config;
}