$ = jQuery;
$(document).ready(function() {
    console.log('fires');
    addCSS();

});

function getAppDir(){
  console.log('AppDir');
    var scripts = document.getElementsByTagName('script');
    var currentScript = Array.prototype.filter.call(scripts, function(script) {
        return script.src.indexOf('ibl-ai-mentor-web') !== -1;
    })[0];
    return currentScript.src.substring(0, currentScript.src.lastIndexOf('/')+1);
}

function addCSS(){
  console.log('add CSS');
    var appDir = getAppDir();
    console.log(appDir);
    console.log('above');
    const cssFile = appDir+'/css/test.css';
    console.log(cssFile);
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', cssFile);
    document.head.appendChild(linkElement);
}
