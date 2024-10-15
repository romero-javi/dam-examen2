<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Examen 2</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-grid>
                <ion-row class="ion-justify-content-center">
                    <ion-col style="padding: 0 10px;">
                        <h1><b>Rick and Morty</b></h1>
                        <ion-input color="warning" placeholder="Escriba la pagina de personajes a mostrar (entre 1 y 42)" fill="outline" type="number" v-model="page"></ion-input>
                        <ion-button color="warning" size="small" @click="getData" expand="full" shape="flat">Mostrar Personajes</ion-button>
                    </ion-col>
                </ion-row>

                <ion-row class="ion-justify-content-center">
                    <ion-col size="2" v-for="(character, i) in characters" :key="i">
                        <ion-card>
                            <img :src="character.image" alt=""/>
                            <ion-card-header>
                                <ion-card-title>
                                    <b>Nombre:</b> {{ character.name }}
                                </ion-card-title>
                                <span><b>Estado:</b> {{ character.status }}</span>
                                <span><b>Especie:</b> {{ character.species }}</span>
                                <span><b>Genero:</b> {{ character.gender }}</span>
                                <span><b>Planeta de Origen:</b> {{ character.origin.name }}</span>
                            </ion-card-header>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script scoped>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonInput } from '@ionic/vue';
import axios from 'axios';
export default {
    name: "EjercicioTres",
    components: {
        IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
        IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonInput
    },
    data() {
        return {
            characters: [],
            page: null
        }
    },
    methods: {
        getData() {
            if(this.page != null) {
                axios.get(`https://rickandmortyapi.com/api/character?page=${this.page}`)
                .then(response => {
                    this.characters = response.data.results
                    console.log(response.data)
                })
                .catch(error => console.error(error))
            } else {
                axios.get(`https://rickandmortyapi.com/api/character?page=1`)
                .then(response => {
                    this.characters = response.data.results
                    console.log(response.data)
                })
                .catch(error => console.error(error))
            }
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style>
h1 {
    text-align: center
}

span {
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
}
</style>