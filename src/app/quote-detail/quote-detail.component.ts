import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {


  @Input()
  quote!: Quote;
  @Output() isLiked = new EventEmitter<boolean>();
  @Output() isDisliked = new EventEmitter<boolean>();
  @Output() isDelete = new EventEmitter<boolean>();

  quoteLiked(liked:boolean){
    this.isLiked.emit(liked)
  }
  quoteDelete(remove:boolean){
    this.isDelete.emit(remove)
  }
  quoteDisliked(disliked:boolean){
    this.isDisliked.emit(disliked)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
