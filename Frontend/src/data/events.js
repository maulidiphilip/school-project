import scienceFair from "../assets/event02.jpg";
import parentMeeting from "../assets/event01.jpg";
import sportsDay from "../assets/event03.jpg";

const events = [
  {
    id: "science-fair",
    title: "Annual Science Fair",
    date: "October 15th",
    description:
      "Join us for our annual science fair showcasing student projects.",
    details:
      "The Science Fair is an opportunity for students to present their research and projects. Expect fun experiments, interactive demonstrations, and expert talks.",
    image: scienceFair,
  },
  {
    id: "parent-meeting",
    title: "Parent-Teacher Conferences",
    date: "November 1st",
    description:
      "Don't miss this opportunity to discuss your child's progress.",
    details:
      "This conference allows parents to meet teachers and discuss student performance. Appointments can be scheduled in advance.",
    image: parentMeeting,
  },
  {
    id: "sports-day",
    title: "Sports Day",
    date: "December 10th",
    description: "A day full of fun and competition awaits you!",
    details:
      "Our Sports Day features various athletic events, friendly competitions, and team-building activities. Come support our talented students!",
    image: sportsDay,
  },
];

export default events;
