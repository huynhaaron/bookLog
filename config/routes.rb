Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    # resource :books, only: [:index, :show]
    # controller :books do
    #   get 'books' => :index
    #   get 'books/:id' => :show
    # end
    resources :books, only: [:index, :show]
  end
end
