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

## Step 3) Import Module

Import the Sahha module into any files inside your project that use the SDK.

```kotlin title=MyApp.kt
import sdk.sahha.android.source.*
```