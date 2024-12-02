<script setup lang="ts">
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Star } from 'lucide-vue-next';

interface ReviewProps {
  // image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    // image: 'https://github.com/shadcn.png',
    name: 'Rachid',
    userName: 'Client de Le couvent Rbx',
    comment: "L'odeur et le goût vraiment bons",
    rating: 5.0,
  },
  {
    // image: 'https://github.com/shadcn.png',
    name: 'Valentin',
    userName: 'Client de Le couvent Rbx',
    comment: "It's super practical to roll",
    rating: 4.8,
  },

  {
    // image: 'https://github.com/shadcn.png',
    name: 'Bilel',
    userName: 'Client de Le couvent Rbx',
    comment: "It's really smooth and soft",
    rating: 4.9,
  },
  // {

  //   name: 'Ethan Parker',
  //   userName: 'Data Scientist',
  //   comment:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.',
  //   rating: 5.0,
  // },
  // {

  //   name: 'Ava Mitchell',
  //   userName: 'IT Project Manager',
  //   comment:
  //     'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.',
  //   rating: 5.0,
  // },
  // {

  //   name: 'Isabella Reed',
  //   userName: 'DevOps Engineer',
  //   comment:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   rating: 4.9,
  // },
];
</script>

<template>
  <section id="testimonials" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Témoignages
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Ce qu'en pesent nos clients
      </h2>
    </div>

    <!-- Video Section -->
    <div class="max-w-4xl mx-auto mb-16">
      <div
        class="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl"
      >
        <!-- Placeholder div for video - replace with actual video when ready -->
        <div
          class="absolute inset-0 bg-muted/20 flex items-center justify-center"
        >
          <!-- You can replace this div with your video element when ready -->
          <iframe
            v-if="true"
            class="w-full aspect-video rounded-lg shadow-xl"
            src="https://player.vimeo.com/video/1019494541?h=6fb3ca5006"
            title="Client Testimonial Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <!-- Placeholder content - remove when adding real video -->
          <!-- <div class="text-center">
            <p class="text-muted-foreground">Video Testimonial Coming Soon</p>
            <p class="text-sm text-muted-foreground/60">16:9 Aspect Ratio</p>
          </div> -->
        </div>
      </div>
    </div>

    <Carousel
      :opts="{
        align: 'start',
      }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviewList"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
              </div>

              "{{ review.comment }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <!-- <Avatar>
                  <AvatarImage
                    src="https://www.radix-vue.com/logo.svg"
                    alt="@radix-vue"
                  />
                  <AvatarFallback>SV</AvatarFallback>
                </Avatar> -->

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                  <CardDescription>{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
