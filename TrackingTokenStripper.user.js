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
        .remove('_openstat')
        .remove('gclid')
        .remove('igshid')
        .remove('_hsenc')
        .remove('_hsmi')
        .remove('mc_cid')
        .remove('mc_eid')
        .remove('mkt_tok')
        .remove('utm_source')
        .remove('utm_medium')
        .remove('utm_term')
        .remove('utm_name')
        .remove('utm_social')
        .remove('utm_social-type')
        .remove('yclid')
        .remove('wt.mc_id')
        .remove('__tn__')
        .remove('gclsrc')
        .remove('itm_source')
        .remove('itm_medium')
        .remove('itm_campaign')
        .remove('mc') // sendgrid.com
        .remove('mcd') // sendgrid.com
        .remove('cvosrc') // sendgrid.com
        .remove('cr_cc') // https://blogs.microsoft.com/
        .remove('sc_channel')
        .remove('sc_campaign')
        .remove('sc_geo')
        .remove('trk')
        .remove('sc_publisher')
        .remove('trkCampaign')
        .remove('sc_outcome')
        .remove('sc_country')
        .remove('__hstc')
        .remove('__hssc')
        .remove('__hsfp')
        .remove('_gl')
        .remove('__s')
        .remove('dclid')
        .remove('hsCtaTracking')
        .remove('ml_subscriber')
        .remove('ml_subscriber_hash')
        .remove('msclkid')
        .remove('oly_anon_id')
        .remove('oly_enc_id')
        .remove('rb_clickid')
        .remove('s_cid')
        .remove('vero_conv')
        .remove('vero_id')
        .remove('fb_source')
	.toString()
    if (s && location.href != s) {
        location.href = s;
    }

    function TrackingTokenStripper(url) {
        return {
            remove(name) {
                var [path, other] = url.split('?');
                var [query, hash] = other ? other.split('#') : [query, ''];
                if (query) {
                    let new_query = [];
                    for (let param of query.split('&')) {
                        let [key, val] = param.split('=');
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
