import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { IAuthor } from '../../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent {

  authorId: string;
  authorDetail: IAuthor
  constructor(private activatedRoute: ActivatedRoute, private authorService: AuthorService, private route: Router) {
    this.authorId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getAuthorDetails();    
  }

  getAuthorDetails() {
    this.authorService.getAuthor(this.authorId).subscribe((d) => {      
      this.authorDetail = d;            
    });
  };


  onGoBackClick(){
    this.route.navigate(['author-list']);    
  }
}

