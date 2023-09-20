# Fitbit

Sync data between Fitbit and Sahha.

<img src={require('@site/static/img/integrations/fitbit.png').default} style={{height: 256}} />

---

## iOS

:::caution NOT AVAILABLE
Unfortunately, Fitbit does not provide an official method for syncing health data with Apple Health.

This is because Fitbit is owned by Google and is a direct competitor with Apple.
:::

---

## Android

Your Android app users will need to perfom a one-time connection between Fitbit and Health Connect on their Android device.

Once the user has completed this process, the Sahha SDK will be able to collect the synced Fitbit health data directly from Health Connect without any further effort from the user.

### How do I share Fitbit data with Health Connect?

1. From the Today tab  in the Fitbit app, tap the icon in the top left.
2. Under Settings, tap Health Connect.
3. Tap to turn on Sync with Health Connect.
4. If you don’t have the Health Connect app installed, tap Get Health Connect, and follow the on-screen instructions.
5. On the Health Connect screen, tap Get started.
6. Choose which stats you want to sync to Health Connect or tap Allow All.
7. Tap Done.
8. Wait a few minutes for your Fitbit data to sync. Up to 30 days of Fitbit data will be copied to Health Connect. After your Fitbit account is connected, Fitbit data syncs to Health Connect throughout the day. Recent data might take up to 15 minutes to appear.

:::tip Setup Guide

[The official documentation](https://help.fitbit.com/articles/en_US/Help_article/1742.htm#:~:text=Health%20Connect%20allows%20you%20to,and%20fitness%20apps%2C%20including%20Fitbit.) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your Android app users.

:::