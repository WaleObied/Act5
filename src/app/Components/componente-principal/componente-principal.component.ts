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

  publicar(): void {

    let noticia: Noticia = {
      titulo: this.titulo,
      img: this.img,
      textoNoticia: this.textoNoticia,
      fecha: this.fecha
    }
    this.arrNoticias.push(noticia);
    this.cargarNoticia();


    console.log(this.arrNoticias);

    this.titulo = "";
    this.img = "";
    this.textoNoticia = "";
    this.fecha = "";
  }

  cargarNoticia(): void {
    this.noticiasPublicadas = "";
    this.arrNoticias.forEach(noticia => {
      this.noticiasPublicadas += `<li> ${noticia.titulo} ${noticia.img} ${noticia.textoNoticia} ${noticia.fecha}</li>`;
    });
  }
}
