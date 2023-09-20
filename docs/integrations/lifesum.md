# Lifesum

Sync data between Lifesum and Sahha.

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import logo from './img/lifesum.png';

<img src={logo} style={{height: 256}} />


---

## iOS

Your iOS app users will need to perfom a one-time connection between Lifesum and Apple Health on their iOS device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Lifesum health data directly from Apple Health without any further effort from the user.

### Connecting to Apple Health

In order to connect Health with Lifesum, please go to either the Diary or the Progress tab, go to Settings by pressing the gear icon in the top right corner and then Automatic Tracking.

Press the button Activate on top of the page. You will then be directed to Health and there you can choose to directly activate the categories:

- Active Energy
- Steps
- Walking + Running Distance
- Workouts

Below you find:

- Weight (separate option below activation button)
- Health data (separate option below activation button)

In order to activate the water export from Lifesum to Health , please go to Settings and Water Settings and activate Export water intake to Health.

:::tip Setup Guide

[The official documentation](https://lifesum.helpshift.com/hc/en/3-lifesum/faq/41-how-can-i-connect-apple-health-and-lifesum/) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

Your Android app users will need to perfom a one-time connection between Lifesum and Health Connect on their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Lifesum health data directly from Health Connect without any further effort from the user.

### Connecting to Health Connect

In order set up Lifesum to Health Connect you must go in under Progress -> Profile -> Settings -> Automatic Tracking.

There you will see the Health Connect option on top.

After pressing "Set Up Health Connect" you will be sent to the screen below where you can choose what data you want synced from Lifesum to Health Connect.

*If you do not have Health Connect installed, by pressing the "Set Up" button you will be sent to Google Play Store and get the option to download the app.*

If you are already connected to Health Connect you will see the Automatic Tracking screen.

Here you have three options:

1. Pressing the SYNC button will trigger a manual sync where we import data from Health Connect to Lifesum.

2. Pressing SETTINGS will take you into the Health Connect app to manage your settings there.

3. Pressing DISCONNECT will remove the connection between Lifesum and Health Connect.

:::tip Setup Guide

[The official documentation](https://lifesum.helpshift.com/hc/en/3-lifesum/faq/655-how-do-i-use-lifesum-with-health-connect---android/) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::