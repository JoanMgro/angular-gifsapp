import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" 
      name=""
      id=""
      class="form-control"
      placeholder="Buscar gifs"
      (keyup.enter)="searchTag()"
      #txtTagInput>
  `,
  
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  

  constructor(private gifsService: GifsService){}

  //usando el ViewChild ya no tengo que pasael argumento a la funcoin proque ya ese valor esta en la propiedad.
  // searchTag(newTag: string){
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
    console.log({newTag});
  }

}
