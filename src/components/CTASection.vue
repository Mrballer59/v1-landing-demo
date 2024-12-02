<!-- <script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, ArrowRight, Mail } from 'lucide-vue-next';

const handleClick = () => {
  console.log('CTA clicked');
};
</script>

<template>
  <section class="relative py-24 sm:py-32 overflow-hidden bg-primary/5">
    <div class="container relative z-10">
      <Card
        class="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <CardContent class="p-6 sm:p-12">
          <div class="text-center space-y-6 max-w-3xl mx-auto">
            <div
              class="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 font-medium text-sm mb-4"
            >
              Offre Black Friday Exclusive !
            </div>

            <h2 class="text-4xl font-bold tracking-tight">
              Profitez de notre offre limitée
            </h2>

            <p class="text-xl text-muted-foreground">
              Pour chaque mélange Herbes Mythiques acheté, recevez
              <span class="font-semibold text-foreground"
                >3G de CBD Bio Français GRATUITS</span
              >
              + un Goodie Bag Mr. Nice Guy (preroll + pack de rolling papers
              classiques).
            </p>

            <div class="flex justify-center gap-4 flex-col sm:flex-row">
              <Button size="lg" class="gap-2" @click="handleClick">
                Commander maintenant
                <ArrowRight class="size-4" />
              </Button>
              <Button size="lg" variant="outline" class="gap-2">
                En savoir plus
                <Gift class="size-4" />
              </Button>
            </div>

            <p class="text-sm text-muted-foreground">
              Dépêchez-vous, l'offre est valable jusqu'à épuisement des stocks !
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.backdrop-blur {
  backdrop-filter: blur(8px);
}
</style> -->
<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, ArrowRight, Mail, Timer } from 'lucide-vue-next';

const handleClick = () => {
  window.location.href = 'https://mrniceguyfleur.com/shop';
};
</script>

<template>
  <section class="relative py-24 sm:py-32 overflow-hidden bg-primary/5">
    <div class="container relative z-10">
      <!-- Main CTA -->
      <Card
        class="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <CardContent class="p-6 sm:p-12">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <!-- Text Content -->
            <div class="space-y-6">
              <div
                class="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 font-medium text-sm"
              >
                <Timer class="size-4" />
                Offre Black Friday Exclusive !
              </div>

              <h2 class="text-4xl font-bold tracking-tight">
                Profitez de notre offre limitée
              </h2>

              <div class="space-y-4">
                <p class="text-xl text-muted-foreground">
                  Pour chaque mélange Herbes Mythiques acheté, recevez :
                </p>

                <ul class="space-y-3 text-lg">
                  <li class="flex items-start gap-2">
                    <span class="text-primary mt-1">✦</span>
                    <span class="font-semibold"
                      >3G de CBD Bio Français GRATUITS</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-primary mt-1">✦</span>
                    <span>Un Goodie Bag Mr. Nice Guy comprenant :</span>
                  </li>
                  <li class="pl-6 text-muted-foreground">
                    • 1 preroll artisanal
                  </li>
                  <li class="pl-6 text-muted-foreground">
                    • 1 pack de rolling papers classiques
                  </li>
                </ul>
              </div>

              <div class="flex gap-4 flex-col sm:flex-row">
                <Button size="lg" class="gap-2" @click="handleClick">
                  Commander maintenant
                  <ArrowRight class="size-4" />
                </Button>
                <Button size="lg" variant="outline" class="gap-2">
                  En savoir plus
                  <Gift class="size-4" />
                </Button>
              </div>

              <div
                class="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Timer class="size-5" />
                <p>
                  Dépêchez-vous, l'offre est valable jusqu'à épuisement des
                  stocks !
                </p>
              </div>
            </div>

            <!-- Image Column -->
            <div class="relative group order-first lg:order-last">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"
              ></div>
              <div
                class="relative aspect-square w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl bg-background"
              >
                <img
                  src="/Herbes-Mythiques-hero.jpg"
                  alt="Herbes Mythiques - CBD Bio Français"
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Additional Elements -->
      <div
        class="absolute -top-24 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30"
      ></div>
      <div
        class="absolute -bottom-24 -left-12 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-30"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.backdrop-blur {
  backdrop-filter: blur(8px);
}
</style>
