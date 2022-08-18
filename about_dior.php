<?php include 'sub-header.php' ?>
<link rel="stylesheet" href="./css/about_dior.css"> 
<script src="./js/about_dior.js"></script> 

<div class="kh-about-dior">
    <div class="kh-title">
      <img src="./img/khk/brand/title1.png" alt="title">
    </div><!-- 제목 -->

    <section class="kh-brand-section1" data-n="1">
      <figure>
        <img src="./img/khk/brand/dior123 copy.png" alt="img1">
      </figure>
      
    </section><!-- section1-->

    <section class="kh-brand-section2" data-n="2">
      <figure>
        <img src="./img/khk/brand/brand.png" alt="img2">
        <figcaption>
          <p>모든 제품은 엄격한 규정을 준수하며 제품 품질, 원재료 제조이력에 대한 DIOR의 자체기준을 준수합니다. </p>
        </figcaption>
      </figure>
    </section><!-- section2-->

    <section class="kh-brand-section3" data-n="3">
      <figure>
        <img src="./img/khk/brand/brand1.png" alt="img3">
        <figcaption>
          <p>'제품이 본연의 상태를 오래도록 유지할 수 있도록 성분 및
            포뮬러에 대한 IN-VITRO 및 IN-VIVO를 평가합니다.'
          </p>
        </figcaption>
      </figure>
    </section><!-- section3-->

    <section class="kh-brand-section4" data-n="4">
      <div class="kh-div1">
        <figure>
          <img src="./img/khk/brand/brand3.png" alt="img4">
          <figcaption>
            <p>DIOR은 지속 가능한 뷰티를 위해 환경을 고려한 성분에 집중해야한다고 믿습니다.</p>
          </figcaption>
        </figure>
      </div>
      <div class="kh-div2">
        <figure>
          <img src="./img/khk/brand/dior12345.png" alt="img5">
          <figcaption>
            <p>DIOR은 생물의 다양성 및 사회에 더 나은 영향을 주기 위해 지속적으로 노력합니다.</p>
          </figcaption>
        </figure>
      </div>
    </section><!-- section4-->

    <nav class="kh-scrollspy">
      <div class="kh-progress"></div>
      <button class="kh-btn1" data-n="1"></button>
      <button class="kh-btn2" data-n="2"></button>
      <button class="kh-btn3" data-n="3"></button>
      <button class="kh-btn4" data-n="4"></button>
    </nav>
  </div><!-- 전체 -->
  <svg>
    <filter id="filter">
    <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
    <feDisplacementMap scale="10" in="SourceGraphic" />
    <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1"
    values="0.002;0.008;0.002" dur="10s" repeatCount="indefinite"/>
    </filter>
  </svg>
<?php include 'sub-footer.php' ?>