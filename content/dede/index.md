---
title: Dede
description: AI native app for helping young peeps navigating the chaotic traffics of Vietnam
type: work
cover: images/hero.png
year: "2025"
timeline: September 2025
team:
  - Product Owner
  - 3 UI Designers
  - 1 UX Designer
  - 1 Visual Artist
role: UX Designer
skills:
  - Design Research
  - User Interview
  - Wireframing
toc: "true"
weight: "1"
---
![](images/hero.png)
{{< project-info >}}


## Overview
In September 2025, I had privilege to join one of the most famous competition in Product Design field of Vietnam: Lollypop Designathon. Designathon is a unique event where teams match against each other in a 24hr race to research and deliver their solution matched with the given subject of the game.
![Lollypop Designathon 2025 poster](https://lollypop.design/wp-content/uploads/2025/10/Lollypop-Designathon-Vietnam-2025-San-choi-thiet-ke-UIUX.webp)



## Problem Space
The daily traffics in big cities are often chaotic and unpredictable at times. There is virtually no product that can help people to know if they accidentally violate traffic regulations on the road. And for sure none wants to read those long boring news about updated traffic rules either.

This is also becoming a heavy burden on the government too. The government imposed stricter laws, hoping them will curb the traffic violation cases, but in turns created reinforcement loop for both of the parties.
![](images/problem_space.png)



## Tackling the Problem
This problem provided a huge opportunity to learn more about the huge gap between Vietnam's traffic regulations and its actual application to real life. And that's what we wanted to solve for.
![](images/problem_statement.png)



## User Research

My team surveyed over 50 respondents and conducted 5 interviews with high school and university students in Hanoi. We focused on how they currently learn about traffic regulations and what happens when they unknowingly break them. And these are the key insights my team and I synthesized:

{{< alert type="error" >}} Their knowledge about traffic laws is outdated or can't keep up with new ones {{< /alert >}}
{{< alert type="error" >}} Government teaching methods failed to engage students {{< /alert >}}
{{< alert type="error" >}} They only learn new laws through word of mouth from parents or only through social media posts  {{< /alert >}}

The issue is clear: young people ignored learning updated traffic regulations when government announcements are boring and failed to grab attention.

![](images/desk_research.png)
![](images/user_research.png)


## Turn insights into opportunities

Guided by user research and online survey, we turned these three key pain points: outdated knowledge, uninteresting method when teaching updated regulations and only know new laws through words of mouth--- into corresponding opportunity goals for our designs.


![An image showing three charts of the survey](images/opportunities.png)

## Feature Ownership
To achieve our team's goal of creating comprehensible and engaging platform for teaching and spreading traffic regulations awareness, we divided tasks for our focused features set. I took ownership and **co-led the design research process of our app's features**, prioritized **informative** and **simplicity** to help users deal with **complex traffic laws**.



## Focusing on a focal goal
My UXR found that when participants join the road, they quickly found difficulty so due to **obscured** and **complex** existing traffic system which **very hard** to notice of within a short time, this leads to **accidental** traffic violations. My approach was to how I can design features that **non-invasive** and **recognisable** about the problems and they must also be **engaging** and **humorous** for generation Z whom is our target audience.
![An image showing three papers detailing about product specifications](images/drafts.png)



## Ideation
After we sketched our preliminary lo-fis, we headed to create mid-fidelity wireframes to explore our options, build our vision of Dede.
### Tracking Iteration
Since tracking and reporting mistakes when driving or riding on the road is our most prominent feature, we dived in it first to quickly explore potential key functions which could be highlighted. These included a tracking map for the user's road journey, detailed reports based on the severity of the mistakes were made, as well as some short light-hearted punish sentence. 

While the initial screen conveyed most information, we ultimately decided to hide the detailed report and replace it with quick overview of numbers of mistakes. The reason is:

{{< alert type="warning" >}} Too much unnecessary information on screen {{< /alert >}}
{{< alert type="warning" >}} The severity of the problems weren't explained clearly to users {{< /alert >}}
{{< alert type="warning" >}} Users might confuse digital currency points in app as real money {{< /alert >}}

![](images/tracking_iteration.png)


### Home and Challenge iteration
We created low-fis prototypes for home and challenge screen next to help us refine how much information to show upfront. After a lengthy discussion, we ultimately keep them as they are and only added minor UI since we didn't have enough time to explore more screen options when the deadline hour is catching us.

![](images/home_and_challenge.png)

## Assumptions & Constraints
Given the designathon timeline, we focused on designing the mobile experience and assumed certain technical capabilities would exist. In a real-world scenario, these would require significant research and validation:
##### Hardware Dependency
Our solution assumed a specialized camera exists and is affordable/accessible to our target users. We did not validate market readiness and manufacturing feasibility.
##### Camera Accuracy
We assumed AI could reliably analyze dash cam footage to identify traffic violations. The actual accuracy rate, edge cases, and training data requirements were outside our scope.
##### Privacy and Data Security
We did not design for data storage, user consent flows, or privacy policies. Privacy is a huge concern for real users when they interact with hardware that are capable of recording video footage, which would be critical for real implementation given the sensitive nature of location and video data.
##### Safety Concerns
Phone vibrations while riding may be distracting. Real-world testing would be needed to determine how much frequency, intensity and alert method is needed to alert riders without endangering them.

## Design Solution
Before heading out, the users only have to wear a specialized motorcycle helmet that's equipped a **small camera**. The camera is configured to **automatically record and send data** with wi-fi signals to Dede **mobile app**. When the user finished their journey and their phone is connected to Internet, Dede **push** those data to AI so the AI can **analyze** the user's journey and **produce** the analysis after an amount of time.
![](images/dash-cam-ai.png)

For the alarm part, the app will use phone's **readilly available GPS** sensors. The app will have the offline data of the current road the user riding on, send **vibrating** signals to notify the user if they **accidentally violated** the traffic regulations like **stepped over** the white line before the traffic lights or **exceeded** the speed limit within a threshold.
![](images/gps-alarm.png)
![](images/gps-alarm-success.png)


## Final Design
With the wireframes and low-fidelity mockups established, we transitioned to next phase to create high-fidelity mocks.

{{< feature-showcase 
  image="images/dede-tracking-journey.webp" 
  title="Analyze and deduce the problems" 
  description="Intelligently point out where you did wrong on the road and how to prevent them"
  alt="Tracking journey feature demonstration"
  >}}
  
  {{< feature-showcase 
  image="images/dede-personalised-news.webp" 
  title="Traffic news curated only for you" 
  description="Selection news personalized for you to read and take note"
  alt="News feature demonstration"
>}}

{{< feature-showcase 
  image="images/dede-safety-challenges.webp" 
  title="Daily challenge" 
  description="Gamify your journey and gets rewarded for your effort"
  alt="Safety challenges demonstration"
>}}
## Outcome
We had the once-in-a-lifetime opportunity to share the work we done with other designers in Ho Chi Minh City. Sadly we didn't gain any honorary reward at all but the senior designers gave us a lot of valuable feedbacks. I had the chance to demonstrate our work on the stage with hundreds of people watching our work unfold.

![Image showing the team giving their presentation](images/designathon-team-presentation.jpg)
![](images/designathon-me-giving-presentation.webp)

## What I learned
##### Early validation matters - especially for hardware dependencies
Can our users afford it? How should we integrate our camera hardware into their daily life? Who will manufacture it? How should we market it and present it not only for our users but also for those who want to invest in it? For something that is as critical as hardware, early validation like cost interview, value preposition and market research should come before interface design - not after. 
##### Design for failures, not just when it works
We designed screens showing "AI analysis results" without taking into consideration what happens when AI fails - misidentified a violation, extreme weather, poor lightning conditions like roads without lights at night. Real products need designed states for uncertainty, not just success cases.
##### Privacy as priority, not an afterthought
Recording users' driving journeys with cameras felt like an obvious solution to our problem. Only after we presented our solution did we realize that the ultimate choice when using product lies in our users. Optional data collection, data deletion option, and consent flows are all equally important for the whole customer's journey. 