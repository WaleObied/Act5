import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-componente-principal',
  templateUrl: './componente-principal.component.html',
  styleUrls: ['./componente-principal.component.css']
})
export class ComponentePrincipalComponent {
  
  titulo: string = "";
  img: string = "";
  textoNoticia: string = "";
  fecha: string = "";
  arrNoticias: Noticia[] = [];
  noticiasPublicadas: string = "";
  

  constructor() { 
    this.arrNoticias = new Array (
      {titulo: 'Día Internacional de la Mujer y la Niña en la Ciencia', img: 'assets/11F.jpg', textoNoticia: 'El 11 de febrero se celebra el Día Internacional de la Mujer y la Niña en la Ciencia, proclamado por la ONU en el año 2015. El objetivo principal de este día es lograr una mayor participación e inclusión de las mujeres y las niñas en el mundo de la ciencia y la tecnología y de esta manera romper con la brecha de género. Actualmente, en algunos países del mundo existe una lucha de géneros, donde las mujeres han sido relegadas en la participación en disciplinas como la tecnología, las ciencias o las matemáticas.', fecha: '11/02/2023'},
      {titulo: 'Más hallazgos del James Webb se esperan para este año', img: 'assets/JamesWebb.jpg', textoNoticia: 'Si 2022 fue el año del James Webb, 2023 también lo será. El nuevo telescopio espacial, fruto de la colaboración de la NASA, la Agencia Espacial Europea (ESA) y la Agencia Espacial Canadiense ha cumplido un año en el espacio, tiempo durante el que ha mostrado sus grandes capacidades para ver mejor y más lejos en el universo, como si fuera una máquina del tiempo. Nos ha mostrado las galaxias más antiguas conocidas y ha atisbado atmósfera del planetas extrasolares. Este año se espera que sus hallazgos científicos continúen.', fecha: '10/02/2023'}
    ) 

    console.log(this.arrNoticias)

  }

  publicar(): void {
    let noticia: Noticia = {
      titulo: this.titulo,
      img: this.img,
      textoNoticia: this.textoNoticia,
      fecha: this.fecha
    }

     if (this.titulo === "" || this.img ==="" || this.textoNoticia ==="" || this.fecha ===""){
      alert("debes rellenar todos los campos.");

      } else {
        this.arrNoticias.push(noticia);
        this.cargarNoticia();

      }

    console.log(this.arrNoticias);

    this.titulo = "";
    this.img = "";
    this.textoNoticia = "";
    this.fecha = "";
  }


  cargarNoticia(): void {
    this.noticiasPublicadas = "";
    this.arrNoticias.forEach(noticia => {
      this.noticiasPublicadas += 
      `<li>
       <h3>${noticia.titulo}</h3>
        <img src= "${noticia.img}">
        <p>${noticia.textoNoticia}</p>
        <p>${noticia.fecha}</p>
        </li>`;
    }); 
  }
}
