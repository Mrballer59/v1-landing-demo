<!-- <script setup lang="ts">
import { useColorMode } from '@vueuse/core';
const mode = useColorMode();
//import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';

const navigateToShop = () => {
  window.location.href = 'https://mrniceguyfleur.com/shop';
};
</script>

<template>
  <section class="container">
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
      <div class="text-center space-y-8">
        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <h1>
            Découvrez une alternative naturelle
            <span
              class="text-transparent bg-gradient-to-r from-[#43c841] to-primary bg-clip-text"
            >
              qui change tout
            </span>
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Dites adieu au stress et à la nicotine. Découvrez une nouvelle façon
          de vous détendre naturellement. Herbes Mythiques : l’avant-goût d’un
          avenir de bien-être naturel Ce mélange unique au CBD et au lotus bleu
          d'Égypte est conçu en France avec des plantes de haute qualité, pour
          des moments de détente pur et sans compromis.
        </p>
        <div
          class="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"
          ></div>
          <img
            src="/Herbes-Mythiques-hero.jpg"
            alt="Herbes Mythiques"
            class="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Pourquoi choisir Herbes Mythiques ?<br />
          Herbes Mythiques est un mélange floral puissant sans nicotine,
          fabriqué à la main en France avec des plantes bio de qualité
          supérieure, directement sourcées auprès des producteurs.
        </p>
      </div>
      <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
        Pour une expérience unique qui apaise le corps et l’esprit, Herbes
        Mythiques devient votre solution incontournable, la référence naturelle
        pour transformer vos rituels quotidiens avec une alternative moderne et
        saine.
      </p>
      <Button size="lg" class="mt-8" @click="navigateToShop">
        Découvrez nos produits
        <ArrowRight class="ml-2 h-5 w-5" />
      </Button>
    </div>
    <div class="relative group mt-14">
      <div
        class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
      ></div>

      <img
        class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border-t-primary/30 img-border-animation"
        :src="mode == 'light' ? 'MNG-img.svg' : 'MNG-IMG-cream.svg'"
        alt="dashboard using shadcn-vue"
      />

      <div
        class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style> -->
<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
const mode = useColorMode();
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-vue-next';

const navigateToShop = () => {
  window.location.href = 'https://mrniceguyfleur.com/shop';
};
</script>

<template>
  <section class="container">
    <div class="relative min-h-screen flex items-center">
      <!-- Main Content Container -->
      <div
        class="w-full max-w-[90rem] mx-auto bg-muted/30 rounded-3xl p-8 md:p-12 my-8"
      >
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Image -->
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"
            ></div>
            <div
              class="relative aspect-square overflow-hidden rounded-2xl bg-background"
            >
              <img
                src="/Herbes-Mythiques-hero.jpg"
                alt="Herbes Mythiques"
                class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- Right Column: Content -->
          <div class="space-y-8 order-1 lg:order-2">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight"
            >
              <span class="block">Découvrez</span>
              <span class="block">une</span>
              <span class="block">alternative</span>
              <span class="block">naturelle</span>
              <span
                class="text-transparent bg-gradient-to-r from-[#43c841] to-primary bg-clip-text"
              >
                qui change tout
              </span>
            </h1>

            <div class="space-y-6">
              <p class="text-xl text-muted-foreground">
                Dites adieu au stress et à la nicotine. Découvrez une nouvelle
                façon de vous détendre naturellement.
              </p>

              <div class="space-y-4 border-l-2 border-primary/20 pl-4">
                <p class="text-lg text-muted-foreground">
                  Herbes Mythiques : l'avant-goût d'un avenir de bien-être
                  naturel. Ce mélange unique au CBD et au lotus bleu d'Égypte
                  est conçu en France avec des plantes de haute qualité.
                </p>
                <p class="text-lg text-muted-foreground">
                  Un mélange floral puissant sans nicotine, fabriqué à la main
                  avec des plantes bio de qualité supérieure.
                </p>
              </div>

              <div class="flex gap-4 pt-4">
                <Button size="lg" @click="navigateToShop" class="gap-2">
                  Découvrez nos produits
                  <ArrowRight class="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div
        class="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-50"
      ></div>
      <div
        class="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl opacity-50"
      ></div>
    </div>

    <!-- Additional Content -->
    <div class="max-w-3xl mx-auto text-center pb-20">
      <p class="text-xl text-muted-foreground">
        Pour une expérience unique qui apaise le corps et l'esprit, Herbes
        Mythiques devient votre solution incontournable, la référence naturelle
        pour transformer vos rituels quotidiens avec une alternative moderne et
        saine.
      </p>
    </div>
  </section>
</template>

<style scoped>
.aspect-square {
  aspect-ratio: 1 / 1;
}

@media (min-width: 1024px) {
  .container {
    min-height: calc(100vh - 5rem);
  }
}

/* Mobile optimization for title */
@media (max-width: 768px) {
  h1 {
    font-size: 3.5rem;
    line-height: 1.1;
  }

  h1 span.block {
    display: block;
    margin-bottom: -0.2em;
  }
}
</style>
