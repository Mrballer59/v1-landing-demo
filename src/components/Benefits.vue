<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  Sparkle,
  Tag,
  Paintbrush,
  Cannabis,
  LineChart,
  Brain,
} from 'lucide-vue-next';

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: 'Cannabis',
    title: 'Confiance & Communauté',
    description:
      'Rejoignez notre cercle exclusif dédié au bien-être naturel et à la découverte florale.',
  },
  {
    icon: 'lineChart',
    title: 'Sélection Raffinée',
    description:
      'Une sélection minutieuse des meilleures fleurs CBD, cultivées avec soin en respectant les normes françaises.',
  },
  {
    icon: 'Brain',
    title: 'Expertise & Conseil',
    description:
      "Bénéficiez de conseils personnalisés et découvrez l'art du bien-être naturel avec nos experts.",
  },
  {
    icon: 'sparkle',
    title: 'Garantie Qualité',
    description:
      'Chaque produit est rigoureusement testé pour garantir qualité, pureté et conformité aux normes.',
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Cannabis
  | typeof LineChart
  | typeof Brain
> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  Cannabis: Cannabis,
  lineChart: LineChart,
  Brain: Brain,
};
</script>

<template>
  <section id="benefits" class="container py-24 sm:py-32">
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">Excellence Florale</h2>
        <p class="text-xl text-muted-foreground mb-8">
          Découvrez notre collection exclusive de fleurs CBD premium,
          soigneusement sélectionnées pour les connaisseurs exigeants. Un
          mariage parfait entre tradition française et innovation bien-être,
          notre club vous offre une expérience unique dans l'univers raffiné du
          CBD.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component class="size-8 mb-6 text-primary" :is="iconMap[icon]" />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
