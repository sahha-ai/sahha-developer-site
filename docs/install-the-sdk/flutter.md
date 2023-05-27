---
sidebar_position: 3
---

# Flutter

Learn how to install the Sahha SDK in your Flutter project

---

## Step 1) Add Flutter Package Dependency

Add `sahha_flutter` as a dependency in your `pubspec.yaml` file.

```Text title=pubspec.yaml
dependencies:
    flutter:
        sdk: flutter

    sahha_flutter:
        git:
            url: git://github.com/sahha-ai/sahha_flutter.git

 
```

***

## Step 2) Install Flutter Package

Run `flutter pub get` inside the root folder of your Flutter project.

```Text title=Terminal
$ flutter pub get
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

## Step 4) Import Sahha Package

Import the `sahha_flutter` package into any files inside your Flutter project that use the SDK.

```dart title=MyApp.dart
import 'package:sahha_flutter/sahha_flutter.dart';
```