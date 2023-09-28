---
sidebar_position: 8
slug: apple-health
---

# Apple Health

These Sahha SDK collects health data from Apple Health.

---

## 30-day read restriction

Applications can read data from Apple Health for up to 30 days prior to when any permission was first granted.

However, if a user deletes your app, the permission history is lost. If the user reinstalls your app and grants permission again, your app can read data from Apple Health up to 30 days prior to that new date.

### Example

If a user first granted read permission to your application on March 30, 2023, the earliest data your app could read back would be from February 28, 2023 onwards.

The user then deletes your app on May 10, 2023. The user decides to reinstall it on May 15, 2023 and grant read permission. The earliest date your app can now read data from is April 15, 2023.

## Locked restriction

Reading data with Apple Health is restricted while the device is locked. This restriction is in place to further strengthen user privacy. This assures users that Apple Health does not have read access to user data while the device is locked. As soon as the user unlocks the device, Apple Health can sync data that was recorded while the device was locked.