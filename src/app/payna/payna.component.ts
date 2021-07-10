import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payna',
  templateUrl: './payna.component.html',
  styleUrls: ['./payna.component.css']
})
export class PaynaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/product'])
  }
}
