Rails.application.routes.draw do


  resources :users, only: [:index, :new, :create, :show, :update]
  resources :auth, only: [:index, :show]

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  namespace :api, defaults: { format: 'json' } do
    resources :auth, only: [:index, :show]
    resources :postings
    resources :users, only: [:index, :show]
  end

  root to: 'postings#index'
end