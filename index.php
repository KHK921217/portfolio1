<?php include 'header.php' ?>
<link rel="stylesheet" href="./css/index.css">
<script src="./js/grained.min.js"></script>
<script src="./js/index.js"></script>
</script>
  <!-- section1   --> 
  <section class="kh-intro-section">
    <h1 class="hidden">인덱스</h1>

    <div class="kh-noise" id="kh-noise"></div>
    
    <div class="kh-youtube-container">
      <svg class="kh-svg" viewBox="0 0 758.29 499.06">
        <path pathLength="1" d="M423.38 481.4h89.18c128.01 0 231.78-103.77 231.78-231.78S640.57 17.85 512.56 17.85l-133.06-.2-.29 463.75H245.73c-128.01 0-231.78-103.77-231.78-231.78S117.72 17.85 245.73 17.85h84.62" />
      </svg>
      <div class="kh-youtube-wrap">
        <img src="./img/khk/intro/560315.png" alt="youtube" class="kh-ratio-img">
        <iframe src="https://www.youtube.com/embed/Vpozma3GnGw?&playlist=Vpozma3GnGw&vq=highres&iv_load_policy=3&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&controls=0" allowfullscreen></iframe>
      </div>
    </div>

    <figure class="khkindexlogo">
      <img src="./img/khk/intro/logo-white.png" alt="logo-white">
      <img src="./img/khk/intro/logo-blue.png" alt="logo-blue">
      <img src="./img/khk/intro/logo-yellow.png" alt="logo-yellow">
    </figure>
  </section>

 <!-- section2   --> 
  <section class="kh-intro-section2">
    <div class="kh-youtube-wrap">
      <img src="./img/khk/intro/560315.png" alt="back-img" class="kh-ratio-img">
      <iframe src="https://www.youtube.com/embed/htXe0ybca1U?&playlist=htXe0ybca1U&vq=highres&iv_load_policy=3&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&controls=0" allowfullscreen></iframe>
    </div>
    <figure class="wave-bg"></figure>
    <figure class="kh-gold-bottom">
      <img class="jador-img" src="./img/khk/intro/f_jadore.png" alt="jadorimg">
      <figcaption>
        <p>부드럽게 피부를 감싸는 고급스럽고 우아한 향기를 선사하는 시그니쳐 향수</p>
      </figcaption>
    </figure>
  </section>

 <!-- section3 --> 
  <section class="kh-intro-section3">
      <ul class="kh-img-container">
        <li><img src="./img/khk/intro/f_sova1.png" alt="diorimg3"></li>

        <li><img src="./img/khk/intro/f_mis1.png" alt="diorimg1"></li>
        <li><img src="./img/khk/intro/f_mis2.png" alt="diorimg2"></li>
        <li><img src="./img/khk/intro/f_sova1.png" alt="diorimg3"></li>
        
        <li><img src="./img/khk/intro/f_mis1.png" alt="diorimg1"></li>
      </ul>

    <button class="kh-next">
      <i class="fa-solid fa-circle-chevron-right"></i>
    </button>
    <button class="kh-prev">
    <i class="fa-solid fa-circle-chevron-left"></i>
    </button>

    <div class=kh-controls>
      <button data-n=1 class="kh-btn kh-btn1 kh-btn4 active"></button>
      <button data-n=2 class="kh-btn kh-btn2"></button>
      <button data-n=3 class="kh-btn kh-btn3 kh-btn0"></button>
    </div>
  </section><!-- section3 -->


<?php include 'footer.php' ?>