import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'keyv';
import {Quote} from '../quote'
import{bestQuoteDirective} from '../best-quote.directive'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Ya mjinga husimamiwa na Mungu', 'God defends the simple', 'mother', 'Irene',new Date(2021,10,11))
  ]

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }
  toggleElaboration(index:number){
    this.quotes[index].showElaboration = !this.quotes[index].showElaboration;
  }
  public likes =0;
  public dislikes = 0;
  vote( isLiked: any, index: number){
      this.likes += 1;
      console.log(`This quote has ${this.likes} votes`)
  }
 
  downVote(  isDisliked: any, index: number){
    if(isDisliked){
      this.dislikes += 1;
      console.log(`This quote has ${this.dislikes} dislikes`)
    }
  }

  deleteQuote(isDelete: any, index: number){
    if(isDelete){
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
