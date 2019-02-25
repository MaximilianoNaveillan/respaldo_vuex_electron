<template>
  <v-container grid-list-md >
    <v-layout justify-center >
      <v-layout row wrap >
        <v-flex xs12 sm6 md6>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap >
            Configuración de moneda
            <v-spacer></v-spacer>
            <h3><vue-numeric read-only v-bind:currency="currency" v-bind:separator="separator" v-bind:precision="precision" v-model="monto"></vue-numeric></h3>

              <v-radio-group v-model="separator" :mandatory="false" row>
                  <v-radio label="separado por ' , '" value=","></v-radio>
                  <v-radio label="separado por ' . '" value="."></v-radio>
                  <v-radio label="separado por espacio" value="space"></v-radio>
              </v-radio-group>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="currency" label="Prefijo"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                  <div class="v-input v-text-field v-input--is-label-active v-input--is-dirty theme--light">
                  <div class="v-input__control"><div class="v-input__slot"><div class="v-text-field__slot">
                  <label aria-hidden="false" class="v-label v-label--active theme--light" style="left: 0px; right: auto; position: absolute;">
                    Decimal
                  </label>
                  <vue-numeric currency="" separator="" v-bind:precision="0" v-model="precision" v-bind:minus="false" v-bind:max="3"></vue-numeric>
                  </div></div><div class="v-text-field__details">
                  <div class="v-messages theme--light">
                  <div class="v-messages__wrapper">
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </v-flex>
          </v-layout>
          <v-btn block color="success" @click="config">Guardar cambio</v-btn>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md6>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>


          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
      </v-layout>
  </v-layout>
  </v-container>
</template>

<script>
import VueNumeric from 'vue-numeric';
const { remote, ipcRenderer } = require('electron');
import { mapMutations, mapGetters  } from "vuex";
export default {
  components: {
    VueNumeric,
  },
  data (){
    return {
      monto:'0',
      separator: 'space',
      precision: 0,
      currency:''
    }
  },
  computed:{
    ...mapGetters(['getMoneyConfig'])
  },
  created () {
    this.initialize()
  },
  methods:{
    ...mapMutations(['configMoney']),
  initialize () {
    const nwstate=this.getMoneyConfig
    this.monto=nwstate.monto
    this.separator=nwstate.separator
    this.moprecisionnto=nwstate.moprecisionnto
    this.currency=nwstate.currency
  },
  config(){
    ipcRenderer.send('open-add-product', 'ping')
    this.configMoney({monto:'8000'})
  }
  }




}
</script>

