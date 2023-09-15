---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sensors

Manage device sensors

:::tip Sahha handles sensors for your app

The Sahha SDK acts as a bridge between your app and the sensors.

This simplifies the process of collecting and analyzing device data.

:::

***

## Sensor Status

The sensors have multiple possible statuses.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
public enum SensorStatus: Int {
    case pending = 0 // Sensors pending (before prompting user for permission)
    case unavailable = 1 // Sensors not supported by user's device
    case disabled = 2 // Sensors disabled (after prompting user for permission)
    case enabled = 3 // Sensors enabled (after prompting user for permission)
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
enum class SahhaSensorStatus {
    pending, // Sensors pending User permission
    unavailable, // Sensors not supported by the User's device
    disabled, // Sensors disabled by the User
    enabled // Sensors enabled by the User
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
enum SahhaSensorStatus {
  pending // Sensors pending User permission
  unavailable // Sensors not supported by the User's device
  disabled // Sensors disabled by the User
  enabled // Sensors enabled by the User
}
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
export enum SahhaSensorStatus {
  pending = 0, // Sensors pending User permission
  unavailable = 1, // Sensors not supported by the User's device
  disabled = 2, // Sensors disabled by the User
  enabled = 3, // Sensors enabled by the User
}
```

</TabItem>

</Tabs>

---

### (iOS) Sensor Status - **IMPORTANT INFO**

:::caution User Privacy

Apple limits the ability to detect the true sensor status to protect user privacy.

#### Apple documentation:

`To help protect the user’s privacy, your app doesn’t know whether the user granted or denied permission to read data from HealthKit. If the user denied permission, attempts to query data from HealthKit return only samples that your app successfully saved to the HealthKit store.`

This means that if a Sensor is available, the only possible SensorStatus is:
 
- `pending` if you have not already prompted the user for permission yet
- `enabled` if you have already prompted the user for permission yet

The `disabled` SensorStatus is not triggered even if the user declines permission.

The `disabled` SensorStatus is only included in the iOS SDK to keep parity with the Android SDK.

Please read the official Apple documentation to better understand authorizing access to health data for iOS.

[Authorizing access to health data for iOS](https://developer.apple.com/documentation/healthkit/authorizing_access_to_health_data)

:::

***

## Get Sensor Status

You can check the current status of the sensors by calling `getSensorStatus`. This method is asynchronous and will return the updated `SahhaSensorStatus` in its callback.

:::danger Configure the SDK before you Get Sensor Status

On app launch, `SensorStatus` will always be `pending`. You must configure the SDK before you can get the correct `SensorStatus`.

We suggest calling `getSensorStatus` in the callback of `configure`.

:::

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
Sahha.configure(settings) {
    // SDK is ready to use
    print("SDK Ready")
  	
    Sahha.getSensorStatus { error, sensorStatus in
        if let error = error {
            print(error)
        }
    	else if sensorStatus == .pending {
            // Show your custom UI asking your user to setup Sleep in the Health App
    	}
        else if sensorStatus = .enabled {
            // Sensors are enabled and ready
        } else {
            // Sensors are disabled or unavailable
        }
	}
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
Sahha.configure(application, settings) { error, success ->
    if (error != null) {
        println(error)
    } else {
        println(success.toString())
                
        Sahha.getSensorStatus(this@MainActivity) { error, sensorStatus ->
    		if (error != null) {
        		println(error)
    		} else {
        		println(sensorStatus.name)
    		}
		}
    }
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
SahhaFlutter.configure(environment: SahhaEnvironment.sandbox)
    .then((success) {
        debugPrint(success.toString());

        SahhaFlutter.getSensorStatus().then((value) {
            setState(() {
            // Set your variable here to match value
        });
        if (value == SahhaSensorStatus.pending) {
          // Show your custom UI asking your user to setup Sleep in the Health App
        }
    }).catchError((error, stackTrace) {
        debugPrint(error.toString());
    });
      
}).catchError((error, stackTrace) => {
    debugPrint(error.toString());
});
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
Sahha.configure(settings, (error: string, success: boolean) => {
    if (error) {
        console.error(`Error: ${error}`);
    } else if (success) {
        console.log(`Success: ${success}`);

        // SDK is ready
        
        Sahha.getSensorStatus((error: string, value: SahhaSensorStatus) => {
          if (error) {
            console.error(`Error: ${error}`);
          } else if (value) {
            console.log(`Sensor Status: ${value}`);
            // Set sensor status to value
          }
        });
    }
});
```

</TabItem>

</Tabs>

## Enable Sensors

Before the SDK can start collecting data, you will need to enable sensors by calling `enableSensors`. This method is asynchronous and will return the updated `SahhaSensorStatus` in its callback.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
Sahha.enableSensors { error, sensorStatus in
    if let error = error {
        print(error)
    }
    else if sensorStatus == .pending {
        // Show your custom UI asking your user to setup Sleep in the Health App
    }
    else if sensorStatus = .enabled {
        // Sensors are enabled and ready
    } else {
        // Sensors are disabled or unavailable
    }
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
Sahha.enableSensors(this@MainActivity) { error, sensorStatus ->
    if (error != null) {
        println(error)
    } else {
        println(sensorStatus.name)
    }
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
SahhaFlutter.enableSensors()
.then((value) {
    setState(() {
        sensorStatus = value;
    });
    debugPrint(describeEnum(sensorStatus));
}).catchError((error, stackTrace) => {
    debugPrint(error);
});
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
Sahha.enableSensors((error: string, value: SahhaSensorStatus) => {
    if (error) {
        console.error(`Error: ${error}`);
    } else if (value) {
        console.log(`Sensor Status: ${value}`);
        setSensorStatus(value);
    }
});
```

</TabItem>

</Tabs>

---

### (iOS) Sleep Sensor - **IMPORTANT INFO**

:::danger Setup Sleep Before Using the SDK

In order for the Sahha SDK to collect data from the `sleep` sensor, Sleep functionality must be enabled by your mobile user **BEFORE** calling `enableSensors`.

We suggest checking if your user has seen the HealthKit permission screen before enabling the `sleep` sensor. If the status is `pending`, this is the perfect time to show your custom UI asking your user to setup Sleep in the Health App.

Please read the official Apple documentation to help your users setup Sleep for iOS.

[Sleep for iOS](https://support.apple.com/en-us/HT211685)

:::

---

## Open App Settings

It's possible for your app user to disable a sensor. In this case, you must send the user to the app settings to manually enable the sensor.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
Sahha.openAppSettings()
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
Sahha.openAppSettings(this@MainActivity)
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
SahhaFlutter.openAppSettings()
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
Sahha.openAppSettings();
```

</TabItem>

</Tabs>

### (iOS) Permission Changes - **IMPORTANT INFO**

:::danger App will terminate if Permission Changes

If the user enables / disables a sensor permission from the device settings menu while your app is in the background, the iOS system will force your app to terminate. This is intentional behavior and your app will need to be relaunched.

:::

---

## Post Sensor Data

You have the option of manually posting sensor data.

:::tip Sahha will post sensor data automatically

By default, the Sahha SDK will post sensor data automatically. **Using the method is OPTIONAL.**

However, you can also post sensor data manually to the Sahha API by calling `postSensorData` at a regular interval of your choosing. Any new sensor data that has been collected since the last automatic or manual post will be uploaded.

We recommend that you DO NOT use this method more than once per hour.

:::

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
Sahha.postSensorData { error, success in
    if let error = error {
        print(error)
    }
    print(success)
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
Sahha.postSensorData { error, success ->
    if (success) manualPost = "Successful"
    else manualPost = error ?: "Failed"
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
SahhaFlutter.postSensorData()
.then((success) => {
    debugPrint(success.toString())
})
.catchError((error, stackTrace) => {
    debugPrint(error.toString())
});
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
Sahha.postSensorData((error: string, success: boolean) => {
    console.log(`Success: ${success}`);
    if (error) {
        console.error(`Error: ${error}`);
    }
});
```

</TabItem>

</Tabs>
