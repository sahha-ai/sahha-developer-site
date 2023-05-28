---
slug: sahha-data-science-report-002
title: Sahha Data Science Report 002
description: Data science report as of 4th May 2022. New model numbers.
tags: [data science]
---

import SubscribeButton from '@site/src/components/blog/subscribe';

---

*Data science report as of 4th May 2022. New model numbers.*

![Sahha](../../static/img/sahha-logo.svg)

<!--truncate-->

Sahha’s mental health status API utilizes phone sensor data to determine depression risk using a combination of statistical modelling and machine learning.  If you want to build on Sahha [you can join here](http://developer.sahha.ai/).

This data is collected passively using Sahha’s API/SDKs after they are installed into mobile apps.

Once this data is analyzed, it provides an objective assessment of depression that can supplement or replace subjective assessments, questionnaires, and surveys.

We are making accurate, objective assessments of different mental illnesses available to all digital healthcare providers in a simple-to-integrate SDK and at low cost.

This report provides an overview of how the Sahha depression risk API was created.

---

## Report 002
This report is detailing Sahha’s latest binary classification models (as of 3rd May 2022), which will provide a ‘depressed’ or ‘not depressed’ state for a person based on their behavioral data collected through the Sahha SDK.

The data the technology is trained on comes from over 2700 participants in 20 mostly Western countries. These participants feature diverse demographics in age, gender, education, location and income, to name a few.

We chose a highly heterogeneous dataset to ensure our models apply to a diverse group of people and, subsequently, are as commercially viable to the businesses who use them.

Participant data is collected via Sahha research apps on iOS and Android which access native phone sensors and software data as well as through a weekly PHQ9 survey with two additional questions added to it.

> Sahha’s research initiative will be ongoing as we look to increase our participant pool and broaden the mental illnesses the technology can determine.

### What do we look for?
The phone sensor and software data being collected includes phone lock/unlock state as well as sleep time, but we will continue to explore non-personally identifiable sensor and software inputs as they become available.

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

### After data cleaning and feature extraction our participant pool is split as such:

### Depression level: 

- None 73.04% 

- Mild 17.97% 

- Moderate 5.15% 

- Severe 3.84% 

## The Model
Our best performing commercial models are all stacking classifiers on binary classification.

#### We label classes: 

- Depressed = 1 (positive class) 

- Not-Depressed = 0 (negative class) 

What follows are the metrics for our best performing binary classifier to date, each with their advantage depending on the desired balance of specificity and sensitivity.

### Model 1: 
#### Key terms:

- TP = True positives

    - The number of correctly predicted positive samples

- N = True negatives

    - The number of correctly predicted negative samples

- FP = False positives

    - The number of samples incorrectly predicted to be positive

- FN = False negatives

    - The number of samples incorrectly predicted to be negative

#### Accuracy Score: 0.72 (72%)

- Defined as the number of correct predictions (TP + TN) divided by the total number of predictions (TP + TN + FP + FN). This metric can be misleading for imbalanced classification

#### Balanced Accuracy Score: 0.74 (74%)

- Defined as the average of recall obtained on each class. This is a more meaningful statistic for imbalanced classification

#### Depressed class (1) 

- Precision: 0.48

- Recall (or sensitivity): 0.79

- Specificity: 0.69

- F1: 0.60

- Support: 147

#### Not-Depressed class (0) 

- Precision: 0.90

- Recall (or sensitivity): 0.69

- Specificity: 0.78

- F1: 0.78

- Support: 397

### What’s coming?
- Improved binary classification specificity and sensitivity (on going)

- Returning the last 24 hours of sleep as minutes and phone screen time as minutes in analysis API calls.

- Models that factor in device motion and pedometer data

- Multi-class classification models featuring the ability to determine the probability of a sub-state (e.g: mild depression).

- Population baseline model - sending back an immediate prediction of the likelihood of depression using population metrics in combination with user demographic information.

If you have further questions, please reach out to engineering@sahha.ai or join our [Slack Developer Community](https://join.slack.com/t/sahhacommunity/shared_invite/zt-1w0fmfbvk-qUwQ83tJgXyjT9XSxJvKIw).

---

<SubscribeButton />