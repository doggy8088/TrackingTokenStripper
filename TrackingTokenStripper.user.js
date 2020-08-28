// ==UserScript==
// @name         TrackingTokenStripper
// @version      1.0
// @description  Remove most of the annoying tracking token from URL parameters
// @license      MIT
// @homepage     https://blog.miniasp.com/
// @homepageURL  https://blog.miniasp.com/
// @website      https://www.facebook.com/will.fans
// @source       https://github.com/doggy8088/TrackingTokenStripper
// @namespace    https://github.com/doggy8088/TrackingTokenStripper
// @author       Will Huang
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

(function() {

    var s = TrackingTokenStripper(location.href)
        .remove('fbclid')
        .remove('utm_source')
        .remove('utm_medium')
        .remove('utm_term')
        .remove('utm_campaign')
        .remove('utm_content')
        .remove('utm_cid')
        .remove('utm_reader')
        .remove('utm_referrer')
        .remove('utm_name')
        .remove('utm_social')
        .remove('utm_social-type')
        .remove('gclid')
        .remove('igshid')
        .remove('_hsenc')
        .remove('_hsmi')
        .remove('mc_cid')
        .remove('mc_eid')
        .remove('mkt_tok')
        .remove('yclid')
        .remove('_openstat')
        .toString();

    if (s && location.href !== s) {
        location.href = s;
    }

    function TrackingTokenStripper(url) {
        return {
            remove(name) {
                var [path, ...other] = url.split('?');
                other = other.join('?');

                var [query, ...hash] = other ? other.split('#') : [query, ''];
                hash = hash.join('#');

                if (query) {
                    let new_query = [];
                    for (let param of query.split('&')) {
                        let [key, val] = param.split('=', 2);
                        if (key !== name) {
                            new_query.push(param);
                        }
                    }
                    query = new_query.join('&');
                }

                query = query ? query = '?' + query : '';
                hash = hash ? hash = '#' + hash : '';

                return TrackingTokenStripper(path + query + hash);
            },
            toString() {
                return url;
            }
        }
    }
})();
