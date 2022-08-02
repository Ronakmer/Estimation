import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo';
  constructor( private service : AppServiceService){}
   
  ngOnInit(){
    this.getdataFromAPI();
  }
  url="./assets/logo2.png"
  getdataFromAPI(){
    this.service.getData().subscribe((response)=>{
      console.log('Respone from api',response)
    },(error)=>{
      console.log('error',error);
    })
  }
 
  demo(){
    swal.fire({
      title: 'Kindly provide Your Email Id',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  }

}