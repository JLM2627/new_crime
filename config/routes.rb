Rails.application.routes.draw do
  namespace :api do
    get "/users", to: "users#index", as: "users"
    post "/users", to: "users#create"
    get "/users/:id", to: "users#show", as: "user"
    patch "/users/:id", to: "users#update"
  end
end
