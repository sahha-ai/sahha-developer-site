# Samsung Health

Sync data between Samsung Health and Sahha.

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import logo from './img/samsung.png';

<img src={logo} style={{height: 256}} />

---

## iOS

:::caution NOT AVAILABLE

Unfortunately, Samsung Health does not provide an official method for syncing health data with Apple Health.

This is because Samsung has partnered with Google and is a direct competitor with Apple.

:::

---

## Android

Your Android app users will need to perfom a one-time connection between Samsung Health and Health Connect on their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Samsung Health data directly from Health Connect without any further effort from the user.

### Connecting to Health Connect

To start data synchronization between Samsung Health and Health Connect, you must enable it in the Samsung Health application on your Android device. 

Follow these steps:

1. From the Settings menu, select Health Connect. If Health Connect is not installed, you are prompted to install it.
2. The first time you access the Health Connect menu item in Samsung Health with the Health Connect application installed, you are asked for permission to share your Samsung Health data with Health Connect. Select the data you consent to sharing, and select Allow.
3. Samsung Health and Health Connect are now linked and data is shared between them.

:::tip Setup Guide

[The official documentation](https://developer.samsung.com/health/blog/en-us/2022/12/21/accessing-samsung-health-data-through-health-connect) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::