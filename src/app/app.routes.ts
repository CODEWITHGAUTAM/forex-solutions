import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing components
import { HomeComponent } from './components/home/home.component';
// import { FeaturesComponent } from './components/features/features.component';
// import { OptionsTradingComponent } from './components/options-trading/options-trading.component';
// import { PricingComponent } from './components/pricing/pricing.component';
// import { EnterpriseComponent } from './components/enterprise/enterprise.component';
// import { SupportComponent } from './components/support/support.component';
// import { LearnComponent } from './components/learn/learn.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to home
  { path: 'home', component: HomeComponent },
//   { path: 'features', component: FeaturesComponent },
//   { path: 'options-trading', component: OptionsTradingComponent },
//   { path: 'pricing', component: PricingComponent },
//   { path: 'enterprise', component: EnterpriseComponent },
//   { path: 'support', component: SupportComponent },
//   { path: 'learn', component: LearnComponent },
  
  { path: '**', redirectTo: 'home' }, // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
