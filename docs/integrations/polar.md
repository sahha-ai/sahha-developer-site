# Polar

Sync data between Polar and Sahha.

![An image from the static](/img/integrations/polar.svg)

---

## iOS

Your iOS app users will need to perfom a one-time connection between Polar and Apple Health on their iOS device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Polar health data directly from Apple Health without any further effort from the user.

Polar offers both Polar Flow and Polar Beat to Apple users.

---

### What data is synced from Polar Flow to Apple Health?
- **Active Energy:** calories burned during workouts.
- **Heart Rate:** heart rate during workouts. Note! Continuous heart rate is not synced.
- **Resting Energy:** calories burned when not working out, e.g. BMR calories.
- **Sleep Analysis:** sleep duration, time of falling asleep, time of waking up.
- **Steps:** step amount measured by your Polar device.
- **Weight:** weight value saved in Polar Flow app settings, time and date of the edit.
- **Workouts:** workout type (e.g. Running), duration, distance, start time, end time, workout samples (Total Active Energy & Average Heart Rate).

### Connecting Polar Flow to Apple Health

Follow these steps to connect Polar Flow to Apple Health:

1. Open Polar Flow app, tap More bottom right and go to General settings.
2. Tap the Apple Health toggle to enable the connection.
3. Select which categories to sync to Health app or tap Turn All Categories On.
4. Tap Allow from top right to finish the connection.

*** After this, all new data in Polar Flow app will be synced to Apple Health. ***

:::tip Setup Guide

[The official documentation](https://support.polar.com/en/support/connecting_polar_flow_with_apple_health) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

### What data is synced from Polar Beat to Apple Health?

- Sport ID (in session field and as activity segment)
- Training session statistics
- Calories total
- Distance total
- Training session heart rate samples

*** Only heart rate and training data is synched from Beat to Apple Health. Activity data is not included since Beat does not generate any activity data. ***

### Connecting Polar Beat to Apple Health

Follow these steps to connect Polar Beat to Apple Health:

1. Install or update the Polar Beat app from the Apple’s App Store and start the app.
2. Go to Settings and tap Apple Health.
3. Tap Connect to establish the connection.
4. Allow Polar Beat access to write data within the Health app. Toggle all buttons on and tap Allow.

:::tip Setup Guide

[The official documentation](https://support.polar.com/en/support/connecting_polar_beat_with_apple_health) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

Your Android app users will need to perfom a one-time connection between Polar and Google Fit their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Polar health data directly from Google Fit without any further effort from the user.

### Connecting Polar Beat to Google Fit

Follow these steps:

1. Install or update the Polar Beat app from the Google Play Store
2. Sign in to Polar Beat with your Polar account or create one
3. Open the menu in the top left corner, go to Settings and toggle Google Fit on
4. Give Polar Beat permission to transfer data to Google Fit

*** From now on your training data will also sync with Google Fit. Note that previous data will not be synced. ***

:::tip Setup Guide

[The official documentation](https://support.polar.com/en/support/connecting_polar_beat_to_google_fit) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::