# Dexcom

Sync data between Dexcom and Sahha.

<img src={require('@site/static/img/integrations/dexcom.png').default} style={{height: 256}} />

---

## iOS

Your iOS app users will need to perfom a one-time connection between Dexcom and Apple Health on their iOS device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Dexcom health data directly from Apple Health without any further effort from the user.

### Connecting to Apple Health

Follow these steps to enable the sharing of glucose data from the G6 app to the Health app on your iPhone, iPod touch or iPad:

1. Go to the menu in the G6 app
2. Choose Settings
3. Choose Health
4. Tap the Enable button to enable sharing CGM data with the Health app
5. Tap the slider for “Blood Glucose” on the health access screen
6. Press the “Done” button to return to the Dexcom G6 app.

*** Once connected, Apple Health will display glucose information with a three-hour delay. It will not display real-time glucose information. ***

:::tip Setup Guide

[The official documentation](https://www.dexcom.com/en-us/faqs/how-do-i-share-glucose-data-from-dexcom-g6-app-to-apple-health-app) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

Your Android app users will need to perfom a one-time connection between Dexcom and Health Connect on their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Dexcom health data directly from Health Connect without any further effort from the user.

### Connecting to Health Connect

To use Health Connect with the Dexcom G6 app, you must be on Dexcom G6 Android app version 1.11.0 or above. Confirm you’re running G6 Android app version 1.11.0 or above by opening your app, going to Settings > About > Software Revision. If you don’t see Health Connect as an option under Settings Menu, update your Dexcom G6 app in the Google Play Store first.

Follow these steps:

1. Open your Dexcom G6 app
2. Tap Settings
3. Tap Health Connect
4. Tap “Set Up Health Connect”
5. If needed, install Health Connect and complete set up
6. Return to your Dexcom G6 app
7. When asked, tap “Allow All” for Dexcom G6 App to write glucose data to Health Connect
8. Return to your Dexcom G6 app
9. Once set up, the Dexcom G6 app Health Connect screen will state, “Dexcom G6 is sharing your glucose data with Health Connect.”
10. Tap “Manage Data and Access” to view your Dexcom G6 data in Health Connect.

*** Once connected, Health Connect will display glucose data with a three-hour delay. Health Connect will not display real-time glucose information. ***

:::tip Setup Guide

[The official documentation](https://www.dexcom.com/en-us/faqs/can-i-share-glucose-data-with-google-health-connect) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::