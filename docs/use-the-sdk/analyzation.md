---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Analyzation

Analyze a user profile

:::tip Sahha provides automated analyzation
 
Sahha analyzes a user's activities over a period of time and provides a mental health personalized report which you can display or action within your app.

**The default time period for an analysis is the previous 24 hours.**

:::

***

## Analyze (Previous 24 Hours)

Get an analysis for the previous 24 hours in the user's local timezone.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
// Analyze Previous 24 Hours
// Leave date range empty

Sahha.analyze(includeSourceData: true) { error, json in
    if let error = error {
        print(error)
    } else if let json = json {
        print(json)
    }
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
// Analyze previous 24 hours
// Leave date range empty

Sahha.analyze { error, success ->
    error?.also {
        println(error)
    }
    success?.also {
        println(success)
    }
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
// Analyze previous 24 hours
// Leave date range empty

SahhaFlutter.analyze()
.then((value) => {
    debugPrint(value)
})
.catchError((error, stackTrace) => {
    debugPrint(error.toString())
});
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
// Analyze previous 24 Hours
// Leave date range empty

Sahha.analyze((error: string, value: string) => {
    if (error) {
        console.error(`Error: ${error}`);
    } else if (value) {
        console.log(`Value: ${value}`);
    }
});
```

</TabItem>

<TabItem value="ionic" label="Ionic / Capacitor">

```typescript title=MyApp.tsx
// Analyze previous 24 Hours
// Leave date range empty

Sahha.analyze()
.then((data) => {
    console.log(data.value);
})
.catch((error: Error) => {
    console.error(error);
});
```

</TabItem>

</Tabs>

---

## Analyze (Date Range)

You can provide an optional data range if you would like to receive multiple analysis over a specific time period. The response will include an array of analysis for each 24 hour segment in that time period.

<Tabs groupId="os">

<TabItem value="ios" label="iOS">

```swift title=MyApp.swift
// Analyze Previous 7 Days
// Add a date range

let today = Date()
let sevenDaysAgo = Calendar.current.date(byAdding: .day, value: -7, to: today) ?? Date()
Sahha.analyze(dates: (sevenDaysAgo, today), includeSourceData: true) { error, json in
    if let error = error {
        print(error)
    } else if let json = json {
        print(json)
    }
}
```

</TabItem>

<TabItem value="android" label="Android">

```kotlin title=MainActivity.kt
// Analyze Previous 7 Days
// Add a date range

val now = Date()
val lastWeek = Date(now.time - SEVEN_DAYS_MILLIS)

Sahha.analyze(
    true,
    Pair(lastWeek, now)
) { error, success ->
    error?.also {
        println(error)
    }
    success?.also {
        println(success)
    }
}
```

</TabItem>

<TabItem value="flutter" label="Flutter">

```dart title=MyApp.dart
// Analyze previous 7 days
// Add a date range

var week = DateTime.now().subtract(Duration(days: 7));
SahhaFlutter.analyze(startDate: week, endDate: DateTime.now())
.then((value) => {
    debugPrint(value)
})
.catchError((error, stackTrace) => {
    debugPrint(error.toString())
});
```

</TabItem>

<TabItem value="react-native" label="React Native">

```typescript title=MyApp.tsx
// Analyze previous 7 Days
// Add date range as milliseconds since epoch time

let endDate: Date = new Date();
let days = endDate.getDate() - 7;
var startDate = new Date();
startDate.setDate(days);
const settings = {
  startDate: startDate.getTime(),
  endDate: endDate.getTime(),
};

Sahha.analyze(settings, (error: string, value: string) => {
    if (error) {
        console.error(`Error: ${error}`);
    } else if (value) {
        console.log(`Value: ${value}`);
    }
});
```

</TabItem>

<TabItem value="ionic" label="Ionic / Capacitor">

```typescript title=MyApp.tsx
// Analyze previous 7 Days
// Add date range as milliseconds since epoch time

let endDate: Date = new Date();
let days = endDate.getDate() - 7;
var startDate = new Date();
startDate.setDate(days);

Sahha.analyze({
  startDate: startDate.getTime(),
  endDate: endDate.getTime(),
})
.then((data) => {
    console.log(data.value);
})
.catch((error: Error) => {
    console.error(error);
});
```

</TabItem>

</Tabs>

---

## `200 Response`

The response will be in JSON format. An example response includes these fields:

```json title=RESPONSE
{
  "inferences": [
    {
      "createdAt": "2022-05-20T00:30:00+00:00",
      "predictionState": "not_depressed",
      "predictionConfidence": 0.8,
      "dataSource": ["sleep", "steps", "age", "gender"]
    }
  ]
}
```

***

## `204 Response`

An empty but successful response.

:::caution MINIMUM DATA REQUIREMENTS

The analysis engine requires a minimum amount of device sensor data to be uploaded and processed before an analysis can be determined.

If you call `analyze` for a new user profile or a user that has been inactive lately, it's possible for the response to be `204 No Content`. This is not an error.

**You will need to wait and try again every 24 hours until an analysis is available.**

:::

```json title=RESPONSE
// An analysis is not ready yet
// Try again in 24 hours
// Empty JSON
{}
```

***

## Data Sources

Data sources are required to generate an analysis.

:::tip The analysis is created from various data sources

To receive an analysis, a minimum of one data source must be configured by the SDK.

The more data sources that you configure via the SDK, the better the analysis that will be generated.

Some data sources are not yet available on all platforms. Sahha continues to improve its analysis engine by bringing feature parity between platforms as well as adding new data sources.

:::

| Data Source | Description             | Android | iOS |
| ----------- | ----------------------- | :-----: | :-: |
| sleep       | User sleep patterns     |    ✓    |  ✓  |
| steps       | User walking patterns   |    ✓    |  ✓  |
| screen      | User device screen time |    ✓    |  X  |
| heart       | User heart patterns     |    X    |  ✓  |
| blood       | User blood patterns     |    X    |  ✓  |
| age         | User age                |    ✓    |  ✓  |
| gender      | User gender             |    ✓    |  ✓  |

***

### Sensors

:::info Use Sensors as a Data Source

Learn how to configure sensors a data source.

[Configure Sensors](./sensors)

:::

***

### Demographics

:::info Use Demographics as a Data Source

Learn how to configure demographics as a data source.

[Configure Demographics](./profile#demographic)

:::

***

## Data Output

The analysis generated will include these distinct data types.

| Data Output          | Description                                |   Data Type  | Possible Values                                            |
| -------------------- | ------------------------------------------ | :----------: | :--------------------------------------------------------- |
| createdAt            | Time the analysis was generated            |    String    | TimeStamp in format `yyyy-MM-dd'T'HH:mm:ssxxx`             |
| predictionState      | Prediction of user health state            |    String    | Either `depressed` or `not_depressed`                      |
| predictionConfidence | Confidence percentage of `predictionState` |    Number    | Any number between `0.5` to `1.0`                          |
| dataSource           | Data sources used to generate the analysis | String Array | Any combination of `sleep`,`steps`,`screen`, `heart`, `blood`, `age`, `gender` |