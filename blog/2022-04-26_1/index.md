---
slug: data-science-report-001
title: Sahha Data Science Report 001
description: Sahha's Alpha Data Science Report 001 - detailing Sahha's first binary classification models
tags: [data science, digital health]
---

import SubscribeButton from '@site/src/components/blog/subscribe';

---

*Sahha's Alpha Data Science Report 001 - detailing Sahha's first binary classification models*

![Sahha](../../static/img/sahha-logo.svg)

<!--truncate-->

Sahha’s mental health status API utilizes phone sensor data to determine depression risk using a combination of statistical modelling and machine learning.

This data is collected passively using Sahha’s API/SDKs after they are installed into mobile apps.

Once this data is analyzed, it provides an objective assessment of depression that can supplement or replace subjective assessments, questionnaires, and surveys.

We are making accurate, objective assessments of different mental illnesses available to all digital healthcare providers in a simple-to-integrate SDK at low cost.

This report provides an overview of how the Sahha depression risk API was created.

---

## Report
This report is detailing Sahha’s first binary classification models, which will provide a ‘depressed’ or ‘not depressed’ state for a person based on their behavioral data collected through the Sahha SDK.

The data on which the model is trained comes from over 2700 participants in 20, mostly Western, countries. These participants feature diverse demographics in age, gender, education, location, and income, to name a few.

We chose a highly heterogeneous dataset to ensure our models apply to a diverse group of people and, subsequently, are as commercially viable to the businesses who use them.

Participant data is collected via Sahha research apps on iOS and Android, which access native phone sensors and software data, as well as through a weekly PHQ9 survey with two additional questions.

Participant recruitment began in October 2021 and over 12,000 weekly PHQ9 results have been recorded to date.

> Sahha’s research initiative will be ongoing as we look to increase our participant pool and broaden the mental illnesses the technology can determine.

### What do we look for?
The phone sensor and software data being collected includes phone lock/unlock state as well as sleep time, and we will continue to explore non-personally identifiable sensor and software inputs as they become available.

#### In total we compute 67 features: 

- 30 screen  

- 28 sleep  

- 7 sleep-screen interaction  

- 2 demographic  

#### The types of features computed for each phenotype (screen/sleep) are as follows: 

- Averages of count data, such as average minutes slept 

- Standard deviations of count data 

- Similarity/regularity  

- Entropy  

- Time of day features, such as proportion of sleep spent at night 

- Null count 

#### After data cleaning and feature extraction our participant pool is split as such:

#### Depression level: 

- None 73.04% 

- Mild 17.97% 

- Moderate 5.15% 

- Severe 3.84% 

## The Model
Our best performing commercial models are all stacking classifiers on binary classification.

#### We label classes: 

- Depressed = 1 (positive class) 

- Not-Depressed = 0 (negative class) 

What follows are the metrics for our best performing binary classifiers to date, each with their advantage depending on the desired balance of specificity and sensitivity.

### Model 1: 
#### Depressed class (1) 

- Precision: 0.39 

- Recall (or sensitivity): 0.75 

- Specificity: 0.59 

- F1: 0.52 

- Support: 110 

#### Not-Depressed class (0) 

- Precision: 0.87 

- Recall: 0.59 

- Specificity: 0.75 

- F1: 0.70 

- Support: 309

### Model 2: 
#### Depressed class (1) 

- Precision: 0.41 

- Recall (or sensitivity): 0.67 

- Specificity: 0.66 

- F1: 0.51 

- Support: 113 

#### Not-Depressed class (0) 

- Precision: 0.85 

- Recall: 0.66 

- Specificity (or sensitivity): 0.67 

- F1: 0.74 

- Support: 319

> The Sahha Data Science team favors Model 2 due to its balance in specificity and sensitivity, where accuracy isn’t gained in one class at the cost of another class.

### What’s coming?
- Improved binary classification specificity and sensitivity

- Models that factor device motion and pedometer data

- Multi-class classification models featuring the ability to determine the probability of a sub-state (e.g. mild depression)

- Population baseline model - sending back an immediate prediction of the likelihood of depression using population metrics in combination with user demographic information

If you have further questions, please reach out to engineering@sahha.ai or join our [Slack Developer Community](https://join.slack.com/t/sahhacommunity/shared_invite/zt-1w0fmfbvk-qUwQ83tJgXyjT9XSxJvKIw).

---

<SubscribeButton />