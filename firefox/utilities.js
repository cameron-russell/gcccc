const cpBrowser = (function() {
    const browser = () => {
        if(window.chrome){
            browserName = "chrome"
            return window.chrome
        }
        if(window.browse){
            browserName = "firefox"
            return window.browser
        }
    }
    let browserName;
    
    // function privateMethod () {
    //   // ...
    // }
  
    return { // public interface
        getBrowser: () => browser()
    //   publicMethod1: function () {
    //     // All private members are accessible here
    //   },
    //   publicMethod2: function () {
    //   }
    };
  })();

exportVars({ cpBrowser }).from("cpBrowser");
