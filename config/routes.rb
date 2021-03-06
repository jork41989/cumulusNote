Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update,] do
      resources :songs, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :songs do  
      resources :comments, only: :index
      
    end
    resources :comments, except: :index
    get :search, controller: :songs
  end
end
