// src/data/events.js

import scienceFair from "../assets/event02.jpg";
import parentMeeting from "../assets/event01.jpg";
import sportsDay from "../assets/event03.jpg";

const events = [
  {
    title: "Annual Science Fair",
    date: "October 15th",
    description:
      "Join us for our annual science fair showcasing student projects.",
    image: scienceFair,
  },
  {
    title: "Parent-Teacher Conferences",
    date: "November 1st",
    description:
      "Don't miss this opportunity to discuss your child's progress.",
    image: parentMeeting,
  },
  {
    title: "Sports Day",
    date: "December 10th",
    description: "A day full of fun and competition awaits you!",
    image: sportsDay,
  },
];

export default events;
