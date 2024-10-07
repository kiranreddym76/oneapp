import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { OneappHomeComponent } from '../components/oneapp-ui/oneapp-home/oneapp-home.component'


const routes : Routes = [
	{ path: '' , redirectTo: '', pathMatch: 'full'},
	{
		path:'' ,
		children:[
			{path: '' , component : OneappHomeComponent},
			{path: 'home' , component : OneappHomeComponent}
		]
	},
	{ path: 'not-found' , component : PageNotFoundComponent},
	{ path: '**' , component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash : true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
