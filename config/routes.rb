Rails.application.routes.draw do
  namespace :api do
   resources :users do
    resources :comments
     end
     resources :crimes
    end
  end
  

#  get "/users", to: "users#index", as: "users"
#     post "/users", to: "users#create"
#     get "/users/:id", to: "users#show", as: "user"
#     patch "/users/:id", to: "users#update"
#     delete "/users/:id", to: "users#destroy"
# namespace :api do
#     get "/comments", to: "comments#index"
#   end
# end