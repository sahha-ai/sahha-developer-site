# Strava

Sync data between Strava and Sahha.

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import logo from './img/strava.png';

<img src={logo} style={{height: 256}} />

---

## iOS

Your iOS app users will need to perfom a one-time connection between Strava and Apple Health on their iOS device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Strava health data directly from Apple Health without any further effort from the user.

### Connecting to Apple Health

Follow these steps:

1. Inside the Strava mobile app, open your settings from the gear icon in the upper right-hand corner of the Home, Groups, or You tab.
2. Select Applications, Services, and Devices > Health > Select the plus sign icon.
3. Tap Connect on the next screen.
4. You'll be taken to the Health Access page, where you can enable the sharing of data from Strava to Health. You can control which types of information Strava will read and write to Health. You must enable Workouts for the sharing of any data (cycling, running, calories, etc.) to work.
After the initial setup, you can modify Strava's Health Access by going into the Health app and clicking on Sources > Strava. 

### Syncing Data to Apple Health

Inside the Strava mobile app, navigate to Settings (gear icon) > Applications, Services, and Devices > Health and toggle Send to Health ON.
Strava will send data to Health, such as route information, activity type, distance, time, and calories automatically. Please be aware that route information from third-party activities (Garmin, Zwift, etc.) will not sync to Health.

:::tip Setup Guide

[The official documentation](https://support.strava.com/hc/en-us/articles/216917527-Health-App-and-Strava#:~:text=Syncing%20from%20Health%20to%20Strava&text=sync%20to%20Strava.-,Navigate%20to%20Settings%20(gear%20icon)%20%3E%20Applications%2C%20Services%2C,to%20automatically%20sync%20to%20Strava.) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

Your Android app users will need to perfom a one-time connection between Strava and Google Fit on their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Strava health data directly from Google Fit without any further effort from the user.

### Connecting to Google Fit
Before getting started, you will want to ensure you have the Google Fit app installed on your mobile device and signed into the preferred Google account you would like to use for Google Fit.

On the Strava mobile app, tab Settings (gear icon) > Link Other Services > Google Fit.
Follow the prompts to connect your Google Fit account.
You can confirm if your Strava account is successfully connected to Google Fit by opening your Google Fit app, and going to Profile > Settings > Manage Connected Apps. You should see Strava listed under your connected apps.

Activity details will be sent to Google Fit only when the data is downloaded from the server. This happens when scrolling through the feed on the Strava app. If you want to get historical Strava activity data into Google Fit, you must scroll back to your 'Me' feed in the app. If you want Google Fit to have the calories from a given activity, you'll need to tap into the activity to view the activity details.


### Troubleshooting
It's important to note that Strava will send activity time, distance, and calories to Google Fit, however, these details will be sent to Google Fit only when the data is downloaded from the server.

If you are having difficulties with activities syncing from Strava to Google fit there are a few things you can try:

First, open your Strava app on your mobile device and go to the "You" Feed. Scroll through your recent activities to make sure they are loaded and displayed on your feed.
Then, open your Google Fit app on your mobile device and go to the Journal tab. On the Journal tab tap on the refresh button in the top right corner. It may take a few moments for the activities to appear on the Google Fit history.
If you find that your activity has not synced to Google Fit after using the steps above, it will be necessary to edit the activity on Strava in order to trigger the sync action. Once you save the activity again it should push over to Google Fit.

:::tip Setup Guide

[The official documentation](https://support.strava.com/hc/en-us/articles/216919267-Google-Fit-Integration) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::