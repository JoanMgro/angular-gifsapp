import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyimage.component.html',
  styleUrl: './lazyimage.component.css'
})
export class LazyimageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;
  
  ngOnInit(): void {
    if(!this.url) throw new Error('url props is required');
  }

  onLoad(): void{
    console.log('Image Loaded');
    this.hasLoaded = true;
  }


}
