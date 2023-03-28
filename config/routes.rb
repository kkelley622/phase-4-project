Rails.application.routes.draw do
  
  resources :books, only: [:index, :show, :create]
  resources :reviews
  resources :users, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/signup", to: "users#create"
  get "/get-current-user", to: "users#get_current_user"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end

