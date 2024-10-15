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
                    <ion-col size="8">
                        <h1><b>{{ response.name }}</b></h1>
                        <ion-card>
                            <ion-card-content>
                                <ion-row>
                                    <ion-col size="12">
                                        <span class="line first_line">Going to the beach</span>
                                        <span class="line second_line">Going to the bitch</span>
                                        <img v-if="response.url" :src="response.url" alt="foto"/>
                                        <span class="text-align">Uy sorry teacher, pronuncie mal ( ͡° ͜ʖ ͡°)</span>
                                    </ion-col>
                                </ion-row>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script scoped>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
// import { ellipse, square, triangle } from 'ionicons/icons';
export default {
    name: "EjercicioDos",
    components: {
        IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent 
    },
    data() {
        return {
            response: {}
        }
    },
    methods: {
        getData() {
            fetch(`https://api.imgflip.com/get_memes`)
            .then(response => response.json())
            .then(data => {
                this.response = data.data.memes[0]
                console.log(data.data)
            })
            .catch(error => console.log('Ha ocurrido un error: ' + error))
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style>
h1 {
    text-align: center;
    margin-bottom: 20px;
}

.text-align {
    display: block;
    text-align: center;
}

.line {
    color: #000;
    font-family: monospace;
    position: absolute;
    font-weight: bold;
    font-size: 25px;
    width: 180px;
    text-align: center;
}

.first_line {
    top: 25%;
    left: 70%;
    transform: translate(-25%, -25%);
}

.second_line {
    bottom: 25%;
    left: 70%;
    transform: translate(-25%, -15%);
}
</style>