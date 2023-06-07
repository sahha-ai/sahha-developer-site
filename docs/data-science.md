---
sidebar_position: 8
slug: data-science
---

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Data Science

Understand the data science behind Sahha.

---

:::tip Use the SDK
Since the Sahha SDK will automatically collect input information, we advise you to use it to collect device data as opposed to collecting it yourself to send to the API.

[How to use the SDK](./category/use-the-sdk)

:::

---

## Prediction State

What does it mean?

A predicted state of the user as determined by one of the Sahha’s models such as that for Depression, Stress, Anxiety, and Energy. 

- Each model is trained on our proprietary data to calculate a predicted score of the mental state of the user.
- Our models are trained on a validated clinical rating scale but instead of needing the user to fill out a questionnaire the models predict the score based on the user’s digital phenotype.
- Sahha produces this digital phenotype by producing a holistic picture of the user’s movement, sleep and phone usage.

Currently, our models produce a binary state of the user as follows:

- `predictionState : depressed`
- `predictionState : not-depressed`

:::caution Customize your message

The messaging you choose is optional however **we recommend not displaying the labels (`depressed` or `not-depressed`) to users as they can be easily be misinterpreted.  Please refer to the best practises above when it comes to messaging.**

:::

---

## Prediction Similarity

What does it mean?

Prediction similarity is **a measure of how alike your behaviour is to those with symptoms of people with mood disorders as collected through device sensors and data.** 

A prediction similarity shows you how closely a person’s digital behaviour is like to those with mood disorders. Our models calculate a percentage score based on how their movement, sleep, phone usage as well as demographic data such as age or gender. **The percentage score is the confidence in that prediction.**

The `predictionSimilarity` can be used as a score, to show how alike a persons behaviours are to those with depressed symptoms according to our models on a daily basis. It factors in the previous 7 days worth of data (if available) to create the inference. **Why the previous 7 days?** This is because the model was trained on survey data which was recorded over 7 day periods. This provides a large enough window of data for the model to perform its best.

---

## Messaging and Interpretation

One way to interpret the percentage score for messaging, recommendations or other UX changes is to bracket it into ranges. For example: `depressed` label with: 

- `50% - 60%` Behaviours are starting to show alignment: *”Your behaviours are borderline similar to those with negative mental-wellbeing symptoms”*
- `61% - 70%` Starting to show confidence in the behaviours: *”Your behaviours are showing higher than usual similarities to those with negative mental-wellbeing symptoms”*
- `71% - 80%` High confidence in the behaviours: *”Your behaviours show a high correlation to those with negative wellbeing symptoms”*
- `>80%` Very-high confidence in the behaviours: *”Your behaviours show a very high correlation to those with negative mental-wellbeing symptoms”*

