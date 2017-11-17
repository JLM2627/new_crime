Rails.application.routes.draw do
  namespace :api do
   resources :crimes do

         resources :comments

     
    end
    resources :users
  end
end
  

