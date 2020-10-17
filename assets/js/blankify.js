Array.from(document.getElementsByTagName("a")).filter(r => !r.href.match(/^\/\//) && (r.hostname != location.hostname)).forEach(r => r.setAttribute("target", "_blank"));
