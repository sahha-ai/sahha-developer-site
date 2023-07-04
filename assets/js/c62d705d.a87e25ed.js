"use strict";(self.webpackChunksahha_developer_site=self.webpackChunksahha_developer_site||[]).push([[3683],{1837:e=>{e.exports=JSON.parse('{"url":"https://sandbox-api.sahha.ai/swagger/v1/swagger.json","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.1","info":{"title":"Sahha Platform v1","version":"v1"},"paths":{"/api/v1/profile/demographic":{"put":{"tags":["1. Profile"],"summary":"Amend Demographic Information","description":"Updates the demographic information for a profile eg. Age, Gender. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DemographicDto"}},"text/json":{"schema":{"$ref":"#/components/schemas/DemographicDto"}},"application/*+json":{"schema":{"$ref":"#/components/schemas/DemographicDto"}}}},"responses":{"200":{"description":"Updates the demographic information for the profile."},"400":{"description":"Returned if the request data is invalid or empty."},"401":{"description":"Returned if the authorization token is invalid."}}},"get":{"tags":["1. Profile"],"summary":"Get Profile Demographic Information","description":"Returns the demographic information for a profile. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","responses":{"200":{"description":"Returns demographic information for the profile specified by the token in the authorization header.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GetDemographicResult"}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/deviceInformation":{"put":{"tags":["1. Profile"],"summary":"Amend Device Information","description":"Updates the device information for a profile, this is done automatically by the SDK if available. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DeviceInformationDto"}},"text/json":{"schema":{"$ref":"#/components/schemas/DeviceInformationDto"}},"application/*+json":{"schema":{"$ref":"#/components/schemas/DeviceInformationDto"}}}},"responses":{"200":{"description":"Updates device information."},"400":{"description":"Returned if the request data is invalid or empty."},"401":{"description":"Returned if the authorization token is invalid."}}},"get":{"tags":["1. Profile"],"summary":"Get Profile Device Information","description":"Returns the device information for a profile. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","responses":{"200":{"description":"Returns device information for the profile specified by the token in the authorization header.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GetDeviceInformationResult"}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/analyze/{externalId}":{"post":{"tags":["1. Profile"],"summary":"Analyze Profile by ExternalId","description":"Returns analysis inferences results for the ExternalId specified, filterable by date window.  <br> <br>Requires a valid <b>Account</b> token in the authorization header.","parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProfileAnalyzeRequest"}},"text/json":{"schema":{"$ref":"#/components/schemas/ProfileAnalyzeRequest"}},"application/*+json":{"schema":{"$ref":"#/components/schemas/ProfileAnalyzeRequest"}}}},"responses":{"200":{"description":"Returns analysis inference results for the profile ExternalId specified.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GetInferencesResult"}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/analyze":{"post":{"tags":["1. Profile"],"summary":"Analyze Profile","description":"Returns analysis inferences results for the profile specified by the token in the authorization header, filterable by date window. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProfileAnalyzeRequest"}},"text/json":{"schema":{"$ref":"#/components/schemas/ProfileAnalyzeRequest"}},"application/*+json":{"schema":{"$ref":"#/components/schemas/ProfileAnalyzeRequest"}}}},"responses":{"200":{"description":"Returns analysis inference results for the profile specified by the token in the authorization header.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/GetInferencesResult"}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/oauth/profile/register":{"post":{"tags":["2. Profile Authentication"],"summary":"Initialize Profile","description":"Creates a new profile and returns a Profile Token. A profile represents your end user. <br> <br>Requires a valid <b>Account</b> token in the authorization header.","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RegisterProfileRequest"}},"text/json":{"schema":{"$ref":"#/components/schemas/RegisterProfileRequest"}},"application/*+json":{"schema":{"$ref":"#/components/schemas/RegisterProfileRequest"}}}},"responses":{"201":{"description":"Initialises a new profile and returns a Profile Token.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProfileTokenResponse"}}}},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/oauth/profile/register/appId":{"post":{"tags":["2. Profile Authentication"],"summary":"Initialize Profile using AppId","description":"Creates a new profile and returns a profile token. A profile represents your end user. <br> <br> Required valid <b>AppId</b> and <b>AppSecret</b> in the headers.","parameters":[{"name":"AppId","in":"header","schema":{"type":"string"}},{"name":"AppSecret","in":"header","schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RegisterProfileRequest"}},"text/json":{"schema":{"$ref":"#/components/schemas/RegisterProfileRequest"}},"application/*+json":{"schema":{"$ref":"#/components/schemas/RegisterProfileRequest"}}}},"responses":{"201":{"description":"Initialises a new Profile and returns a profile token.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProfileTokenResponse"}}}},"401":{"description":"Returned if the headers are invalid."}}}},"/api/v1/oauth/profile/token":{"post":{"tags":["2. Profile Authentication"],"summary":"Get Profile Token","description":"Returns a profile token to be used in the authorization header as \'profile {token}\'","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RetrieveOAuthProfileTokenRequest"}},"text/json":{"schema":{"$ref":"#/components/schemas/RetrieveOAuthProfileTokenRequest"}},"application/*+json":{"schema":{"$ref":"#/components/schemas/RetrieveOAuthProfileTokenRequest"}}}},"responses":{"200":{"description":"Returns a token response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProfileTokenResponse"}}}},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/oauth/profile/refreshToken":{"post":{"tags":["2. Profile Authentication"],"summary":"Refresh Token","description":"Returns a refreshed profile token to be used in the authorization header as \'profile {token}\'","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RefreshOAuthProfileTokenRequest"}},"text/json":{"schema":{"$ref":"#/components/schemas/RefreshOAuthProfileTokenRequest"}},"application/*+json":{"schema":{"$ref":"#/components/schemas/RefreshOAuthProfileTokenRequest"}}}},"responses":{"200":{"description":"Returns a token response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProfileTokenResponse"}}}},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/deviceLockActivity/log":{"post":{"tags":["3. Device Lock Activity"],"summary":"Receive Device Lock Activity","description":"Receives a range of device lock activity as an array from an end users mobile device. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/DeviceLockActivityDto"}}},"text/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/DeviceLockActivityDto"}}},"application/*+json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/DeviceLockActivityDto"}}}}},"responses":{"201":{"description":"Logs the device lock activity."},"400":{"description":"Returned if the request data is invalid."},"401":{"description":"Returned if the authorization token is invalid."}}},"get":{"tags":["3. Device Lock Activity"],"summary":"Retrieve Device Lock Activity","description":"Returns an array of device lock activity for a profile within the given date window. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","parameters":[{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}}],"responses":{"200":{"description":"Returns device lock activity for the given start / end date window for the profile specified in the authorization header.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/DeviceLockActivityDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/deviceLockActivity/log/{externalId}":{"get":{"tags":["3. Device Lock Activity"],"summary":"Retrieve Device Lock Activity Using Profile ExternalId","description":"Returns an array of device lock activity for a profile within the given date window. <br> <br>Requires a valid <b>Account</b> token in the authorization header.","parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}},{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}}],"responses":{"200":{"description":"Returns device lock activity for the given start / end date window for the profile ExternalId specified.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/DeviceLockActivityDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/movement/log":{"post":{"tags":["4. Movement Activity"],"summary":"Receive Movement Logs","description":"Receives a range of movement logs as an array from an end users mobile device. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/MovementLogDto"}}},"text/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/MovementLogDto"}}},"application/*+json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/MovementLogDto"}}}}},"responses":{"201":{"description":"Logs the movement activity."},"400":{"description":"Returned if the request data is invalid or empty."},"401":{"description":"Returned if the authorization token is invalid."}}},"get":{"tags":["4. Movement Activity"],"summary":"Retrieve Movement Logs","description":"Returns an array of movement logs for a profile within the given date window. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","parameters":[{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}}],"responses":{"200":{"description":"Returns movement logs for the profile specified by the token in the authorization header.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/MovementLogDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/movement/log/{externalId}":{"get":{"tags":["4. Movement Activity"],"summary":"Retrieve Movement Logs Using Profile ExternalId","description":"Returns an array of movement logs for a profile within the given date window. <br> <br>Requires a valid <b>Account</b> token in the authorization header.","parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}},{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}}],"responses":{"200":{"description":"Returns movement logs for the profile ExternalId specified.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/MovementLogDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/sleep/log":{"post":{"tags":["5. Sleep Activity"],"summary":"Receive Sleep Logs","description":"Receives a range of sleep logs as an array from an end users mobile device. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SleepLogDto"}}},"text/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SleepLogDto"}}},"application/*+json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SleepLogDto"}}}}},"responses":{"201":{"description":"Logs the sleep log activity."},"400":{"description":"Returned if the request data is invalid or empty."},"401":{"description":"Returned if the authorization token is invalid."}}},"get":{"tags":["5. Sleep Activity"],"summary":"Retrieve Sleep Logs","description":"Returns an array of sleep logs for a profile within the given date window. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","parameters":[{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"includeOverlappingResults","in":"query","schema":{"type":"boolean"}}],"responses":{"200":{"description":"Returns sleep logs for the profile specified by the token in the authorization header.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SleepLogDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/sleep/log/{externalId}":{"get":{"tags":["5. Sleep Activity"],"summary":"Retrieve Sleep Logs Using Profile ExternalId","description":"Returns an array of sleep logs for a profile within the given date window. <br> <br>Requires a valid <b>Account</b> token in the authorization header.","parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}},{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"includeOverlappingResults","in":"query","schema":{"type":"boolean"}}],"responses":{"200":{"description":"Returns sleep logs for the profile ExternalId specified.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/SleepLogDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/blood/log":{"post":{"tags":["6. Blood Activity"],"summary":"Receive Blood Logs","description":"Receives a range of blood logs as an array from an end users mobile device. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BloodLogDto"}}},"text/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BloodLogDto"}}},"application/*+json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BloodLogDto"}}}}},"responses":{"201":{"description":"Logs the blood activity."},"400":{"description":"Returned if the request data is invalid or empty."},"401":{"description":"Returned if the authorization token is invalid."}}},"get":{"tags":["6. Blood Activity"],"summary":"Retrieve Blood Logs","description":"Returns an array of blood logs for a profile within the given date window. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","parameters":[{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}}],"responses":{"200":{"description":"Returns blood logs for the profile specified by the token in the authorization header.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BloodLogDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/blood/log/{externalId}":{"get":{"tags":["6. Blood Activity"],"summary":"Retrieve Blood Logs Using Profile ExternalId","description":"Returns an array of blood logs for a profile within the given date window. <br> <br>Requires a valid <b>Account</b> token in the authorization header.","parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}},{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}}],"responses":{"200":{"description":"Returns blood logs for the profile ExternalId specified.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BloodLogDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/heart/log":{"post":{"tags":["7. Heart Activity"],"summary":"Receive Heart Logs","description":"Receives a range of heart logs as an array from an end users mobile device. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/HeartLogDto"}}},"text/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/HeartLogDto"}}},"application/*+json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/HeartLogDto"}}}}},"responses":{"201":{"description":"Logs the heart activity."},"400":{"description":"Returned if the request data is invalid or empty."},"401":{"description":"Returned if the authorization token is invalid."}}},"get":{"tags":["7. Heart Activity"],"summary":"Retrieve Heart Logs","description":"Returns an array of heart logs for a profile within the given date window. <br> <br>Requires a valid <b>Profile</b> token in the authorization header.","parameters":[{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}}],"responses":{"200":{"description":"Returns heart logs for the profile specified by the token in the authorization header.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/HeartLogDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}},"/api/v1/profile/heart/log/{externalId}":{"get":{"tags":["7. Heart Activity"],"summary":"Retrieve Heart Logs Using Profile ExternalId","description":"Returns an array of heart logs for a profile within the given date window. <br> <br>Requires a valid <b>Account</b> token in the authorization header.","parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}},{"name":"startDate","in":"query","schema":{"type":"string","format":"date-time"}},{"name":"endDate","in":"query","schema":{"type":"string","format":"date-time"}}],"responses":{"200":{"description":"Returns heart logs for the profile ExternalId specified.","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/HeartLogDto"}}}}},"204":{"description":"Returned if there are no results for the query."},"401":{"description":"Returned if the authorization token is invalid."}}}}},"components":{"schemas":{"BloodLogDto":{"type":"object","properties":{"dataType":{"title":"DataType","type":"string","description":"The type of data being logged. Can be \'BloodGlucose\', \'BloodPressureDiastolic\', \'BloodPressureSystolic\'","example":"BloodGlucose"},"count":{"title":"Count","type":"number","description":"The value corresponding to the data type.","format":"double","example":"55"},"unit":{"title":"Unit","type":"string","description":"Unit the data is in, eg mg/dL (milligrams per deciliter) or mmol/L (millimoles per liter)","nullable":true,"example":"mg/dL"},"relationToMeal":{"title":"RelationToMeal","type":"string","description":"Relationship to when the last or next meal is.","nullable":true,"example":"Before Meal"},"bodyPosition":{"title":"BodyPosition","type":"string","description":"The position the body was in at time of measurement. E.g. sitting_down","nullable":true,"example":"Body Position"},"measurementLocation":{"title":"MeasurementLocation","type":"string","description":"Where the blood pressure was measured from. E.g. left_upper_arm","nullable":true,"example":"Measurement Location"},"specimenSource":{"title":"SpecimenSource","type":"string","description":"Where the specimen was collected.","nullable":true,"example":"capillary_blood"},"mealType":{"title":"MealType","type":"string","description":"The type of meal had prior to sampling.","nullable":true,"example":"breakfast"},"source":{"title":"Source","type":"string","description":"Source of this data log. e.g. \'Iphone X\'","example":"Iphone X"},"manuallyEntered":{"title":"ManuallyEntered","type":"boolean","description":"Whether the information was manually entered, or captured from a viable source\'","example":"true"},"startDateTime":{"title":"StartDateTime","type":"string","description":"Denotes the start date and time for the blood log period. In ISO 8601 format with a timezone offset.","format":"date-time","example":"2022-01-01T00:00:00+12:00"},"endDateTime":{"title":"EndDateTime","type":"string","description":"Denotes the end date and time for the blood log period. In ISO 8601 format with a timezone offset.","format":"date-time","example":"2022-01-01T00:00:00+12:00"}},"additionalProperties":false},"DemographicDto":{"type":"object","properties":{"occupation":{"title":"Occupation","type":"string","description":"Occupation of the user.","nullable":true,"example":"Project Manager"},"age":{"title":"Age","type":"integer","description":"Age of the user, must be 18 or more and 100 or less.","format":"int32","nullable":true,"example":"35"},"gender":{"title":"Gender","type":"string","description":"Gender of the user. Can be Male, Female or Gender Diverse.","nullable":true,"example":"Male"},"country":{"title":"Country","type":"string","description":"Country of the user. In ISO 3166-2 format.","nullable":true,"example":"NZ"},"birthCountry":{"title":"BirthCountry","type":"string","description":"Birth Country of the user. In ISO 3166-2 format.","nullable":true,"example":"NZ"},"birthDate":{"title":"BirthDate","type":"string","description":"Birth Date of the user. In ISO 8601 format.","format":"date-time","nullable":true,"example":"1990-01-01"},"ethnicity":{"title":"Ethnicity","type":"string","description":"Ethnicity of the user.","nullable":true,"example":"European"},"industry":{"title":"Industry","type":"string","description":"Industry of the user.","nullable":true,"example":"Environmental Services"},"incomeRange":{"title":"IncomeRange","type":"string","description":"IncomeRange of the user.","nullable":true,"example":"Upto100K"},"education":{"title":"Education","type":"string","description":"Education of the user.","nullable":true,"example":"Tertiary"},"relationship":{"title":"Relationship","type":"string","description":"Relationship of the user. Can be Single, Partner, Spouse, Married.","nullable":true,"example":"Single"},"locale":{"title":"Locale","type":"string","description":"Locale of the user. Can be Rural or Urban","nullable":true,"example":"Urban"},"livingArrangement":{"title":"LivingArrangement","type":"string","description":"Living Arrangement of the user. Can be Renting, HomeOwner, Homeless","nullable":true,"example":"Renting"}},"additionalProperties":false},"DeviceInformationDto":{"type":"object","properties":{"sdkId":{"title":"SDKId","type":"string","description":"Sahha SDK identifier (based on customer integration). E.G. \'android_kotlin\', \'ios_swift\', \'react_native\', \'flutter\', \'capacitor\', \'cordova\'.","example":"ios_swift"},"sdkVersion":{"title":"SDKVersion","type":"string","description":"Sahha SDK version string such as 3.4.1.","example":"3.4.1"},"appId":{"title":"AppId","type":"string","description":"Sahha customer\'s App Bundle Id, e.g. com.sonder.app.","example":"com.sonder.app"},"deviceType":{"title":"DeviceType","type":"string","description":"User device identifier such as \'Apple iPhone\' or \'Samsung Galaxy\'.","example":"iPhone"},"deviceModel":{"title":"DeviceModel","type":"string","description":"User device model identifier such as \'iPhone X\' or \'Galaxy S10\'.","example":"iPhone X"},"system":{"title":"System","type":"string","description":"User device platform such as \'iOS\', \'iPadOS\', \'Android\'.","example":"iOS"},"systemVersion":{"title":"SystemVersion","type":"string","description":"User device platform version such as \'15.1\' on iOS or \'21\' on Android.","example":"15.1"},"timeZone":{"title":"TimeZone","type":"string","description":"Time Zone of the profile holder. +12:00 ","nullable":true,"example":"+12:00"}},"additionalProperties":false},"DeviceLockActivityDto":{"type":"object","properties":{"isLocked":{"title":"IsLocked","type":"boolean","description":"Denotes whether the users device is locked or unlocked at the time specified.","example":"true"},"isScreenOn":{"title":"IsScreenOn","type":"boolean","description":"Denotes whether the users device screen is on at the time specified. This distinguishes between a user waking a phone or fully unlocking it.","example":"false"},"eventTimestamp":{"title":"EventTimeStamp","type":"string","description":"Date and time the event occurred. In ISO 8601 format with a timezone offset.","format":"date-time","example":"2022-01-01T00:00:00+12:00"}},"additionalProperties":false},"GetDemographicResult":{"type":"object","properties":{"occupation":{"title":"Occupation","type":"string","description":"Occupation of the user.","nullable":true,"example":"Project Manager"},"age":{"title":"Age","type":"integer","description":"Age of the user, must be 18 or more and 100 or less.","format":"int32","nullable":true,"example":"35"},"gender":{"title":"Gender","type":"string","description":"Gender of the user. Can be Male, Female or Gender Diverse.","nullable":true,"example":"Male"},"country":{"title":"Country","type":"string","description":"Country of the user. In ISO 3166-2 format.","nullable":true,"example":"NZ"},"birthCountry":{"title":"BirthCountry","type":"string","description":"Birth Country of the user. In ISO 3166-2 format.","nullable":true,"example":"NZ"},"birthDate":{"title":"BirthDate","type":"string","description":"Birth Date of the user. In ISO 8601 format.","nullable":true,"example":"1990-01-01"},"ethnicity":{"title":"Ethnicity","type":"string","description":"Ethnicity of the user.","nullable":true,"example":"European"},"industry":{"title":"Industry","type":"string","description":"Industry of the user.","nullable":true,"example":"Environmental Services"},"incomeRange":{"title":"IncomeRange","type":"string","description":"IncomeRange of the user.","nullable":true,"example":"Upto100K"},"education":{"title":"Education","type":"string","description":"Education of the user.","nullable":true,"example":"Tertiary"},"relationship":{"title":"Relationship","type":"string","description":"Relationship of the user. Can be Single, Partner, Spouse, Married.","nullable":true,"example":"Single"},"locale":{"title":"Locale","type":"string","description":"Locale of the user. Can be Rural or Urban","nullable":true,"example":"Urban"},"livingArrangement":{"title":"LivingArrangement","type":"string","description":"Living Arrangement of the user. Can be Renting, HomeOwner, Homeless","nullable":true,"example":"Renting"}},"additionalProperties":false},"GetDeviceInformationResult":{"type":"object","properties":{"deviceInformationId":{"title":"DeviceInformationId","type":"string","description":"Identifier for the device information.","format":"uuid","nullable":true,"example":"C85330AD-C691-453C-8CB6-353AB75FD611"},"sdkId":{"title":"SDKId","type":"string","description":"Sahha SDK identifier (based on customer integration). E.G. \'android_kotlin\', \'ios_swift\', \'react_native\', \'flutter\', \'capacitor\', \'cordova\'.","example":"ios_swift"},"sdkVersion":{"title":"SDKVersion","type":"string","description":"Sahha SDK version string such as 3.4.1.","example":"3.4.1"},"appId":{"title":"AppId","type":"string","description":"Sahha customer\'s App Bundle Id, e.g. com.sonder.app.","example":"com.sonder.app"},"deviceType":{"title":"DeviceType","type":"string","description":"User device identifier such as \'Apple iPhone\' or \'Samsung Galaxy\'.","example":"iPhone"},"deviceModel":{"title":"DeviceModel","type":"string","description":"User device model identifier such as \'iPhone X\' or \'Galaxy S10\'.","example":"iPhone X"},"system":{"title":"System","type":"string","description":"User device platform such as \'iOS\', \'iPadOS\', \'Android\'.","example":"iOS"},"systemVersion":{"title":"SystemVersion","type":"string","description":"User device platform version such as \'15.1\' on iOS or \'21\' on Android.","example":"15.1"},"timeZone":{"title":"TimeZone","type":"string","description":"Time Zone of the profile holder. +12:00 ","nullable":true,"example":"+12:00"}},"additionalProperties":false},"GetInferencesResult":{"type":"object","properties":{"inferences":{"type":"array","items":{"$ref":"#/components/schemas/InferenceResult"},"nullable":true}},"additionalProperties":false},"HeartLogDto":{"type":"object","properties":{"dataType":{"title":"DataType","type":"string","description":"The type of data being logged. Can be \'HeartRate\', \'RestingHeartRate\', \'HeartRateVariablity\'","example":"HeartRate"},"count":{"title":"Count","type":"number","description":"The value corresponding to the data type.","format":"double","example":"55"},"source":{"title":"Source","type":"string","description":"Source of this data log. e.g. \'Iphone X\'","example":"Iphone X"},"manuallyEntered":{"title":"ManuallyEntered","type":"boolean","description":"Whether the information was manually entered, or captured from a viable source\'","example":"true"},"startDateTime":{"title":"StartDateTime","type":"string","description":"Denotes the start date and time for the heart log period. In ISO 8601 format with a timezone offset.","format":"date-time","example":"2022-01-01T00:00:00+12:00"},"endDateTime":{"title":"EndDateTime","type":"string","description":"Denotes the end date and time for the heart log period. In ISO 8601 format with a timezone offset.","format":"date-time","example":"2022-01-01T00:00:00+12:00"}},"additionalProperties":false},"InferenceResult":{"type":"object","properties":{"createdAt":{"title":"CreatedAt","type":"string","description":"Date and time the analysis occurred. In ISO 8601 format with a timezone offset.","format":"date-time","readOnly":true,"example":"2022-01-01T00:00:00+12:00"},"modelName":{"title":"ModelName","type":"string","description":"The name of the model used to generate the inference result.","readOnly":true,"example":"berg_binary_age"},"predictionState":{"title":"PredictionState","type":"string","description":"Either \'depressed\' or \'not-depressed\' based off the standard PHQ9 score threshold of 10 or more for depression","nullable":true,"readOnly":true,"example":"depressed"},"predictionConfidence":{"title":"PredictionConfidence","type":"number","description":"Represents the probability the model returns for an observation being in the PredictionState/Substate. I.e., if PredictionState = depressed and PredictionSimilarity = 0.8, this means our model has determined the probability of PredictionState = depressed to be 0.8.","format":"double","readOnly":true,"example":"0.84"},"dataSource":{"title":"DataSource","type":"array","items":{"type":"string"},"description":"Holds an array of strings representing the data sources used in the analysis.","readOnly":true,"example":"[\\"sleep\\",\\"screenTime\\"]"},"statistics":{"type":"array","items":{"$ref":"#/components/schemas/InferenceStatisticResult"},"nullable":true,"readOnly":true}},"additionalProperties":false},"InferenceStatisticResult":{"type":"object","properties":{"name":{"type":"string","nullable":true},"value":{"type":"string","nullable":true}},"additionalProperties":false},"MovementLogDto":{"type":"object","properties":{"dataType":{"title":"DataType","type":"string","description":"The type of movement being logged. Can be \'StepCount\', \'FloorsDescended\', \'FloorsAscended\', \'Pace\'","example":"StepCount"},"count":{"title":"Count","type":"number","description":"The amount of times the data type occurred within the time period.","format":"double","example":"55"},"source":{"title":"Source","type":"string","description":"Source of this data log. e.g. \'Iphone X\', \'Walking Buddy\'","example":"Iphone X"},"manuallyEntered":{"title":"ManuallyEntered","type":"boolean","description":"Whether the information was manually entered, or captured from a viable source\'","example":"true"},"startDateTime":{"title":"StartDateTime","type":"string","description":"Denotes the start date and time for the movement log period. In ISO 8601 format with a timezone offset.","format":"date-time","example":"2022-01-01T00:00:00+12:00"},"endDateTime":{"title":"EndDateTime","type":"string","description":"Denotes the end date and time for the movement log period. In ISO 8601 format with a timezone offset.","format":"date-time","example":"2022-01-01T00:00:00+12:00"}},"additionalProperties":false},"ProfileAnalyzeRequest":{"title":"ProfileAnalyzeRequest","type":"object","properties":{"startDateTime":{"title":"StartDateTime","type":"string","description":"The start date for filtering inference results of a user profile. In ISO 8601 format with a timezone offset.","format":"date-time","nullable":true,"example":"2022-01-01T00:00:00+12:00"},"endDateTime":{"title":"EndDateTime","type":"string","description":"The end date for filtering inference results of a user profile. In ISO 8601 format with a timezone offset.","format":"date-time","nullable":true,"example":"2022-01-01T00:00:00+12:00"}},"additionalProperties":false,"description":"Object with filters to narrow the profile analyze data.","nullable":true},"ProfileTokenResponse":{"type":"object","properties":{"profileToken":{"title":"ProfileToken","type":"string","description":"Profile token used in authorization header as \'profile {token}\'","example":"hIw0LuHXHZKMD7bWV0DlGWyTAyHqO8EceLmJ5ez96QrXv3Lhf0qoDqrNDp7jx..."},"expiresIn":{"title":"ExpiresIn","type":"integer","description":"Time in seconds until expiry.","format":"int32","example":"86400"},"tokenType":{"title":"TokenType","type":"string","description":"The type of token being returned, will be \'account\' or \'profile\'","example":"Profile"},"refreshToken":{"title":"RefreshToken","type":"string","description":"Populated with a token value in response to a refresh token request.","nullable":true,"example":"hIw0LuHXHZKMD7bWV0DlGWyTAyHqO8EceLmJ5ez96QrXv3Lhf0qoDqrNDp7jx..."}},"additionalProperties":false},"RefreshOAuthProfileTokenRequest":{"type":"object","properties":{"refreshToken":{"title":"RefreshToken","type":"string","description":"Profile refresh token","example":"hIw0LuHXHZKMD7bWV0DlGWyTAyHqO8EceL"}},"additionalProperties":false},"RegisterProfileRequest":{"type":"object","properties":{"externalId":{"title":"ExternalId","type":"string","description":"ExternalId used to reference the created Profile","example":"6980b34e-14f9-47ef-b6f8-80a18b206a8e"}},"additionalProperties":false},"RetrieveOAuthProfileTokenRequest":{"type":"object","properties":{"externalId":{"type":"string","nullable":true,"example":"C85330AD-C691-453C-8CB6-353AB75FD611"}},"additionalProperties":false},"SleepLogDto":{"type":"object","properties":{"durationInMinutes":{"title":"DurationInMinutes","type":"number","description":"The Length of time in minutes the user was asleep for the given period.","format":"double","example":"60"},"sleepStage":{"title":"SleepStage","type":"string","description":"The stage of sleep the user was in. Can be one of \'in bed\', \'asleep\', \'awake\'.","example":"asleep"},"source":{"title":"Source","type":"string","description":"Source of this data log. e.g. \'Iphone X\', \'Walking Buddy\'","example":"Iphone X"},"manuallyEntered":{"title":"ManuallyEntered","type":"boolean","description":"Whether the information was manually entered, or captured from a viable source\'","example":"true"},"startDateTime":{"title":"StartDateTime","type":"string","description":"Denotes the start date and time for the sleep period. In ISO 8601 format with a timezone offset.","format":"date-time","example":"2022-07-01T10:00:00+09:00"},"endDateTime":{"title":"EndDateTime","type":"string","description":"Denotes the end date and time for the sleep period. In ISO 8601 format with a timezone offset.","format":"date-time","example":"2022-07-01T11:00:00+09:00"}},"additionalProperties":false}},"securitySchemes":{"Bearer":{"type":"apiKey","description":"Sahha uses JWT Bearer authentication, your account will be provided with a Sandbox and Production ClientId and Secret, use these to retrieve a token using the \'Get Account Token\' endpoint below. Subsequent requests to the api must include this token in the header. <br><br><b>Please note: </b> Account tokens (used for creating / managing profiles as an administrator) should be added to the header as follows <b>\'account {token}\'</b> and profile tokens (Used by the SDK on your end users devices) should be <b>\'profile {token}\'</b>. This is contrary to the usual denotation of \'bearer {token}\'.","name":"Authorization","in":"header"}}},"security":[{"Bearer":[]}]}}')}}]);