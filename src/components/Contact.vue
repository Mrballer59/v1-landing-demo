<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Button } from './ui/button';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
//import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { AlertCircle, Mail } from 'lucide-vue-next';
//(Stuff that was coming from lucide-vue-next) Building2, Phone, Mail, Clock
import { userService } from '@/services/userService';

interface ContactFormeProps {
  firstName: string;
  lastName: string;
  email: string;
  // subject: string;
  // message: string;
}

const contactForm = reactive<ContactFormeProps>({
  firstName: '',
  lastName: '',
  email: '',
  // subject: "Web Development",
  // message: "",
});

const isSubmitting = ref(false);
const invalidInputForm = ref<boolean>(false);
const successMessage = ref<string>('');
const errorMessage = ref<string>('');
const showSuccess = ref(false);

const handleSubmit = async () => {
  try {
    // Reset states
    invalidInputForm.value = false;
    errorMessage.value = '';
    successMessage.value = '';
    showSuccess.value = false;

    // Validate form
    if (!contactForm.firstName || !contactForm.lastName || !contactForm.email) {
      invalidInputForm.value = true;
      errorMessage.value = 'Please fill in all required fields.';
      return;
    }

    isSubmitting.value = true;

    // Send user data to backend
    const response = await userService.createUser({
      firstName: contactForm.firstName,
      lastName: contactForm.lastName,
      email: contactForm.email,
    });

    // Show success message
    successMessage.value = `Thank you ${response.user.firstName} for registering! Please check your email (${response.user.email}).`;
    showSuccess.value = true;

    // Optionally, reset the form after successful submission
    contactForm.firstName = '';
    contactForm.lastName = '';
    contactForm.email = '';
    // contactForm.subject = "Web Development";
    // contactForm.message = "";

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } catch (error: any) {
    invalidInputForm.value = true;
    errorMessage.value =
      error.response?.data?.message || 'An error occurred. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <section class="grid grid-cols-1 place-items-center gap-8">
      <h2 class="text-3xl mb-8 md:text-4xl font-bold">
        Rejoignez le Flower Club
      </h2>
      <!-- form -->
      <Card class="bg-muted/60 dark:bg-car w-full max-w-2xl">
        <CardHeader class="text-primary text-2xl"> </CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <!-- Success Message -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-2 opacity-0"
            >
              <Alert
                v-if="showSuccess"
                variant="default"
                class="bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-800"
              >
                <AlertCircle
                  class="w-4 h-4 text-green-600 dark:text-green-400"
                />
                <AlertTitle class="text-green-800 dark:text-green-200"
                  >Success</AlertTitle
                >
                <AlertDescription class="text-green-700 dark:text-green-300">
                  {{ successMessage }}
                </AlertDescription>
              </Alert>
            </Transition>
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">Prénom</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Jacob"
                  v-model="contactForm.firstName"
                  required
                  :disabled="isSubmitting"
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Nom de Famille</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Jones"
                  v-model="contactForm.lastName"
                  required
                  :disabled="isSubmitting"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Mrniceguy@Lille.com"
                v-model="contactForm.email"
                required
                :disabled="isSubmitting"
              />
            </div>
            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                There is an error in the form. Please check your input.
              </AlertDescription>
            </Alert>
            <div class="mt-5 text-center">
              <div class="max-w-md mx-auto">
                <div class="flex gap-2">
                  <Button
                    :disabled="isSubmitting"
                    :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                    variant="outline"
                    class="w-full gap-2"
                  >
                    <Mail class="size-4" />

                    {{
                      isSubmitting ? 'Envoyer...' : "S'inscrire à la newsletter"
                    }}
                  </Button>
                </div>
                <p class="text-sm text-muted-foreground mt-4">
                  Recevez des codes promo exclusifs, des offres spéciales et
                  soyez le premier à découvrir nos nouveautés.
                </p>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
<style scoped>
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
