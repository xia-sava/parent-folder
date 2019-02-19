if (location.search){
  // Cut query string
  location.search = '';
} else if (location.pathname == '/'){
  var domains = location.hostname.split('.');

  if (domains.length > 1){
    // Cut subdomain
    domains.shift();
    location.hostname = domains.join('.');
  }
} else {
  // Cut path
  var comps = location.pathname.split('/');
  if (comps.pop() === '') {
    comps.pop();
  }
  location.pathname = comps.join('/') + '/';
}
