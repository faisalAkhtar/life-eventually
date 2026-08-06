# Life, Eventually.

> *Some dreams have become memories. Some are still waiting for the right day.*

A few years ago, I began keeping a list of experiences I wanted to have before I grew old enough to call them "things I want to do before I die"

It started as a simple bucketlist.

Then I realized that crossing something off the list was never the interesting part. The story behind it was.

I have been keeping this bucketlist in various forms, first in a diary, then in an excel sheet.

This website now is my attempt to preserve those stories electronically.

Some adventures are accompanied by photographs of me standing where I once dreamed of standing. Others still borrow photographs from the internet while they patiently wait their turn. Every item carries a small one-liner because I firmly believe life is remembered in moments, not paragraphs.

The project is intentionally simple.

There is no backend.

There is no database.

There is no admin panel.

Everything lives inside a single JSON file. The website is merely a viewer for that collection. I wanted something I could revisit years from now without worrying about dead services, broken APIs, or maintaining infrastructure.

---

## Features

* A clean, responsive one-page experience
* Local JSON-powered data
* Search (to-do, which is ironic I know)
* Category filtering
* Completion tracking
* Progress statistics
* Responsive layout for desktop and mobile
* Built with long-term maintainability in mind

---

## Tech Stack

* React
* Vite
* Plain CSS
* Local JSON as the data source

No UI frameworks. No CSS frameworks. No backend. No unnecessary dependencies.

The goal wasn't to build the most modern React application.

The goal was to build something that still feels pleasant to open, and easy to maintain, ten years from now.

---

## Project Structure

```text
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/
├── data/
│   └── bucket.json
├── hooks/
├── styles/
├── utils/
├── App.jsx
└── main.jsx
```

---

## Roadmap

The current version focuses on my bucket list.

Future iterations may slowly turn this into a broader collection of life's memories.

I plan on including:

* Individual shareable pages for every adventure
* Places I want to visit, places I've visited
* My booklist, books I have read and books in my personal library
* Timeline view
* Personal notes and more photos for completed experiences

The architecture has been designed so new collections can be added without changing the overall layout.

---

## Why "Life, Eventually"?

Because life isn't measured by the number of items we complete.

It's measured by the stories we collect while trying.

This project is simply my way of collecting those stories.

---

If you happen to stumble upon this repository, I hope it inspires you to start your own list.

You don't have to finish it.

Just start writing it.

**P.S. Browny points if you get where the quote on the website is from ;)**
