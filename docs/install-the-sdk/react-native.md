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

```Text title=Terminal
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

## Using Sahha in an Expo Project

This section is for developers using Expo to run their React Native project.

:::tip The Sahha SDK can be used inside an Expo project
 
In order to use native platform code for Android and iOS, you will need to convert your Expo Go project to an Expo development build.

[Visit the Expo documentation](https://docs.expo.dev/development/create-development-builds/) to learn how to create development builds.

:::

---

### Step 1) (Optional) Create Expo project

If you don't have an Expo project, create one.

Use the command `npx create-expo-app "ProjectName"`.

```Text title=Terminal
npx create-expo-app MyExpoProject
```

---

### Step 2) Go to Expo project folder

Go to your project folder.

Use the command `cd ProjectName`.

```Text title=Terminal
cd MyExpoProject
```

---

### Step 3) (Optional) Install Expo modules

You can optionally add Expo to an existing React Native project.

https://docs.expo.dev/bare/installing-expo-modules/

Use the command `npx install-expo-modules@latest` inside your project folder.

```Text title=Terminal
npx install-expo-modules@latest
```

---

### Step 4) (Optional) Install Expo dev client

If you are starting a new React Native project, you will need to install the Expo dev client.

Use the command `npx expo install expo-dev-client` inside your project folder.

```Text title=Terminal
npx expo install expo-dev-client
```

---

### Step 5) Install Sahha SDK

[Install the Sahha SDK as an npm package.](#step-1-install-the-sahha-npm-package)

Use the command `npm i sahha-react-native` inside your project folder.

```Text title=Terminal
npm i sahha-react-native
```

---

### Step 6) Add the iOS platform to your project

If your app uses iOS, you will need to add the iOS platform to your project.

https://docs.expo.dev/workflow/run-on-device/#running-a-project-as-a-standalone-app

Use the command `npx expo run:ios -d` inside your project folder.

```Text title=Terminal
npx expo run:ios -d
```

After you've added the iOS platform to your project, [follow these steps to complete iOS setup.](#step-2-setup-ios-project)

---

### Step 7) Add the Android platform to your project

If your app uses Android, you will need to add the Android platform to your project.

https://docs.expo.dev/workflow/run-on-device/#running-a-project-as-a-standalone-app

Use the command `npx expo run:ios -d` inside your project folder.

```Text title=Terminal
npx expo run:android -d
```

---

### Step 8) Browse the Sahha Expo demo app

We've provided a demo app to show how to setup the Sahha SDK inside an Expo development build.

[Sahha Expo demo app](https://github.com/sahha-ai/sahha-demo-expo)