<template>
  <div>
    <div class="currentsong sticky-top">
      <div class="currentsong-background position-relative">
        <div class="currentsong-backgroundimage position-absolute"></div>
        <div class="song-info d-flex justify-content-center align-items-center py-5">
          <div class="item container">
            <div class="row justify-content-center">
              <div class="song col-md-8 text-center">
                <h1 class="song-name">{{song.name}}</h1>
              </div>
              <div class="song col-md-12 text-center">
                <div class="song-description px-2">{{song.description}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "current-song",
  props: ["song"]
};
</script>
