---
sidebar_position: 4
---

# React Native

Learn how to install the Sahha SDK in your React Native project

---

### Step 1) Install the Sahha NPM Package

Install the `sahha-react-native` NPM Package inside the root folder of your React Native project.

```Text title=Terminal
$ npm i sahha-react-native
```

***

## Step 2) Setup iOS Project

Follow these additional steps to install the Sahha SDK in your iOS project.

***

:::info Install CocoaPods

You will need to install CocoaPoads before you can install the Sahha SDK to your iOS project. 

Visit <a href="https://cocoapods.org/https://cocoapods.org/" target="_blank">cocoapods.org</a> to learn how to install CocoaPods.
:::

### Step 2.1) Install Sahha Pod

Run `pod install` from the `Terminal` app in your project root folder.

```Text Terminal
$ pod install
```

***

### Step 2.2) Project Settings

:::caution Setup Xcode

You will need to edit your Xcode project settings to enable the Sahha SDK.

[Xcode Project Settings](./ios#step-3-edit-project)

:::

***

## Step 3) Import Sahha Module

Import the `Sahha` module into any files inside your React Native project that use the SDK.

```javascript title=MyReactApp.js
import { Sahha } from "sahha-react-native";
```

***

## Expo Project

This section is for developers using Expo to run their React Native project.

:::tip The Sahha SDK can be used inside an Expo project
 
In order to use native platform code for Android and iOS, you will need to convert your Expo Go project to an Expo development build.

[Visit the Expo documentation](https://docs.expo.dev/development/create-development-builds/) to learn how to create development builds.

:::

### Follow our guide to use the Sahha SDK in an Expo project

**coming soon**

### Browse the Sahha Expo demo app

We've provided a demo app to show how to setup the Sahha SDK inside an Expo development build.

[Sahha Expo demo app](https://github.com/sahha-ai/sahha-demo-expo)