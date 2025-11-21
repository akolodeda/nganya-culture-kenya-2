<<<<<<< HEAD
// Import images
import kixxNgong from "../assets/images/kixx-ngong.webp";
import godfatherPipeline from "../assets/images/godfather-pipeline.webp";
=======
// Import images (WEBP optimized)
import kixxNgong from "../assets/images/kixx.webp";
import godfatherPipeline from "../assets/images/godfather.webp";
>>>>>>> dd13ad5 (Add old project files excluding temp_backup)
import moodEmbakasi from "../assets/images/mood-embakasi.webp";
import oppositeUmoja from "../assets/images/opposite-umoja.webp";

export const nganyas = [
  {
    name: "Kixx",
    route: "Ngong Road",
    image: kixxNgong,
    sound: "/sounds/kixx.mp3"
  },
  {
    name: "Godfather",
    route: "Pipeline",
    image: godfatherPipeline,
    sound: "/sounds/godfather.mp3"
  },
  {
    name: "Mood",
    route: "Embakasi",
    image: moodEmbakasi,
    sound: "/sounds/mood.mp3"
  },
  {
    name: "Opposite",
    route: "Umoja",
    image: oppositeUmoja,
    sound: "/sounds/opposite.mp3"
  }
];
