import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookform:FormGroup;

  constructor(private formBuilder: FormBuilder ,
    private router: Router ,
    private ngZone: NgZone,
    private crudApi:CrudService ) { 
      this.bookform = this.formBuilder.group({
        name:[''],
        price: [''],
        description: ['']
      })
    }

  ngOnInit(): void {
  }
  onSubmit():any{
    this.crudApi.addBook(this.bookform.value).subscribe((res:any)=>{
      alert("Data Added Sucessfully");
      this.ngZone.run(()=> this.router.navigateByUrl('/book-list'))
    } , (err)=>{
      console.log(err);
    })
  }

}
