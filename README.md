# videoFolio
Generates video based resume of given github/linked-in username


## Inspiration
A lot of people have lost their jobs in the pandemic. With the cut-throat competiton to get a new job, we need to stand out in recruiters' eye. We build videoFolio to overcome this problem in a very creative way. VideoFolio makes it easy to generate a video resume from your linkedin and github profiles.

## What it does
It essentially generates your digital video resume. For that you only have to fed in your github username and linkedin profile link. VideoFolio will do all the heavy lifting for you and output a nice looking personallized professional video resume, all with your data. 

## How we built it
We have basically two systems. One data service takes the input from the user and gets the data from linkedin and github. Other service is render services, which takes the data passed from data-service and renders your personlized video resume.

## Challenges we ran into
Getting the data and rendering it in considerable time. We tried a lot of options, and went for the best ones. We used multiple services to support the architecture of the whole software. Getting the data from linkedin was tough due to the rate boundings, same was the case with github api. We learned to overcome those and we were able to reduce the time.

Rendering the video was also the second tough part. We tried a lot of different libraries and finally settled for node-canvas. Learning how to put text on the template videos was the very fun part of learning.

Overall, we learned about APIs for linkedin and github, rendering videos, developing and calling multiple services running on different platfroms using REST apis.

## Accomplishments that we're proud of
We are proud that we were able to complete this project in such limited time. We are glad that we made a project that will help all the fellow hackers and developer out there in the world to put their best work in front of the world.

## What we learned
Learned how to use apis, and get profile data from github and linkedin accounts.
Also developed microservices on flask and node to support the architecture, and calling services using REST endpoints.

## What's next for videoFolio
We are planning to scale this service to the large level, so that it can serve more users.
