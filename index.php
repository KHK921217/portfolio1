<?php include 'header.php' ?>
<link rel="stylesheet" href="./css/index.css">
<link rel="stylesheet" href="./css/bubble-particle.css">
<script src="./js/grained.min.js"></script>
<script src="./js/jquery.ripples-min.js"></script>
<script src="./js/bubble.js"></script>
<script src="./js/index.js"></script>
</script>

<main class="home-container">
  <div class="home-sticky">
    <!-- section1 -->
    <div class="home-section-container home-section-1-container" data-n="1">
      <section class="kh-intro-section kh-intro-section1 kh-intro-section-org">
        <h1 class="hidden">인덱스</h1>
        <div class="kh-noise" id="kh-noise"></div>
        <div class="kh-youtube-container">
          <svg class="kh-svg" viewBox="0 0 758.29 499.06">
            <path pathLength="1" d="M423.38 481.4h89.18c128.01 0 231.78-103.77 231.78-231.78S640.57 17.85 512.56 17.85l-133.06-.2-.29 463.75H245.73c-128.01 0-231.78-103.77-231.78-231.78S117.72 17.85 245.73 17.85h84.62" />
          </svg>
          <video src="./movie/intro-movie.mp4" muted autoplay loop playsinline></video>
        </div>
        <figure class="khkindexlogo">
          <img src="./img/khk/intro/logo-white.png" alt="logo-white">
          <img src="./img/khk/intro/logo-yellow.png" alt="logo-yellow">
          <img src="./img/khk/intro/logo-red.png" alt="logo-red">
        </figure>
      </section>
    </div><!-- section1 -->
    <!-- section2   -->
    <div class="home-section-container home-section-2-container" data-n="2">
      <section class="kh-intro-section kh-intro-section2 kh-intro-section-org">
        <div class="bubble-particle bubble-container"></div>
        <div class="kh-youtube-container">
          <svg class="kh-svg" viewBox="0 0 758.29 499.06">
            <path pathLength="1" d="M423.38 481.4h89.18c128.01 0 231.78-103.77 231.78-231.78S640.57 17.85 512.56 17.85l-133.06-.2-.29 463.75H245.73c-128.01 0-231.78-103.77-231.78-231.78S117.72 17.85 245.73 17.85h84.62" />
          </svg>
          <video src="./movie/intro2-movie.mp4" muted autoplay loop playsinline></video>
        </div>
        <figure class="kh-section2-center">
          <img class="rose" src="./img/khk/intro/section2-rose.png" alt="">
          <img class="bottle" src="./img/khk/intro/section2-bottle.png" alt="">
        </figure>
        <div class="kh-intro-textbox">
          <div>
            <h2>Sample Title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's..
          </div>
        </div>
      </section>
    </div><!-- section2 -->
    <!-- section3 -->
    <div class="home-section-container home-section-3-container" data-n="3">
      <section class="kh-intro-section kh-intro-section3 kh-intro-section-org">
        <div class="kh-youtube-container">
          <svg class="kh-svg" viewBox="0 0 758.29 499.06">
            <path pathLength="1" d="M423.38 481.4h89.18c128.01 0 231.78-103.77 231.78-231.78S640.57 17.85 512.56 17.85l-133.06-.2-.29 463.75H245.73c-128.01 0-231.78-103.77-231.78-231.78S117.72 17.85 245.73 17.85h84.62" />
          </svg>
          <video src="./movie/intro3-movie.mp4" muted autoplay loop playsinline></video>
        </div>
        <figure class="kh-section3-center">
          <img class="green" src="./img/khk/intro/green.png" alt="">
          <img class="green-bottle" src="./img/khk/intro/green-bottle.png" alt="">
        </figure>
        <div class="kh-intro-textbox">
          <div>
            <h2>Sample Title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's..
          </div>
        </div>
      </section>
    </div><!-- section3 -->
  </div><!-- sticky -->
</main><!-- home-container -->

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

<nav class="kh-intro-scrollspy">
  <div class="kh-progress"></div>
  <button class="kh-index-btn1" data-n="1"></button>
  <button class="kh-index-btn2" data-n="2"></button>
  <button class="kh-index-btn3" data-n="3"></button>
</nav>

<?php include 'footer.php' ?>