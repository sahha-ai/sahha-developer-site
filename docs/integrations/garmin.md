# Garmin

Sync data between Garmin and Sahha.

<img src={require('@site/static/img/integrations/garmin.png').default} style={{height: 256}} />

---

## iOS

Your iOS app users will need to perfom a one-time connection between Garmin and Apple Health on their iOS device.

### Connecting to Apple Health

**How Do I Enable or Disable Sharing With Apple Health?**

To enable or disable sharing data from Garmin Connect to Apple Health, follow the instructions below.

1. Open the Apple Health app.

2. Select Summary (bottom left).

3. Select your Profile Picture (top right).

4. Select Apps under Privacy.

5. Select the Connect app.

6. Toggle Categories on or off.

Once sharing is enabled, the Health app will only display previously recorded data from up to two weeks prior to the sharing being enabled.

**How Is Data Transferred From Garmin Connect to Apple Health?**

Once Garmin Connect sharing is enabled in Apple Health, data will begin syncing to the Apple Health app after each successful device sync with the Garmin Connect app. Data will only be sent to Apple Health while the Garmin Connect app is open in the foreground. If the app is closed or sent to the background, the transfer of data to Apple Health will not complete until a successful sync of the device while the Garmin Connect app is open.

### Troubleshooting

**I Have Enabled Data from Garmin Connect to Be Shared but It Is Not Appearing in the Apple Health App**

Apple Health can allow multiple sources to update your health data. When multiple sources are available, only one data source will be chosen based on the priority order listed in the Apple Health app. If you notice that your Garmin Connect data is not appearing in Apple Health but you have enabled sharing, you may need to update the priority of data sources so that Garmin Connect is first priority. For instructions refer to this Apple Support article: [Prioritize data sources in Apple Health](https://support.apple.com/HT204351#prioritize).

:::tip Setup Guide

[The official documentation](https://support.garmin.com/en-US/?faq=lK5FPB9iPF5PXFkIpFlFPA) provides a step-by-step guide explaining how to sync health data.

Please read and share this guide with your iOS app users.

:::

---

## Android

:::caution NOT AVAILABLE

Unfortunately, Garmin does not provide an official method for syncing health data with Android Health Connect.

:::