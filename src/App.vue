<template>
  <div id="app">
    <current-song
      :song="currentSong"
      v-if="currentSong"
    />
    <song-list
      :songs="songs"
      :currentSong="currentSong"
      @handlePlay="handlePlay"
      @handleDelete="handleDelete"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import CurrentSong from "@/components/CurrentSong";
import SongList from "@/components/SongList";
import _ from "lodash";

export default {
  name: "app",
  data() {
    return {
      currentSong: null,
      audioElement: null,
      songs: [
        {
          id: "1",
          music_url:
            "http://orangevalleycaa.org/api/media/music/ModernHardRock_45450.wav",
          name: "Modern Hard Rock",
          description:
            "Powerful rock track with cool guitar riffs, energetic groovy drums, tight bass and guitar solo. Perfect for use in sport (like boxing) videos, advertisements etc.",
          duration: "2:18",
          image:
            "http://orangevalleycaa.org/api/media/images/ArtistWorking_059730538.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/thumbs/ArtistWorking_059730538.png",
          created_by: "ikoliks",
          file_name_original: "Modern hard rock_LYNDA_45450.wav"
        },
        {
          id: "2",
          music_url:
            "http://orangevalleycaa.org/api/media/music/AcousticIntro_45687.wav",
          name: "Acoustic Intro",
          description:
            "Short acoustic guitar intro with a dreamy, relaxed quality that inspires reflection.",
          duration: "0:57",
          image:
            "http://orangevalleycaa.org/api/media/images/BalletInSmoke_054599628.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/thumbs/BalletInSmoke_054599628.png",
          created_by: "Trevor Lackey",
          file_name_original: "Acoustic Intro_LYNDA_45687.wav"
        },
        {
          id: "3",
          music_url:
            "http://orangevalleycaa.org/api/media/music/OptimisticLife_41224.wav",
          name: "Optimistic Life",
          description:
            "Song with optimistic vibe, that's perfect background for music videos that need an uplifting and cool atmosphere.",
          duration: "0:30",
          image:
            "http://orangevalleycaa.org/api/media/images/BlowingGlass_066874921.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/thumbs/BlowingGlass_066874921.png",
          created_by: "PremiumAudio",
          file_name_original: "Optimistic Life_LYNDA_41224.wav"
        },
        {
          id: "4",
          music_url:
            "http://orangevalleycaa.org/api/media/music/TraceyLarvenz_35879.wav",
          name: "Light and Oxygen",
          description:
            "A bubbly, soothing track suited for corporate, marketing, and motivational videos.",
          duration: "3:05",
          image:
            "http://orangevalleycaa.org/api/media/images/FireDancers_042981315.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/thumbs/FireDancers_042981315.png",
          created_by: "Tracey Larvenz",
          file_name_original: "Tracey Larvenz track_LYNDA_35879.wav"
        },
        {
          id: "5",
          music_url:
            "http://orangevalleycaa.org/api/media/music/ExploreCaliforniaIntro_8773.wav",
          name: "Exploring California",
          description:
            "A synth and percussion track as smooth as a drive along the California coast.",
          duration: "0:20",
          image:
            "http://orangevalleycaa.org/api/media/images/GlassBlownDragon_056473995.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/thumbs/GlassBlownDragon_056473995.png",
          created_by: "Bryce Poole",
          file_name_original: "Explore California Intro_LYNDA_8773.wav"
        },
        {
          id: "6",
          music_url:
            "http://orangevalleycaa.org/api/media/music/Aspire_45442.wav",
          name: "Aspire",
          description:
            "Inspiring and beautiful track played by acoustic piano, electric piano, celesta and some light oboe and clarinet sounds in the chorus.",
          duration: "2:45",
          image:
            "http://orangevalleycaa.org/api/media/images/GraffitiArtist_065000861.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/thumbs/GraffitiArtist_065000861.png",
          created_by: "AudioQuattro",
          file_name_original: "Aspire_LYNDA_45442.wav"
        },
        {
          id: "7",
          music_url:
            "http://orangevalleycaa.org/api/media/music/BeginningInTheFarm_41245.wav",
          name: "Beginning In The Farm",
          description:
            "Positive and inspiring. Dreams, ideas, and a sense of something new and full of beauty.",
          duration: "2:06",
          image:
            "http://orangevalleycaa.org/api/media/images/GraphicArtist_052214820.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/GraphicArtist_052214820.png",
          created_by: "Julio Kladniew",
          file_name_original: "Beginning In The Farm_LYNDA_41245.mp3"
        },
        {
          id: "8",
          music_url:
            "http://orangevalleycaa.org/api/media/music/BrightAcousticAmbient_35443.wav",
          name: "Bright Acoustic Ambient",
          description:
            "Acoustic guitar and ukulele mellow track with a 12-string acoustic guitar as the main instrument.",
          duration: "3:21",
          image:
            "http://orangevalleycaa.org/api/media/images/PleinAirArtist_061873487.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/thumbs/PleinAirArtist_061873487.png",
          created_by: "Eliosmusic",
          file_name_original: "Bright acoustic ambient_LYNDA_35443.wav"
        },
        {
          id: "9",
          music_url:
            "http://orangevalleycaa.org/api/media/music/BrothersInArms_46815.wav",
          name: "Brothers In Arms",
          description:
            "A themed narrative piece depicting wartime heroes, victorious and fallen. Good for poignant, emotive scenes of loss and tragedy.",
          duration: "1:15",
          image:
            "http://orangevalleycaa.org/api/media/images/SculptorWelding_053783433.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/thumbs/SculptorWelding_053783433.png",
          created_by: "John Leonard French",
          file_name_original: "Brothers In Arms_LYNDA_46815.wav"
        },
        {
          id: "10",
          music_url:
            "http://orangevalleycaa.org/api/media/music/BusinessCorporateBackgrounds_41443.wav",
          name: "Business Corporate Backgrounds",
          description:
            "Positive, uplifting, and inspiring soft corporate ambient music that is perfect as background music for inspirational stories, advertisements, TV commercials, brand company and news, science and invention, architecture and trade, technology and education, and much more.",
          duration: "2:57",
          image:
            "http://orangevalleycaa.org/api/media/images/SpinningPottery_061544433.png",
          thumb:
            "http://orangevalleycaa.org/api/media/images/thumbs/SpinningPottery_061544433.png",
          created_by: "AZOVMUSIC",
          file_name_original: "Business Corporate Backgrounds_LYNDA_41443.wav"
        }
      ]
    };
  },
  methods: {
    handlePlay: function(payload) {
      if (this.audioElement == null) {
        this.audioElement = new Audio(payload.music_url);
        this.audioElement.play();
      } else {
        if (payload == this.currentSong) {
          if (this.audioElement.paused) {
            this.audioElement.play();
          } else {
            this.audioElement.pause();
          }
        } else {
          this.audioElement.src = payload.music_url;
          this.audioElement.play();
        }
      }
      this.currentSong = payload;
      this.audioElement.addEventListener("ended", () => {
        this.currentSong = null;
        this.audioElement = null;
      });
    },
    handleDelete: function(payload) {
      const updatedArray = _.without(this.songs, payload);
      this.songs = updatedArray;
    }
  },
  components: {
    FontAwesomeIcon,
    CurrentSong,
    SongList
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One|Open+Sans:300&display=swap");

// colors
$primary: #00adb5;
$secondary: #f8b500;
$body-bg: #2a2d33;
$text-body: #fff;
$body-color: $text-body;
$border-radius: 8px;

//overrides

$font-family-headlines: "Fjalla One", -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";
$font-family-base: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";

$headings-font-family: $font-family-headlines;
$headings-font-weight: 400;
$line-height-base: 1.4;

$list-group-active-bg: #222;
$list-group-bg: transparent;
$list-group-border-radius: 0;
$list-group-hover-bg: #444;
$list-group-action-color: #bbb;

@import "node_modules/bootstrap/scss/bootstrap";

//currentsong
.currentsong-background {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.currentsong-backgroundimage {
  height: 100%;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(8px) grayscale(50%);
  transform: scale(1.15);
}

.currentsong .song-info {
  background-color: #000;
}

.currentsong .song-name {
  font-size: 2.5em;
}
.currentsong .song-description {
  font-size: 0.9em;
  line-height: 120%;
}

// SongList
.songlist .song:active {
  background: $gray-700;
}

.songlist .song-info-name {
  font-size: 1.3em;
  color: $gray-400;
}

.songlist .song-info-creator {
  font-size: 0.9em;
}

.songlist .thumbnail {
  width: 60px;
  height: 60px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.songlist .song .duration {
  color: $secondary;
}

.songlist .song .trash {
  display: none;
}

.songlist .song:not(.active):hover .trash {
  display: block;
  cursor: pointer;
}

.songlist .song .play,
.songlist .song:hover.active .play {
  display: none;
}
.songlist .song:hover .play {
  display: block;
  cursor: pointer;
}
.songlist .song .pause {
  display: none;
}

.songlist .song:hover.active .pause {
  display: block;
  cursor: pointer;
}

.songlist .song.active .play,
.songlist .song.active {
  display: block;
}
</style>
