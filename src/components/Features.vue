<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TabletSmartphone,
  BadgeCheck,
  Goal,
  Sprout,
  Leaf,
} from 'lucide-vue-next';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  details: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: 'leaf',
    title: 'Des aromates et principes actifs puissants',
    description:
      'Des aromates et principes actifs puissants, sans nicotine, à portée de main.',
    details:
      'Réduit le besoin de mélanger le CBD avec du tabac, tout en éliminant les risques de dépendance à la nicotine pour une routine de bien-être plus saine.',
  },
  {
    icon: 'sprout',
    title: 'Un concept moderne, 100% naturel',
    description:
      'Un concept moderne, 100% naturel, centré sur la qualité des plantes et notre savoir-faire herboriste.',
    details:
      "Des fleurs et feuilles thérapeutiques, sourcées auprès de petits producteurs bio, préparées à la main pour offrir un mélange prêt à l'emploi, parfait seul ou comme base pour ajouter du CBD ou d'autres plantes.",
  },
  {
    icon: 'goal',
    title: 'Des propriétés synergiques sélectionnées',
    description:
      'Des propriétés synergiques sélectionnées pour un bien-être optimal',
    details:
      'Chaque plante agit en harmonie pour maximiser les effets bénéfiques, offrant une expérience puissante et équilibrée, sélectionnée selon un savoir-faire herboriste alliant traditions et connaissances modernes.',
  },
];
const iconMap: Record<
  string,
  typeof TabletSmartphone | typeof BadgeCheck | typeof Goal
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  sprout: Sprout,
  leaf: Leaf,
};
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Pourquoi choisir notre mélange CBD ?
    </h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="{ icon, title, description, details } in featureList"
        :key="title"
      >
        <Card
          class="h-full bg-background border border-primary/10 hover:border-primary/20 transition-colors"
        >
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component :is="iconMap[icon]" class="size-6 text-primary" />
            </div>

            <CardTitle class="text-center text-lg">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p class="text-muted-foreground text-center mb-4">
              {{ description }}
            </p>
            <p class="text-sm text-muted-foreground/80 text-center">
              {{ details }}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
    <p class="md:w-2/3 mx-auto text-lg text-center text-muted-foreground mt-12">
      Ce mélange sert de base équilibrée pour accompagner tous vos moments,
      qu'il s'agisse de favoriser une routine de sommeil apaisante ou d'ajouter
      une touche de convivialité à un contexte social festif.
    </p>
  </section>
</template>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-2px);
}
</style>
