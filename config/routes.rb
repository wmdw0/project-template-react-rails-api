Rails.application.routes.draw do
  resources :tweets
  resources :users
  resources :trendings
  resources :notifications
  resources :comments
  patch "/tweets/:id", to: "tweets#update"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/tweets", to: "tweets#create"
  get "/tweets", to: "tweets#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/comments", to: "comments#create"

end
