Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'

  get 'test', to: 'test#index'
  namespace :api, defaults: { format: 'json' } do
    resources :postings, only: [:index, :create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
