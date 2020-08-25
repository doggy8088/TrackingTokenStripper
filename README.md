# TrackingTokenStripper

A [Tampermonkey](https://www.tampermonkey.net/) Userscript that remove most of the annoying tracking token from URL parameters.

## Features

- Strip most of the known tracking token from your URL **before** page been navigated.
- The following token will be removed:
  - Facebook
    - `fbclid`
  - Google Analytics
    - `utm_source`
    - `utm_medium`
    - `utm_term`
    - `utm_campaign`
    - `utm_content`
    - `utm_cid`
    - `utm_reader`
    - `utm_referrer`
    - `utm_name`
    - `utm_social`
    - `utm_social-type`
  - Google Ads
    - `gclid`
  - Instagram
    - `igshid`
  - HubSpot
    - `_hsenc`
    - `_hsmi`
  - MailChimp
    - `mc_cid`
    - `mc_eid`
  - Marketo
    - `mkt_tok`
  - Yandex
    - `yclid`
    - `_openstat`

## Usage

1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) Chrome extension.

2. Click [this link](https://github.com/doggy8088/TrackingTokenStripper/raw/master/TrackingTokenStripper.user.js) to install Userscript.

3. Hit **Install** button in the Tampermonkey extension page.

    ![Tampermonkey Userscript installation](https://user-images.githubusercontent.com/88981/91120197-acc9ad00-e6c7-11ea-8f4c-2fa3526a72b7.jpg)

## Links

- [Tampermonkey • Documentation](https://www.tampermonkey.net/documentation.php)
  - [@run-at](https://www.tampermonkey.net/documentation.php#_run_at)
- [About | TrackingTokenStripper | Userscripts | OpenUserJS](https://openuserjs.org/scripts/doggy8088/TrackingTokenStripper)
- [TrackingTokenStripper | Greasy Fork](https://greasyfork.org/en/scripts/409925-trackingtokenstripper)
