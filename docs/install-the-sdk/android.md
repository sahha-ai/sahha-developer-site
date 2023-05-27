---
sidebar_position: 2
---

# Android

Learn how to install the Sahha SDK in your Android project

---

## Step 1) Add Jitpack

Add the Jitpack repository to your project's Settings.gradle.

```text title=Settings.gradle
repositories {
    mavenCentral()
    maven { url "https://jitpack.io" }
}
```

***

## Step 2) Add Implementation

Add the Sahha SDK implementation to your project's dependencies in Build.gradle.

```text title=Build.gradle
dependencies {

    ...

    implementation 'com.github.sahha-ai:sahha-android:+'

    ...

}
```

***

## Step 3) Add Permissions

Add the required permissions to your project's AndroidManifest.xml.

```xml title=AndroidManifest.xml
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.PACKAGE_USAGE_STATS" tools:ignore="ProtectedPermissions" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
<uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
<uses-permission android:name="com.google.android.gms.permission.ACTIVITY_RECOGNITION" />
```

***

## Step 4) Import Module

Import the Sahha module into any files inside your project that use the SDK.

```kotlin title=MyApp.kt
import sdk.sahha.android.source.*
```