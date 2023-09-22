# MyFitnessPal

Sync data between MyFitnessPal and Sahha.

<img src={require('@site/static/img/integrations/myfitnesspal.png').default} style={{height: 256}} />

---

## iOS

Your iOS app users will need to perfom a one-time connection between MyFitnessPal and Apple Health on their iOS device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced MyFitnessPal health data directly from Apple Health without any further effort from the user.

### Connecting to Apple Health

Follow these steps:

1. Launch the MyFitnessPal app for iPhone
2. Tap More••• (lower right corner of the home screen) > Settings > Sharing & Privacy > HealthKit Sharing
3. You will then be presented with options for linking to Health, and for selecting the types of data you permit MyFitnessPal and Apple Health to share. We would suggest turning all categories on, and then tapping Allow.

*** This data-type selection screen inside the MyFitnessPal app will appear only the very first time that you authorize HealthKit Sharing in our app. ***

:::tip Setup Guide

[The official documentation](https://support.myfitnesspal.com/hc/en-us/articles/360032271092-Apple-Health-FAQ-and-Troubleshooting) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

Your Android app users will need to perfom a one-time connection between MyFitnessPal and Health Connect on their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced MyFitnessPal health data directly from Health Connect without any further effort from the user.

### Connecting to Health Connect

Follow these steps:

1. Open MyFitnessPal app
2. Find Apps & Devices under the Menu
3. Search for Health Connect and then tap Connect.
4. You should see a pop up for permissions regarding the Health Connect integration.
5. Turn the integration On and then allow all permissions (needed for sync to work properly)
6. Please note you will need to scroll down on this pop up to see all of the permissions.
7. Finally, Tap Done to finish the set up.

:::tip Setup Guide

[The official documentation](https://support.myfitnesspal.com/hc/en-us/articles/10553948248973-Health-Connect-FAQ-and-Troubleshooting) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::