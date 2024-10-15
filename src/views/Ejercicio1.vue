<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/ejemplo1">
          <ion-icon aria-hidden="true" :icon="happy" />
          <ion-label>Ejercicio 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/ejemplo2">
          <ion-icon aria-hidden="true" :icon="images" />
          <ion-label>EJercicio 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script scoped>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet, IonPage } from '@ionic/vue';
import { images, happy } from 'ionicons/icons';
export default {
    name: "Ejercicio1",
    components: {
        IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon
    },
    data() {
      return {
        images, happy
      }
    }
}
</script>
