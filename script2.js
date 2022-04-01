const existencias = new Vue({
  el:'#existencias',
  data: {
    menu_adornos: 'Menu de Adornos:',
    adornos: [
      {Nombre: "Doberman Meteoro (Bodas):", Especialidad: "Pastel en forma escalonada con Moño blanco 3kg............................$ 350", Cantidad: 2 },
      {Nombre: "Samoyedo Super NOVA (Graduación):", Especialidad: "Pastel entregado en estuche 3kg........................................................$ 280", Cantidad: 2},
      {Nombre: "Boxer Estrella(Cumpleaños):", Especialidad:"Pastel con Velas y de color azul o rosa 3kg.......................................$ 420", Cantidad: 0},
      {Nombre: "Chihuahua Satelite(Bautizo):",Especialidad: "Pastel con cobertura Blanca 3kg........................................................$ 450", Cantidad: 2},
      {Nombre: "Maltilpoo Nebulosa (Sorpresa):",Especialidad: "Pastel con detalles decorativos en cobertura betun 3kg.....................$ 350", Cantidad: 0}],  
      nuevoAdorno: '',
      actualizarCantidad:'',
      total: 0
    },
  
    methods: {
      agregarAdorno () {
        this.adornos.push
        ({Nombre:this.nuevoAdorno, Especialidad: "Pendiente", Cantidad: this.actualizarCantidad});
        this.nuevoAdorno = '';
        this.actualizarCantidad = '';
      }
    },
    computed: {
      sumarAdornos () {
        this.total = 0;
        for(adorno of this.adornos){
          this.total = this.total + adorno.Cantidad;
        }
        return this.total;
      }
    } 
})