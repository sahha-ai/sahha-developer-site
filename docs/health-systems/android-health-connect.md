---
sidebar_position: 1
slug: android-health-connect
---

# Android Health Connect

The Sahha SDK collects health data from Android Health Connect.

---

## Check Health Connect availability

Health Connect is exclusive to Android and Google Play. Users can access Health Connect in two ways:

- An open beta app on the Google Play store.
- As an Android system app on certain Pixel devices (pushed out as part of the QPR2 update).

### Future Versions

Health Connect will become part of Android 14 as an Android system app.

This version of Health Connect will retain 100% feature parity with its open beta predecessor. Prior to the launch of Android 14, detailed guidance will be made available to facilitate a smooth transition from the APK to a framework model.

[Read the official documentation](https://developer.android.com/health-and-fitness/guides/health-connect/platform-overview/availability)

---

## Health Connect on Google Fit

With Health Connect, you can manage your fitness and health app connections and data with a single app. Health Connect combines data from other fitness and health apps and displays the shared health app information on your Google Fit dashboards. This will allow Fit to manage other health and fitness apps like your smartwatch.

### Set up Health Connect

Follow these steps:

1. On your Android phone, download Health Connect from the Play Store.
2. Open Google Fit.
3. Tap Profile > Settings > Under "Health Connect" settings.
4. Turn on Sync Fit with Health Connect.

### Shared data

When you connect and grant access to Google Fit, Fit has permission to access or edit Health Connect data. Fit will still have a copy of this data that it has access and ownership over. Control and change who has access to your data on Health Connect and the data that’s shared with the app. [Learn more about How connected app sharing works with your Google Fit data](https://support.google.com/fit/answer/10066796#zippy=%2Chealth-connect-and-google-fit).

[Read the official documentation](https://support.google.com/fit/answer/12830119?hl=en)

---

## Data Types

The Sahha SDK collects the following data types via Health Connect:

- SleepSession
- Steps
- HeartRate
- RestingHeartRate
- HeartRateVariabilityRmssd
- BloodPressure
- BloodGlucose

More data types will be added in the future.

[Read the official documentation](https://developer.android.com/health-and-fitness/guides/health-connect/data-and-data-types/data-types)

---

## 30-day read restriction

Applications can read data from Health Connect for up to 30 days prior to when any permission was first granted.

However, if a user deletes your app, the permission history is lost. If the user reinstalls your app and grants permission again, your app can read data from Health Connect up to 30 days prior to that new date.

### Example

If a user first granted read permission to your application on March 30, 2023, the earliest data your app could read back would be from February 28, 2023 onwards.

The user then deletes your app on May 10, 2023. The user decides to reinstall it on May 15, 2023 and grant read permission. The earliest date your app can now read data from is April 15, 2023.

[Read the official documentation](https://developer.android.com/health-and-fitness/guides/health-connect/common-workflows/read-data#read-restriction)

---

## Foreground restriction

Reading data with Health Connect is restricted to applications running in the foreground. This restriction is in place to further strengthen user privacy. This assures users that Health Connect does not have background read access to their data, and that data is only read and accessed in the foreground.

For situations in which interruptions are tolerable, such as displaying a reading in your application, read directly from Health Connect to your client application.

For situations in which you prefer no interruptions, such as reading a range of data from Health Connect then writing and uploading it elsewhere, use a ForegroundService, rather than an Activity where it can be quickly dismissed.

[Read the official documentation](https://developer.android.com/health-and-fitness/guides/health-connect/common-workflows/read-data#foreground-restriction)