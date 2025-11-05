# Algernon Cornelius

Algernon Cornelius is a hip hop producer and musician from Berlin. For my final
project at
[SPICED Academy](https://www.spiced.academy/program/full-stack-web-development/),
where I studied from July - August 2019, I decided to create a prototype
single-page web application using React for Algernon Cornelius to promote his
music, music videos and tourdates.

It features a browser-based music musical instrument, inspired by the kind of
[samplers](<https://en.wikipedia.org/wiki/Sampler_(musical_instrument)>) that
Algernon Cornelius uses to make his music. This feature was made using the
tone.js API. The app also allows you to play his music in the background and
play samples over them.

---

## Installation & Running

### Prerequisites

- Node.js 18.0.0 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/loopwrk/bootcamp-final-project-2019.git
cd bootcamp-final-project-2019
```

2. Install dependencies:

```bash
npm install
```

3. Build the application:

```bash
npm run build
```

### Running the Application

**Production mode:**

```bash
NODE_ENV=production npm start
```

**Development mode** (with hot reloading):

```bash
npm start
```

The application will be available at `http://localhost:8080`

### Notes

- The production build serves static assets and is optimized for performance
- Development mode uses webpack-dev-middleware for automatic reloading
- Make sure port 8080 is available on your machine

## Preview

![Sampler preview](https://user-images.githubusercontent.com/45455994/66203671-371cb300-e6a9-11e9-83d8-d9e6ce2091e0.gif)

-- Users can play the sampler with their mouse our keyboard.

![Metronome and effects preview](https://user-images.githubusercontent.com/45455994/66203742-63383400-e6a9-11e9-815e-bd4d8d071a12.gif)

-- Setting a metronome and applying effects live.

![Album carousel preview](https://user-images.githubusercontent.com/45455994/66203487-c4abd300-e6a8-11e9-814d-cec7a78ddbce.gif)

-- Scrolling through the albums carousel.

## Technology used

HTML / JSX, CSS, JavaScript, Node.js, React, ReactDOM, React Hooks, Webpack,
Tone.js API

## Features

- Users can make their own beats, using an interactive sampler made using a
  combination of the tone.js API and custom JavaScript code. Users can trigger a
  music sample by clicking on one of 16 pads, or by using their keyboard as a
  controller. They can play a combination of these samples to make music, either
  freestyle, or by using a metronome to help them to keep time. There are also a
  number of effects that can be applied, either individually, or in combination,
  to change the samples and create completely new sounds.

- Albums can selected and played using a custom-made carousel which rotates in
  either the left or right direction.

- By clicking on a single button, a modal opens or closes, which on open,
  revealing a list of tour dates.

- The layout was created using CSS grid; as a workaround to bypass the inability
  to set borders in the grid, a single vector image was set to repeat on every
  grid item.

## Features planned for future implementation

- Mobile responsiveness, including the ability for users to tap the sampler pads
  on mobile devices.

- Implement a backend database to allow the artist to add tourdates using forms
  which can only be visible upon login.

- Use socket.io to allow to users to play music at the same time.

- Allow users to upload and delete their own samples.

- Allow users to save the tracks that they have created.
