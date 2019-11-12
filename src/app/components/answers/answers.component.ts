import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  qaDetails: any;

  constructor() { }

  ngOnInit() {
    
      $.ajax({
        url: "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/getUnApprovedAnswer",
        headers: { Authorization: localStorage.getItem('token') },
        contentType: "application/json",
        type: 'get',
        dataType: "json",
        success: (response) => {
          console.log(response.data.reverse());
          this.qaDetails = response.data.reverse();
        }
      });
    
  }

  approve(id) {
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/approve/"+id,
      headers: { Authorization: localStorage.getItem('token') },
      contentType: "application/json",
      type: 'post',
      dataType: "json",
      success: (response) => {
        console.log(response);
        this.ngOnInit();
      }
    });
  }

  reject(id) {
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/reject/"+id,
      headers: { Authorization: localStorage.getItem('token') },
      contentType: "application/json",
      type: 'post',
      dataType: "json",
      success: (response) => {
        console.log(response);
        this.ngOnInit();
      }
    });
  }

}
