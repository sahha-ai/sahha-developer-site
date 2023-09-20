# Withings

Sync data between Withings and Sahha.

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import logo from './img/withings.png';

<img src={logo} style={{height: 256}} />

---

## iOS

Your iOS app users will need to perfom a one-time connection between Withings and Apple Health on their iOS device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Withings health data directly from Apple Health without any further effort from the user.

### Connecting to Apple Health

To share your data with Apple Health, perform the following steps:

1. Open the Withings App.
2. Tap Profile.
3. Scroll down to Health and tap Activate.
4. Select the data you want to share with Apple Health.
5. Tap Done.

### Troubleshooting

If you notice that Withings App and Apple Health are not synced anymore, please go to Apple Health > Sources > Withings App and enable the data transfer if needed.
Steps that have been manually entered in Apple Health will not be imported to Withings App.

:::tip Setup Guide

[The official documentation](https://support.withings.com/hc/en-us/articles/203728916-Partner-Apps-Linking-my-Withings-account-to-Apple-Health) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

Your Android app users will need to perfom a one-time connection between Withings and Health Connect on their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Withings health data directly from Health Connect without any further effort from the user.


### Regarding Android Health Connect (Beta) app

While this beta app is currently available within the Withings App, we currently will not be offering troubleshooting for any issues on our Help Center.

If you have issues with Health Connect and the Withings app, please reach out to Withings Customer Service.

### Connecting to Health Connect

To link the Withings app to Health Connect, perform the following steps: 

1. Open the Withings app
2. Go to your Profile.
3. Scroll down to the 'Apps' section.
4. Tap Health Connect. 
5. Tap Activate and then Next. The next screen will allow you to select the data you want to share with Health Connect.
6. Tap Turn All Categories On to allow Withings to import and export all health data to Health Connect, or choose specific activity-related data to share including Steps and Distance.

:::tip Setup Guide

[The official documentation](https://support.withings.com/hc/en-us/articles/204367697) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::