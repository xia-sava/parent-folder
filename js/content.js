
let url = location.href;

if (location.search) {
    // クエリストリングをカットするモード
    url = url.replace(location.search, '');
} else {
    if (url.match(/^(\w+:\/\/)([^\/]+)(\/.*)?$/)) {
        const [protocol, domain, path] = [RegExp.$1, RegExp.$2, RegExp.$3];
        if (path === '/' || !path) {
            // サブドメインをカットするモード
            url = url.replace(new RegExp('^' + protocol + '\\w+\\.'), protocol);
        } else {
            // パスを繰り上げるモード
            url = url.replace(/\/$/, '');
            url = url.substr(0, url.lastIndexOf('/') + 1);
        }
    }
}

if (location.href !== url) {
    location.href = url;
}
