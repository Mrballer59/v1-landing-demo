<!-- <script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Custom Domain Integration",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.",
    pro: 0,
  },
  {
    title: "Social Media Integrations",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.",
    pro: 0,
  },
  {
    title: "Email Marketing Integrations",
    description: "Lorem dolor sit amet adipisicing.",
    pro: 0,
  },
  {
    title: "SEO Optimization",
    description: "Lorem ipsum dolor sit amet consectetur.",
    pro: 1,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Services
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Grow Your Business
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      From marketing and sales to operations and strategy, we have the expertise
      to help you achieve your goals.
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template> -->
<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Truck, Timer, Shield, MapPin } from 'lucide-vue-next';

interface ServiceProps {
  title: string;
  description: string;
  icon: any;
}

const serviceList: ServiceProps[] = [
  {
    title: 'Satisfait ou remboursé',
    description:
      "Si vous n'êtes pas entièrement satisfait de votre achat, contactez-nous sous 10 jours et nous ferons tout pour trouver une solution qui vous convienne.",
    icon: Shield,
  },
  {
    title: 'Expédition rapide',
    description:
      'Expédition rapide sous 24h via Colissimo, livraison sous 48-72h partout en France Métropolitaine.',
    icon: Truck,
  },
  {
    title: 'Livraison éco-responsable à Lille',
    description:
      'Et pour nos clients Lillois, livraison éco-responsable avec réception jour-même sur Lille + point pick-up gratuit centre ville.',
    icon: MapPin,
  },
  {
    title: 'Commandez en toute sérénité',
    description:
      "Avec nous, vous pouvez commander en toute sérénité. Nous garantissons une expérience d'achat sûre et transparente.",
    icon: Timer,
  },
];
</script>

<template>
  <section id="shipping" class="container py-24 sm:py-32 bg-muted/30">
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Achetez sans risque
    </h2>
    <h3
      class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12"
    >
      Avec nous, vous pouvez commander en toute sérénité
    </h3>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-[80%] mx-auto"
    >
      <div v-for="{ title, description, icon } in serviceList" :key="title">
        <Card
          class="bg-background border border-primary/10 hover:border-primary/20 transition-colors h-full"
        >
          <CardHeader>
            <div class="flex items-center gap-4 mb-2">
              <div class="bg-primary/10 p-2 rounded-full">
                <component :is="icon" class="size-5 text-primary" />
              </div>
              <CardTitle class="text-xl">{{ title }}</CardTitle>
            </div>
            <CardDescription class="text-base">{{
              description
            }}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
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