[More use-cases for Sahha analysis can be found here](https://www.notion.so/Use-cases-Case-Studies-8b6b89efb8f645cfa22fcc5b9c70f6e7?pvs=21)

---

## Best Practises

- Make sure users provide as much data as possible through sensor/data permissions. The model can produce a better percentage-score when more data is available for it to interpret.
- **DO NOT claim Sahha outputs as a diagnosis or diagnostic tool and avoid labelling people as the prediction state output shows. Please use best practises when interpreting data directly users. It is important to note, Sahha is not a diagnostic tool and does not provide a diagnosis.**  **Responsible use of Sahha is a requirement of our API Agreement.**
- Inform your users of why you are asking for permission to capture sensor data.

---

## Depression Predictor

**Where can I find it?** The depressed predictor is documented [here](./use-the-sdk/analyzation.md) and available through REST or via our mobile SDK.

The depression prediction similarity provides a confidence score as a percentage in the similarity between user behaviours (captured via phone sensor and other device data) and how those behaviours are similar to those who show symptoms of depression. 

While this product does not provide a diagnosis, it can provide an indication, a prognosis impression or insight about a persons potential mental health state as it related to symptoms of depression. 

**Output**: `‘depressed’` or `‘not-depressed’` as a string and `predictionSimilarity` as a number that can be converted to a percentage for example: `0.73` would become `73%`.

:::caution Be Careful with Messaging

The messaging you choose is optional however **we recommend not displaying the labels (`depressed` or `not-depressed`) to users as they can be easily be misinterpreted. Please refer to the [best practises](#best-practises) above when it comes to messaging.**

:::

---

### Model Training: PHQ-9

**The depression model has been trained on PHQ-9** (Patient Health Questionnaire-9) **rating scale using device sensor data.** The PHQ-9 is a screening tool used to assess the severity of depression symptoms in individuals. 

While the PHQ-9 questions are not necessarily interventions themselves, they can provide insight into potential interventions that may be helpful for individuals experiencing depression.

**Here are some interpretations of each question on the PHQ-9 as an intervention:**

1. **Little interest or pleasure in doing things:** This question suggests that the individual may benefit from engaging in enjoyable activities to increase their mood and sense of fulfilment.
2. **Feeling down, depressed, or hopeless:** This question suggests that the individual may benefit from talking with a mental health professional to explore the root of their feelings and develop coping strategies.
3. **Trouble falling or staying asleep, or sleeping too much:** This question suggests that the individual may benefit from developing healthy sleep habits, such as setting a consistent sleep schedule, practicing relaxation techniques before bed, and avoiding caffeine or alcohol close to bedtime.
4. **Feeling tired or having little energy:** This question suggests that the individual may benefit from engaging in regular exercise, which can increase energy levels and improve mood.
5. **Poor appetite or overeating:** This question suggests that the individual may benefit from developing healthy eating habits, such as eating a balanced diet and avoiding excessive amounts of sugar or processed foods.
6. **Feeling bad about yourself - or that you are a failure or have let yourself or your family down:** This question suggests that the individual may benefit from developing a more compassionate and realistic view of themselves and their accomplishments, as well as addressing any underlying feelings of shame or guilt.
7. **Trouble concentrating on things, such as reading the newspaper or watching television:** This question suggests that the individual may benefit from developing strategies to improve their focus and attention, such as practicing mindfulness or seeking treatment for any underlying attentional disorders.
8. **Moving or speaking so slowly that other people could have noticed?** **Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual:** This question suggests that the individual may benefit from engaging in physical activity or relaxation techniques to improve their sense of calm and reduce feelings of restlessness.
9. **Thoughts that you would be better off dead or of hurting yourself in some way:** This question suggests that the individual may benefit from seeking immediate help from a mental health professional or crisis intervention service. It is important to take these thoughts seriously and get help as soon as possible.

:::tip Depressed or Not Depressed?

Our current depression model is a binary output meaning is provides only a `‘depressed’` or `‘not-depressed’` label. So profiles that are labelled depressed could be experiencing any of the symptoms addressed in the PHQ-9 and benefit from interpretations of possible interventions.

:::

**Here are some examples of interventions that could be beneficial to a profile labelled as `‘depressed’`:**
    
- Engaging in fulfilling and enjoyable activities
- Talking to a mental health professional about their feelings and developing coping strategies
- Setting a sleep schedule
- Practicing relaxation techniques throughout the day and before bed
- Avoiding caffeine or alcohol close to bedtime
- Engaging in regular exercise
- Developing healthy eating habits such as eating a balanced diet, accounting for excessive sugar or processed foods
- Practicing self-care, self-love, developing a more realistic view of themselves, and addressing underlying feelings of shame and guilt
- Developing strategies to improve focus, attention and practicing mindfulness techniques
- Seeking treatment for any underlying attentional disorders
- Seeking immediate help from mental health professionals or crisis intervention services

---

## Stress Predictor

**Where can I find it?** The stress predictor is currently available to select customers only. Please enquire to register interest: sales@sahha.ai.

The stress prediction similarity provides a confidence score as a percentage in the similarity between user behaviours (captured via phone sensor and other device data) and how those behaviours are similar to those who show symptoms of chronic stress.

While this product does not provide a diagnosis it can provide an indication, a prognosis impression or insight about a persons potential mental health state as it related to symptoms of stress.

**Output**: `‘stressed’` or `‘not-stressed’` as a string and `predictionSimilarity` as a number that can be converted to a percentage for example: `0.73` would become `73%`.

:::caution Be Careful with Messaging

The messaging you choose is optional however **we recommend not displaying the labels (**`stressed` **or** `not-stressed`**) to users as they can be easily be misinterpreted. Please refer to the [best practises](#best-practises) above when it comes to messaging.**

:::

---

### Stress Similarity

- The Stress Similarity Score is updated on a daily basis, using data collected over the last 7 days. It does indeed have the potential to change daily, based on the shifts in movement activity. An essential caveat to note here is that we require at least four days' worth of steps data within the previous seven days for our model to operate effectively. This ensures the reliability and accuracy of the scores generated.
- Stress Similarity Score essentially represents how your daily habits (derived from sensor data) align with those of individuals who have been identified as stressed. A high score means your habits are a lot like theirs. A low score means your habits are pretty different. This doesn't say for sure if you're stressed, but gives you an idea if your habits are like those who are.

---

### Model Training: DASS-21

The stress model has been trained on the DASS21 (Depression, Anxiety, Stress, Scale) clinical questionnaire using device sensor data. The DASS21 is a screening tool to assess for varying levels of depression, anxiety and stress.

The subset of the scale involves a set of questions specifically to assess severity of stress which has been used to train this model.

While the DASS21 questions are not necessarily interventions themselves, they can provide insight into potential interventions that may be helpful for individuals experiencing stress.

---

## Health Statistics

**Where can I find it?**  Simple health statistics are returned alongside the mental-state analysis results under the `‘statistics’` key.

### Average Stats

- `PredictionStateAverage`: The average of a user's predicted state (such as `depressed`) over all the days their data was recorded. The score ranges from 0 to 1, with a value of 0 indicating no state and a value of 1 indicating a constant state.
- `PredictionStateMovingAverage7`: The average of a user's predicted state (such as `depressed`) over the last 7 days. The score ranges from 0 to 1, with a value of 0 indicating no state and a value of 1 indicating constant state.
- `PredictionStateSimilarityAverage`: The average prediction similarity score for the user across all days their data was recorded. The prediction similarity score ranges from 0.5 to 1 and reflects the level of certainty the model has in its prediction. A score of 0.5 indicates complete uncertainty, while a score of 1 indicates complete confidence.
- `PredictionStateSimilarityMovingAverage7`: The average prediction similarity score for the user over the last 7 days. The prediction similarity score ranges from 0.5 to 1 and reflects the level of certainty the model has in its prediction. A score of 0.5 indicates complete uncertainty, while a score of 1 indicates complete confidence.
- `SleepTotalDay1` - `SleepTotalDay7`: The total number of minutes slept on each day of the week.
- `DailyAvgSleepHrs`: The average number of hours the user sleeps per day.
- `SleepPercentile`: The user's average daily sleep time compared to all other users in the database, expressed as a percentile.
- `DailyAvgScreentime`: The average number of hours spent on screen per day.
- `ScreentimePercentile`: The percentile of the user's screen time compared to all other users in the database

### Change From Baseline Stats

Note: these stats are in the private beta, please enquire to register interest: sales@sahha.ai

- `ShiftFromBaseline` : significant deviation from baseline behaviour over a 2 day moving window average (for sleep, movement, phone usage)
- `WakeTime` : typical wake time for the user
- `BedTime` : typical sleep time for the user
- `Chronotype` : early-riser, night-owl, or unclassified
- `HighAttentionTime` : based on circadian fluctuations, typical time of high attention for the user based on their chronotype and wake time (typically earlier in the day)
- `LowAttentionTime` : based on circadian fluctuations, typical time of high attention for the user based on their chronotype and wake time (typically post-afternoon)

---

## Coming Soon

These features are in active development:

- Anxiety predictor
- Energy / Fatigue predictor
- Reinforcement API