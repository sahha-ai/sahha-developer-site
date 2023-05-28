---
slug: sahha-data-analysis
title: Sahha Data Analysis
description: Definitions and understanding the data outputs from the Sahha API
tags: [data science, digital health]
---

import SubscribeButton from '@site/src/components/blog/subscribe';

---

*Definitions and understanding the data outputs from the Sahha API*

![Sahha](../../static/img/sahha-logo.svg)

<!--truncate-->

### Terms & Definitions
- State: The condition assessed - ie: depression

- Sub-state: The severity of the condition assessed ie: ‘mild’.

- Probability: the probability of each state

- Data source: The data types that have been used to predict the state ie: sleep time, age

- Specificity: The ability of a model to correctly identify people without the condition - the probability of a negative assessment (AKA true negative rate)

- Sensitivity: The ability of a model to correctly identify people with the condition - the probability of a positive assessment (AKA true positive rate)

- Score: The predicted instrument score ie: PHQ9 Score of 16

- Sub-state probabilities: the probabilities for each sub state ie: 0.9 [high probability of no depression], 0.3 [low probability of mild depression]...

- Score confidence interval: the standard deviation ie: 13, 19 2 standard deviations from a score of 16

- Score error: the score error margin ie: +-3 from score of 16

### Current Status:
#### Binary Classification:

Currently this model offers:

- sensitivity (or true positive rate, the ability to detect the depressed) of 0.75 or 75%

- specificity (or true negative rate, the ability to detect the non-depressed) of 0.59 or 59%

In order to create a confident analysis 4-7 days of data is required for each profile’s first analysis.

**Multi-class Classification:** Currently unavailable

---

## Types of Analysis Sahha provides
Currently Sahha provides two levels of analysis, a ‘simple’ version and a more data rich version. More detailed and immediately available analysis types will be available soon.

### Binary Classification
A “simple” analysis providing a binary output of either `depressed` or `not depressed` as well as a probability score indicating the likelihood the analysis is correct.

#### Binary Classification output:

```
{
	probability: 0.75
	state: "depressed"
	data_souce: ["screentime", "sleeptime", "age"]
}
```

#### Binary classification use cases:

- Provide a simple indication of mental state of a user

- Use to enrich data for better feature delivery

---

### Multi-class Classification (Coming soon)
A more feature rich classification output providing more detail and sub-state analysis.

#### Multi class classification output:

```
{
	probability: 0.8,
	state: "depressed",
	substate: "moderate",
	substate_probabilities: [0.9, 0.1, 0, 0],
	score: 16,
	score_confidence_interval: (13, 19),
	score_error: 3
	data_souce: ["screentime", "sleeptime", "age"]
}
```

#### Multi-class classification use cases:

- Provide a detailed indication of mental state of a user

- Use to enrich data for better feature delivery

- Use to deliver specific interventions with more confidence

---

<SubscribeButton />