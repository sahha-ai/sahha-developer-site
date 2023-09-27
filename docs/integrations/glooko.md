# Glooko

Sync data between Glooko and Sahha.

<img src={require('@site/static/img/integrations/glooko.png').default} style={{height: 256}} />

---

## iOS

Your iOS app users will need to perfom a one-time connection between Glooko and Apple Health on their iOS device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Glooko health data directly from Apple Health without any further effort from the user.

### Connecting to Apple Health

Follow these steps:

1. Tap the Silhouette (menu) icon in the top right 
2. Tap Devices
3. Tap Apple Health Settings.
4. Tap the Open Apple Health button.
5. When the Apple Health app opens:
 - Tap Turn All Categories On or tap to toggle on syncing for only the data types you would like to sync.
 - NOTE: Glooko does not currently sync carbohydrates data from Apple Health.
6. Tap Allow at the top-right of the screen to allow Glooko to access your data.

You will be routed back to the Apple Health Settings screen. In the Shared Data Types section, the data types will display a status of "Enabled" or "Disabled" based on your selections in the Apple Health app.

*** It may take 10-30 minutes before your data initially appears in your account, then your data will begin syncing automatically. ***

:::tip Setup Guide

[The official documentation](https://support.glooko.com/hc/en-us/articles/360006074037-How-do-I-sync-my-glucose-insulin-and-nutrition-data-with-Apple-Health-) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

:::caution NOT AVAILABLE

Unfortunately, Glooko does not provide an official method for syncing health data with Android Health Connect.

:::