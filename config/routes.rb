Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
root to: redirect('/todos')

get 'todos', to: 'site#index'
get 'todos/new', to: 'site#index'
get 'todos/:id/edit', to: 'site#index'

namespace :api do ##do end はブロック
  namespace :v1 do
    delete '/todos/destroy_all', to: 'todos#destroy_all'
    resources :todos, only: %i[index show create update destroy]
  end
end
end
