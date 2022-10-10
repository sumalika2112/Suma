import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookArr:Book[];
  book:Book;

  constructor(private libraryService:LibraryService,private route:Router) { }

  ngOnInit(): void {
    this.libraryService.getAllBooks().subscribe(data=>{
      this.bookArr=data;
    });
  }

  onLibrarySubmit(libraryForm:NgForm){
    if(libraryForm.value.search == ""){
      window.location.reload();
    }
    console.log(libraryForm.value.search);
    this.bookArr=this.bookArr.filter(b=>b.name == libraryForm.value.search );
  }
  gotoAddBook(){
    this.route.navigateByUrl("/insert-book");
  }
  borrowAction(id:number){
    const date = new Date();
    date.setDate(date. getDate() + 7); 
    window.alert("Return before :"+date);
    this.libraryService.updateBook(id,"false").subscribe()
    window.location.reload();
  }

  returnAction(id:number){
    window.alert("Thank You for Returning");
    this.libraryService.updateBook(id,"true").subscribe()
    window.location.reload();
  }
}
