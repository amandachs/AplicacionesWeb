<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <RouterLink class="navbar-brand js-scroll-trigger" to="/about">
      <span class="d-block d-lg-none">Start Bootstrap</span>
      <span class="d-none d-lg-block">
        <img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          :src="'/img/profile.jpg'"
          alt=""
        />
      </span>
    </RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/about" active-class="active">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/experience" active-class="active">Experience</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/education" active-class="active">Education</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/skills" active-class="active">Skills</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/interests" active-class="active">Interests</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link js-scroll-trigger" to="/awards" active-class="active">Awards</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  
</template>

<script setup lang="ts">

import { RouterLink } from 'vue-router'
</script>

<style scoped>

#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 600;
  text-transform: uppercase;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }
  #sideNav .navbar-collapse {
    display: flex;
    align-items: flex-start;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}

</style>