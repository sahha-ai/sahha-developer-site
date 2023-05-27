---
sidebar_position: 5
---

# Ionic / Capacitor

Learn how to install the Sahha SDK in your Ionic / Capacitor project

---

### Step 1) Install the Sahha NPM Package

Install the `sahha-capacitor` NPM Package inside the root folder of your React Native project.

```Text title=Terminal
$ npm i sahha-capacitor
```

***

### Step 2) Sync Projects

Sync the changes to your native iOS / Android projects.

```Text title=Terminal
$ ionic capacitor sync
```

***

## Step 3) Setup iOS Project

Follow these additional steps to install the Sahha SDK in your iOS project.

***

:::info Install CocoaPods

You will need to install CocoaPoads before you can install the Sahha SDK to your iOS project. 

Visit <a href="https://cocoapods.org/https://cocoapods.org/" target="_blank">cocoapods.org</a> to learn how to install CocoaPods.
:::

### Step 3.1) Install Sahha Pod

Run `pod install` from the `Terminal` app in your project root folder.

```Text Terminal
$ pod install
```

***

### Step 3.2) Project Settings

:::caution Setup Xcode

You will need to edit your Xcode project settings to enable the Sahha SDK.

[Xcode Project Settings](./ios#step-3-edit-project)

:::

***

## Step 4) Import Sahha Module

Import the `Sahha` module into any files inside your React Native project that use the SDK.

```javascript title=MyReactApp.js
import { Sahha } from "sahha-capacitor";
```