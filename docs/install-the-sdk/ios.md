---
sidebar_position: 1
---

# iOS

Learn how to install the Sahha SDK in your iOS project

---

## Step 1) Install Library

Choose how you would like to install the Sahha library into your Xcode project.

---


### Option A) Swift Package Manager

Add the Sahha swift package to your project's package dependencies.

```text title="Swift Package Manager"
https://github.com/sahha-ai/sahha-swift
```

---

### Option B) CocoaPods

Add the Sahha pod to your project's pod dependencies.

:::info Install CocoaPods
Visit <a href="https://cocoapods.org/https://cocoapods.org/" target="_blank">cocoapods.org</a> to learn how to install CocoaPods.
:::

#### Step 1) Add the Sahha pod to your project's Podfile.

```text title="Podfile"
pod 'Sahha'
```

#### Step 2) Run `pod install` from the `Terminal` app in your project root folder.

```text title="Terminal"
$ pod install
```

***

## Step 2) Import Module

After you have installed the Sahha library, import the Sahha module into any files inside your project that use the SDK.

```swift title="MyApp.swift"
import Sahha
```

***

## Step 3) Edit Project

You will need to edit your project settings to enable the Sahha SDK.

:::info Apple Health
Read through the [Apple Health docs](../health-systems//apple-health.md) for additional info on setting up your project.
:::

***

### Usage Descriptions

:::caution Add usage descriptions to your Xcode project

You will need to write a message explaining to the user why they should approve these permissions.

- Add `NSHealthShareUsageDescription`
:::

***

### HealthKit Entitlement

:::caution Add `HealthKit` entitlement to your Xcode project

- Select your App Target in the Project panel
- Select `Signing & Capabilities`
- Tap the `+` button
- Select `HealthKit` from the list
- Set `Background Delivery` to `true`
:::

***

### Background Modes Entitlement

:::caution Add `Background Modes` entitlement to your Xcode project

- Select your App Target in the Project panel
- Select `Signing & Capabilities`
- Tap the `+` button
- Select `Background Modes` from the list
- Set `Background Fetch` to `true`
- Set `Background Processing` to `true`
:::

***

### Info.plist

You can also edit the `Info.plist` file directly.

```xml title="Info.plist"
<plist version="1.0">
<dict>
<key>NSHealthShareUsageDescription</key>
  <string>This app would like access to your health activity for analysis.</string>
<key>UIBackgroundModes</key>
	<array>
		<string>fetch</string>
		<string>processing</string>
	</array>
</dict>
</plist>
```

***

### App.entitlements

You can also edit the `App.entitlements` file directly.

```xml title="App.entitlements"
<plist version="1.0">
<dict>
 <key>com.apple.developer.healthkit</key>
  <true/>
 <key>com.apple.developer.healthkit.access</key>
  <array/>
 <key>com.apple.developer.healthkit.background-delivery</key>
  <true/>
</dict>
</plist>
```