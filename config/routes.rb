Rails.application.routes.draw do

  resources :postings, only: [:index, :show]
  resources :users, only: [:index, :new, :create, :show, :update]
  resources :auth, only: [:index, :show]
  resources :likes
  resources :events, only: [:index]
  
  get '/login' => 'sessions#new'
  get '/logout' => 'sessions#destroy'

  namespace :api, defaults: { format: 'json' } do
    resources :sessions
    resources :postings
    resources :likes
    resources :users
  end

  root to: 'postings#index'
end