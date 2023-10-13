---
sidebar_position: 2
slug: apple-health
---

# Apple Health

These Sahha SDK collects health data from Apple Health.

<img src={require('@site/static/img/hk/hk_1.png').default} style={{height: 512}} />


---

## Overview

HealthKit provides a central repository for health and fitness data on iPhone and Apple Watch. With the user’s permission, apps communicate with the HealthKit store to access and share this data. Use the `enableSensors` method of the Sahha SDK to show a user permission dialog for your app.

https://developer.apple.com/documentation/healthkit

:::caution
Because health data may contain sensitive, personal information, apps must receive permission from the user to read data from or write data to the HealthKit store. They must also take steps to protect that data at all times. For more information, see [Protecting user privacy](https://developer.apple.com/documentation/healthkit/protecting_user_privacy).

:::

<img src={require('@site/static/img/hk/hk_2.png').default} style={{height: 512}} />

---

## Enable HealthKit

Before you can use HealthKit, you must enable the HealthKit capabilities for your app.

You add capabilities to your app using the Signing & Capabilities pane of the project editor.

---

### Step 1

In the Project navigator of the main window, select the project — the root group with the same name as your app — and in the project editor that appears, select the appropriate target and then click the Signing & Capabilities tab.

<img src={require('@site/static/img/hk/hk_capability_1.png').default} style={{height: 512}} />

---

### Step 2

In the toolbar, click the Library button (+) to open the Capabilities library. Alternatively, click + Capability to the left of the build configurations, or choose Editor > Add Capability. The Capabilities library displays only the capabilities available to the target platform and your program membership. Select a capability in the list to view its description on the right.

<img src={require('@site/static/img/hk/hk_capability_2.png').default} style={{height: 512}} />

---

### Step 3

Select `HealthKit` from the list of capabilities.

<img src={require('@site/static/img/hk/hk_capability_3.png').default} style={{height: 512}} />

---

### Step 4

After you add the HealthKit capability, Xcode links the HealthKit framework to your target and updates the target’s entitlements file to include the HealthKit Entitlement. If Xcode automatically manages the signing of your app, it also enables HealthKit for your app’s App ID.

---

## Background Delivery

In order for the Sahha SDK to passively collect health data, your app will need to enable background delivery for HealthKit.

To enable HealthKit run even while your app is in the background, perform the following:

1. Select your project in Xcode’s Project navigator.

2. Select the app’s target from the Targets list.

3. Click the Signing & Capabilities tab in the project editor.

4. Find the HealthKit capability.

5. Enable the nested Background Delivery capability.

**Xcode adds the `com.apple.developer.healthkit.background-delivery` entitlement to the target’s entitlements file.**

<img src={require('@site/static/img/hk/hk_background_delivery.png').default} />

---

## Background Modes

In order for the Sahha SDK to send health data to the Sahha API even while your app is in the background, you will need to enable the background modes capability.

You add capabilities to your app using the Signing & Capabilities pane of the project editor.

---

### Step 1
In the Project navigator of the main window, select the project — the root group with the same name as your app — and in the project editor that appears, select the appropriate target and then click the Signing & Capabilities tab.

<img src={require('@site/static/img/hk/hk_capability_1.png').default} style={{height: 512}} />

---

### Step 2
In the toolbar, click the Library button (+) to open the Capabilities library. Alternatively, click + Capability to the left of the build configurations, or choose Editor > Add Capability. The Capabilities library displays only the capabilities available to the target platform and your program membership. Select a capability in the list to view its description on the right.

<img src={require('@site/static/img/hk/hk_capability_2.png').default} style={{height: 512}} />

---

### Step 3
Select `Background Modes` from the list of capabilities.

<img src={require('@site/static/img/hk/hk_capability_3a.png').default} style={{height: 512}} />

**Xcode adds the UIBackgroundModes array to your app’s Info.plist file, if it isn’t already present, and uses the modes you select to populate the array with the necessary values.**

---

### Step 4
In the Signing & Capabilities tab of the Project Navigator, select these values under the Background Modes capability:
 - Background Fetch
 - Background processing

<img src={require('@site/static/img/hk/hk_background_modes.png').default} />

---

## Request access

HealthKit uses a fine-grained authorization mechanism to help protect the user’s privacy; your app must request permission to read and, optionally, write each individual sample type it supports.

Before prompting the user for their permission, you must configure your app to include one or more purpose strings, which accurately and concisely describe why the app needs to read the user’s health data, write health data to their HealthKit store, or both. The presence of these purpose strings is an App Store requirement for any app that integrates with HealthKit. The system displays this information to the user when requesting their permission, along with the specific sample types that your app needs to access, which helps them make an informed decision.

Follow these steps to add the purpose string for reading health data to your app’s target:

1. In the Project navigator, select your target’s Info.plist file.

2. Move the mouse pointer over the “Information Property List” key.

3. Click the Add button (+) that appears.

4. Choose “Privacy - Health Share Usage Description”.

5. Double-click the Value column to the right of the key and enter your app’s purpose string.

<img src={require('@site/static/img/hk/hk_share_usage.png').default} />

---

## 30-day read restriction

Applications can read data from Apple Health for up to 30 days prior to when any permission was first granted.

However, if a user deletes your app, the permission history is lost. If the user reinstalls your app and grants permission again, your app can read data from Apple Health up to 30 days prior to that new date.

### Example

If a user first granted read permission to your application on March 30, 2023, the earliest data your app could read back would be from February 28, 2023 onwards.

The user then deletes your app on May 10, 2023. The user decides to reinstall it on May 15, 2023 and grant read permission. The earliest date your app can now read data from is April 15, 2023.

---

## Locked restriction

Reading data with Apple Health is restricted while the device is locked. This restriction is in place to further strengthen user privacy. This assures users that Apple Health does not have read access to user data while the device is locked. As soon as the user unlocks the device, Apple Health can sync data that was recorded while the device was locked.