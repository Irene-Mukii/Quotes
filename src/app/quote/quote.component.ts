import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'keyv';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'Ya mjinga husimamiwa na Mungu', 'God defends the simple')
  ]

  toggleElaboration(index:number){
    this.quotes[index].showElaboration = !this.quotes[index].showElaboration;
  }

  vote(isLiked: any, index: number){
    if (isLiked){
      for (){
        
      }
      var likes= +1;
      console.log(`This quote has ${likes} votes`)
    }
  }
  downVote( isDisliked: any, index: number){
    if(isDisliked){
      var dislikes=+1;
      console.log(`This quote has ${dislikes} dislikes`)
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
