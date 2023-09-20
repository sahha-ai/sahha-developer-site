# Peloton

Sync data between Peloton and Sahha.

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import logo from './img/peloton.png';

<img src={logo} style={{height: 256}} />

---

## iOS

Your iOS app users will need to perfom a one-time connection between Peloton and Apple Health on their iOS device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Peloton health data directly from Apple Health without any further effort from the user.

### Connecting to Apple Health

Follow these steps:

1. Update the Peloton App to the latest version
2. Open the app, select More
3. Under Account, locate and select the Health App option
4. Tap the Connect to Health App button at the bottom of the screen
5. Select either Turn All Categories On or specifically select what data you want shared
6. Lastly, select Allow in the upper right-hand corner to complete set-up

:::tip Setup Guide

[The official documentation](https://support.onepeloton.com/hc/en-us/articles/360022843811-Apple-Health) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

Your Android app users will need to perfom a one-time connection between Peloton and Health Connect on their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Peloton health data directly from Health Connect without any further effort from the user.

### Connecting to Health Connect

Follow these steps:

1. Open the Peloton App on your Android® mobile device or tablet.
2. Tap "Set Up" to connect the Peloton App with Health Connect. If you have not yet downloaded the Heath Connect app, tapping “Set Up” will bring you to the Google® Play Store where you can do so. Once downloaded, go back to the Peloton App and tap on “Set Up.”
3. After tapping "Set Up," Health Connect will open a separate page. Select the Peloton App data you want Health Connect to have access to.
4. Once you have given Health Connect access to your selected Peloton workout data, you will be brought back to the Peloton App.

Your Health Connect app will now have access to your Peloton workout data as the set up process is complete. If you would like to disconnect Heath Connect from your Peloton App, you can do so at any time by clicking on “More” on your Peloton App and switching off Health Connect under “Add-ons.”

:::tip Setup Guide

[The official documentation](https://support.onepeloton.com/hc/en-us/articles/10883732748180-Android-Health-Connect-With-The-Peloton-App-) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::