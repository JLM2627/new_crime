Rails.application.routes.draw do
  namespace :api do
   resources :users do
    resources :comments
     end
     resources :crimes
    end
  end
  

