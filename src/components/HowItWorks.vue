<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Créer",
    title: "L'Art du Mélange Moderne",
    description:
      "Une symphonie botanique unique où notre CBD, riche en terpènes, s'unit au légendaire Lotus Bleu d'Égypte. Cette alliance précieuse, enrichie de damiana, passiflore, guimauve et framboise, crée une expérience sensorielle d'exception.",
    image: "Mr-Nice-Guy Flower-Club-Logo-03.png",
  },
  {
    badgeTitle: "Explorer",
    title: "L'Essence des Plantes Nobles",
    description:
      "Une composition d'herboriste contemporain qui réinvente l'art ancestral des mélanges botaniques pour un moment de pure sérénité",
      image: "Herbes_Mystiques_Packaging-removebg-preview.png",
  },
  {
    badgeTitle: "Innover",
    title: "Chaque geste compte",
    description:
      "Notre engagement va au-delà du simple produit. Chaque étape de notre processus est minutieusement pensée pour vous offrir une expérience CBD d'exception, respectueuse de l'environnement et de votre bien-être.",
    image: "Herbes-Mystiques-Packaging-Preroll.png",
  },
  // {
  //   badgeTitle: "Collaborate",
  //   title: "L'Élégance Myrtille",
  //   description:
  //     "Une variété d'exception aux notes sucrées de myrtilles fraîches, offrant une expérience gustative unique. Notre Blueberry CBD séduit par son profil aromatique gourmand et ses effets délicatement relaxants",
  //   image: "blueberry-removebg-preview.png",
  // },
];
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Comment ça marche
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Un processus raffiné
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground ">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Image describing ${title} `"
          className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto "
        />
        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
