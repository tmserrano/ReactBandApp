import React from "react";
import styles from "./App.module.css";
import Album from "./components/Album";
import Main from "./components/Main";

export interface AlbumInterface {
  key: number;
  album: string;
  image: string;
  musics: string[];
  link: string;
}
const App = () => {
  const albumInfo: AlbumInterface[] = [
    {
      key: 1,
      album: "Parachutes",
      image: "images/Parachutes.webp",
      musics: [
        "Don't Panic",
        "Shiver",
        "Spies",
        "Sparks",
        "Yellow",
        "Trouble",
        "Parachutes",
        "High Speed",
        "We Never Change",
        "Everything's Not Lost",
      ],
      link: "https://open.spotify.com/album/6ZG5lRT77aJ3btmArcykra",
    },
    {
      key: 2,
      album: "A Rush of Blood to the Head",
      image: "images/A_Rush_of_Blood_to_the_Head.webp",
      musics: [
        "Politik",
        "In My Place",
        "God Put a Smile ipon Your Face",
        "The Scientist",
        "Clocks",
        "Daylight",
        "Green Eyes",
        "Warning Sign",
        "A Whisper",
        "A Rush of Blood to the Head",
        "Amsterdam",
      ],
      link: "https://open.spotify.com/album/0RHX9XECH8IVI3LNgWDpmQ",
    },
    {
      key: 3,
      album: "X&Y",
      image: "images/X_y.webp",
      musics: [
        "Square One",
        "What If",
        "White Shadows",
        "Fix You",
        "Talk",
        "X&Y",
        "Speed of Sound",
        "A Message",
        "Low",
        "The Hardest Part",
        "Swallowed in the Sea",
        "Twisted Logic",
        "Til Kingdom Come",
      ],
      link: "https://open.spotify.com/album/4E7bV0pzG0LciBSWTszra6",
    },
    {
      key: 4,
      album: "Viva La Vida Or Death and All His Friends",
      image: "images/Viva-La-Vida-Or-Death-and-All-His-Friends-Album.webp",
      musics: [
        "Life in Technicolor",
        "Cemeteries of London",
        "Lost!",
        "42",
        "Viva la Vida",
        "Violet Hill",
        "Strawberry Swing",
        "Death and All His Friends",
      ],
      link: "https://open.spotify.com/album/1CEODgTmTwLyabvwd7HBty",
    },
    {
      key: 5,
      album: "Mylo Xyloto",
      image: "images/Myloxyloto.webp",
      musics: [
        "Mylo Xyloto",
        "Hurts Like Heaven",
        "Paradise",
        "Charlie Brown",
        "Us Against the World",
        "M.M.I.X",
        "Every TearDrop is a Waterfall",
        "Major Minus",
        "U.F.O",
        "Princess of China",
        "Up in Flames",
        "A Hopeful Transmission",
        "Don't Let It Break Your Heart",
        "Up with the Birds",
      ],
      link: "https://open.spotify.com/album/2R7iJz5uaHjLEVnMkloO18",
    },
    {
      key: 6,
      album: "Ghost Stories",
      image: "images/Ghost_stories.webp",
      musics: [
        "Always in My Head",
        "Magic",
        "Ink",
        "True Love",
        "Midnight",
        "Another's Arms",
        "Oceans",
        "A Sky Full of Stars",
        "O",
      ],
      link: "https://open.spotify.com/album/1hNS0RsxPTFjmKXCgmjSLS",
    },
    {
      key: 7,
      album: "A Head Full of Dreams",
      image: "images/Coldplay-A-Head-Full-of-Dreams.webp",
      musics: [
        "A Head Full of Dreams",
        "Birds",
        "Hymn for the Weekend",
        "Everglow",
        "Adventure of a Lifetime",
        "Fun",
        "Kaleidoscope",
        "Army of One",
        "Amazing Day",
        "Colour Spectrum",
        "Up&Up",
      ],
      link: "https://open.spotify.com/album/3cfAM8b8KqJRoIzt3zLKqw",
    },
    {
      key: 8,
      album: "Everyday Life",
      image: "images/Everyday_life.webp",
      musics: [
        "Sunrise",
        "Church",
        "Trouble In Town",
        "Broken",
        "Daddy",
        "WOTW / POTP",
        "Arabesque",
        "When I Need a Friend",
        "Guns",
        "Orphans",
        "Èkó",
        "Cry Cry Cry",
        "Old Friends",
        "بنی آدم",
        "Champion of the World",
        "Everyday Life",
      ],
      link: "https://open.spotify.com/album/2FeyIYDDAQqcOJKOKhvHdr",
    },
    {
      key: 9,
      album: "Music of the Sphere",
      image: "images/Coldplay_Music_of_the_Spheres.webp",
      musics: [
        "Music of Spheres",
        "Higher Power",
        "Humankind",
        "Alien Choir",
        "Let Somebody Go",
        "Human Heart",
        "People of the Pride",
        "Biutyful",
        "My Universe",
        "Music of the Spheres II",
        "Infinity Sign",
        "Colaratura",
      ],
      link: "https://open.spotify.com/album/06mXfvDsRZNfnsGZvX2zpb",
    },
  ];

  return (
    <div className={styles.app}>
      <Main />
      <img
        className={styles.app__letter}
        src="https://fontmeme.com/permalink/220604/4f6964f6e8d087c143461e2a228ce824.png"
        alt="tiktok-font2"
      />
      {albumInfo.map((data) => (
        <Album {...data} />
      ))}
    </div>
  );
};

export default App;
