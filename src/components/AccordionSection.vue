<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const compositionDetails = [
  {
    id: 'item-1',
    title: 'Composition Active',
    content:
      "Ce mélange de plantes regorge de principes actifs puissants, tels que 50 mg de CBD par dose de 1 g de mélange, ainsi que du CBG, de l'apomorphine et de la nuciferine. Ces composés subtils favorisent une perception accrue et une sensation de pleine conscience, pour une expérience plus profonde et équilibrée.",
  },
  {
    id: 'item-2',
    title: 'Équilibre Naturel',
    content:
      "La damianine, tonifiante et vivifiante, soutient l'équilibre mental et physique en stimulant naturellement l'énergie, tandis que l'harmane et l'apigénine, présents dans la passiflore, procurent un effet détendant et apaisant, offrant une relaxation douce et sans excès.",
  },
  {
    id: 'item-3',
    title: 'Propriétés Protectrices',
    content:
      "Enfin, les feuilles de framboisier, de guimauve et de molène apportent des propriétés protectrices et clarifiantes, tout en offrant une texture fraîche et douce qui équilibre l'ensemble du mélange, pour une expérience harmonieuse et complète.",
  },
];
</script>

<template>
  <div class="container py-12">
    <Card class="border border-primary/10">
      <CardHeader>
        <h3 class="text-2xl font-semibold text-center">
          Découvrez notre formule unique
        </h3>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible class="w-full">
          <AccordionItem
            v-for="item in compositionDetails"
            :key="item.id"
            :value="item.id"
          >
            <AccordionTrigger class="hover:text-primary">
              {{ item.title }}
            </AccordionTrigger>
            <AccordionContent class="text-muted-foreground">
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  </div>
</template>
