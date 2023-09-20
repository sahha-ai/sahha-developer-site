# Myzone

Sync data between Myzone and Sahha.

<img src={require('@site/static/img/integrations/myzone.png').default} style={{height: 256}} />

---

## iOS

Your iOS app users will need to perfom a one-time connection between Myzone and Apple Health on their iOS device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Myzone health data directly from Apple Health without any further effort from the user.

### Connecting to Apple Health

Follow these steps:

1. Open your phone’s settings and select ‘Health.’
2. Select 'Data Access & Devices'
3. Select 'Myzone.'
4. Select ‘Turn all Categories On’ or toggle the categories you wish to share with Apple Health.

:::tip Setup Guide

[The official documentation](https://myzonesupport.zendesk.com/hc/en-us/articles/360026685732-Apple-Health-Integration) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

Your Android app users will need to perfom a one-time connection between Myzone and Google Fit on their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Myzone health data directly from Google Fit without any further effort from the user.

### Connecting to Google Fit

Follow these steps:

1. Open your Myzone App and access your Settings (cog) located in the upper left corner of your Myzone home screen.
2. Once inside Settings, scroll down under My Profile and select Google Fit. Switch on the toggle to enable.

### Troubleshooting

In addition to workout data, your body metrics (weight, height, body fat %, basal metabolic rate are also synced with Google Fit  when the app is brought into the foreground and when you initially enable Google Fit in your settings. Due to the way Google Fit works, please be aware that Myzone workout data often takes a little time to show up in the Google Fit app - anywhere from a few minutes upward to half an hour or more.

For any additional questions on the above information, feel free to contact Myzone Technical support here: https://myzonesupport.zendesk.com/hc/en-us

:::tip Setup Guide

[The official documentation](https://myzonesupport.zendesk.com/hc/en-us/articles/360035193611-Google-Fit-Integration) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::