# Eventist

Eventist is webapp for searching for and saving concerts you would like to attend. It also allows you to track other users what events they are attending. You can search by keyword, by location or by both.

![photo of app](http://i.imgur.com/kek43aX.png)
[Wireframes](https://gomockingbird.com/projects/9l5avea)

## Technologies Used

- Backend
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Eventful Music API

- Frontend
  - Javascript
  - Jquery
  - Ajax
  - HTML
  - SCSS
  - Bootstrap
  - moment.js

## Approach

I began with a general concept. As a music lover, a site to track events and network seemed appealing to me. I began to research third party APIs I could use for finding events. Eventful seemed like best option. I started by just making curl requests to them through Postman to get familiar with their API.

I then began to work on wireframes and user stories. Once I had an idea of what I wanted to build, I started building out the backend. I build the schemas for each model and then built controller actions, the whole time testing that thiings operated as I expected through curl requests. During this time I also built my request action to the Eventful API.

Once I felt the backend was in a solid place I began to work on the frontend. Originally my intent was to build the frontend using ember, but due to the timeframe I was working in, I made the switch to vanilla javascript. First order of business was authentication, then requests to the Eventful API, then users adding/deleting events, and finally adding and removing followees. During this time there were minor adjustments I had to make to the backend, but for the most part, there weren't too many changes made.

## User stories

- As a user I'd like to be able to search for concerts in my area and for concerts by particular artists
- As a user I'd like to be able to see what other users use the site, track them, and see what concerts their attending
- As a user I'd like to be able to update my google calender with the events I choose to attend.
- As a user I'd like to be able to stream the music of the artists I am searching for while I browse the site.

## Unsolved Problems

- The following/unfollowing buttons are a little glitchy and the way they are rendered needs to be reworked.
- When a user switches from one tab another that has no content, the buttom snaps up
- Styling could be improved

## Additional things I'd like to implement

- Streaming artists' music through a third party api (youtube, soundcloud, spotify)
- Incorpoate some sort of calendar system.
- A way for users to contact eachother.
- A way for users to customize profiles more (photos/bios/fav bands)
