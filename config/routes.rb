Rails.application.routes.draw do

  resources :postings, only: [:index, :show]
  resources :users, only: [:index, :new, :create, :show, :update]
  resources :auth, only: [:index, :show]
  resources :likes
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  namespace :api, defaults: { format: 'json' } do
    resources :auth, only: [:index, :show]
    resources :postings
    resources :likes
    resources :users, only: [:index, :show]
  end

  root to: 'postings#index'
end