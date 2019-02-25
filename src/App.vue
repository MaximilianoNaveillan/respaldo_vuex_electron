<template>
<v-app id="inspire">
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    fixed
    app
  >
    <v-list dense>
       <template>
           <v-list-tile :to="{ name: 'home'}">
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>
              <router-link to="/">Home</router-link>
              </v-list-tile-title>
           </v-list-tile>

           <v-list-tile :to="{ name: 'about'}">
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>
                <router-link to="/about">About</router-link>
              </v-list-tile-title>
           </v-list-tile>

           <v-list-tile :to="{name: 'config'}">
             <v-list-tile-action>
                <v-icon>settings</v-icon>
             </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  Configuración
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
       </template>
       <template>
         <v-list-group>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                 <v-list-tile-title>
                   Almacén
                 </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
                    <v-list-tile :to="{name: 'articulos'}">
                        <v-list-tile-action>
                          <v-icon>table_chart</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                           <v-list-tile-title>
                             Artículos
                           </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile :to="{name: 'categorias'}">
                        <v-list-tile-action>
                          <v-icon>table_chart</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                           <v-list-tile-title>
                             Categorías
                           </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile :to="{name: ''}">
                        <v-list-tile-action>
                          <v-icon>table_chart</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                           <v-list-tile-title>
                             Marcas
                           </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile :to="{name: ''}">
                        <v-list-tile-action>
                          <v-icon>table_chart</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                           <v-list-tile-title>
                             Proveedores
                           </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
         </v-list-group>

         <v-list-group>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                 <v-list-tile-title>
                   Compras
                 </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
                    <v-list-tile :to="{name: ''}">
                        <v-list-tile-action>
                          <v-icon>table_chart</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                           <v-list-tile-title>
                             Ingresos
                           </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile :to="{name: ''}">
                        <v-list-tile-action>
                          <v-icon>table_chart</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                           <v-list-tile-title>
                             Proveedores
                           </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
         </v-list-group>
       </template>
    </v-list>
     <p>{{config_money}}</p>

  </v-navigation-drawer>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">Sistema</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
       <v-slide-y-transition mode="out-in">
         <router-view/>
       </v-slide-y-transition>
    </v-container>
  </v-content>

</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import { mapState } from "vuex"
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
    dialog: false,
    drawer: null
    }
  },
  computed:{
    ...mapState(['config_money'])
  }
}

</script>

<style>
#inspire a.router-link-exact-active{
color:#26a69a !important;
}
</style>
