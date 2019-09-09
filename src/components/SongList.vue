<template>
  <div class="songlist list-group">
    <div
      class="song list-group-item list-group-item-action d-flex"
      v-for="(song, index) in songs"
      :key="index"
    >
      <font-awesome-icon
        class="trash mr-3 align-self-center"
        icon="trash"
      />
      <div
        class="thumbnail"
        :style="{backgroundImage: 'url('+song.thumb+')'}"
      >
      </div>
      <div class="song-info flex-fill px-2 align-self-center">
        <h4 class="song-info-name mb-0">{{song.name}}
          <small class="duration">{{song.duration}}</small></h4>
        <p class="song-info-creator mb-0">{{song.created_by}}</p>
      </div>
      <div
        class="now-playing d-flex align-items-center"
        @click="$emit('handlePlay', song)"
      >
        <font-awesome-icon
          class="play"
          icon="play"
        />
        <font-awesome-icon
          class="pause"
          icon="pause"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "song-list",
  props: ["songs", "currentSong"],
  components: {
    FontAwesomeIcon
  }
};
</script>