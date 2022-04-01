// Ejemplo de script:

/*<script>
export default {
  name: 'ColorCode',
  computed: {
    colorChange: {
      get(){
        return this.$store.state.color;
      },
      set(color){
        this.$store.dispatch("colorChange",color);
      }
    }
  },
}
</script>*/

const title = new Vue({
  el:'#title',
  data: {
    titulo: '¨En Pasteleria: Los Perritos Cosmicos deseamos que lleve el mejor regalo a sus hogares por ello, le ofrecemos un extenso surtido de sabores y adornos para que eliga el perfecto en su momento de felicidad "cosmica":"',
    menu_pastel: 'Menu de Pasteles',
    pasteles: ["Apolo Cooker (Cheesecake) Queso con Zarzamora 3kg..........................$ 350", "Asteoide schnauzer (Tres Leches) Tres tipos de leche 3kg...................$ 280", "Galaxia Dalmata (Napolitano) Vainilla, Fresa y chocolate 3kg................$ 420", "Cometa Labrador(Imposible) Flan con Chocolate 3kg...............................$ 450", "Polvo estelar Pit bull (Chocolate) Chocolate amrgo con Fresa 3kg.......$ 350"],
    menu_adornos: 'Menu de Adornos',
    adornos: [
      {Nombre: "Doberman Meteoro (Bodas):", Especialidad: "Pastel en forma escalonada con Moño blanco 3kg...........................$ 350", Cantidad: 2 },
      {Nombre: "Samoyedo Super NOVA (Graduación):", Especialidad: "Pastel entregado en estuche 3kg...........................................................$ 280", Cantidad: 2},
      {Nombre: "Boxer Estrella(Cumpleaños):", Especialidad:"Pastel con Velas y de color azul o rosa 3kg.......................................$ 420", Cantidad: 0},
      {Nombre: "Chihuahua Satelite(Bautizo):",Especialidad: "Pastel con cobertura Blanca 3kg...........................................................$ 450", Cantidad: 2},
      {Nombre: "Maltilpoo Nebulosa (Sorpresa):",Especialidad: "Pastel con detalles decorativos en cobertura betun 3kg...............$ 350", Cantidad: 0}],
      
    } 
}) 

