import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IAuthor } from '../../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit {
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList: QueryList<ElementRef> | undefined;

  autSub: Subscription | undefined;

  authors: IAuthor[] = [];

  totalPages: number;
  currentPage: number = 1;

  observer: any;


  constructor(private authorService : AuthorService, private spinner: NgxSpinnerService, private route: Router){

  }

  ngOnInit(): void {
    this.getAuthors();    
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.theLastList.changes.subscribe((d) => {      
      if (d.last) this.observer.observe(d.last.nativeElement);
    });
  }


  getAuthors(){
    this.spinner.show();    
    this.autSub = this.authorService.getAuthorList(this.currentPage).subscribe((d) => {      
      this.spinner.hide();      
      this.totalPages = d.length;      
      d.forEach((element : IAuthor) => {        
        this.authors.push(element);
      });      
    });
  }

  

  intersectionObserver() {    
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {    
      if (entries[0].isIntersecting) {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.getAuthors();
        }
      }
    }, options);
  }  

  onClickAuthor(id : string){
    this.route.navigate(['author-detail', id]);    
  }
}
